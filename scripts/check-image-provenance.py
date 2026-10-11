#!/usr/bin/env python3
"""Synthetic checks for byte-exact source retention and guarded image transforms."""
import hashlib
import importlib.util
import json
import tempfile
from pathlib import Path

from PIL import Image, PngImagePlugin

repository = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("dish_image_importer", repository / "scripts/import-generated-dish-image.py")
importer = importlib.util.module_from_spec(spec)
spec.loader.exec_module(importer)
fixture_parent = repository / "photo"
fixture_parent.mkdir(exist_ok=True)

with tempfile.TemporaryDirectory(prefix="provenance-check-", dir=fixture_parent) as directory:
    root = Path(directory)
    source = root / "synthetic.png"
    info = PngImagePlugin.PngInfo()
    info.add_text("test-origin", "Wholly synthetic test fixture")
    Image.new("RGB", (140, 100), (180, 140, 100)).save(source, pnginfo=info)
    original_bytes = source.read_bytes()
    original, working, main, thumb, manifest_path = importer.import_image(source, root, "101001", "test-dish", "test")
    assert original.read_bytes() == original_bytes, "Original source bytes and embedded metadata must survive unchanged."
    assert working.exists(), "Keep the existing PNG working-copy convention."
    manifest = json.loads(manifest_path.read_text())
    assert manifest["declaredOrigin"] == "ai-generated"
    assert manifest["originalSha256"] == hashlib.sha256(original_bytes).hexdigest()
    assert manifest["markingStatus"] == "declared-provenance-only"
    for derivative in manifest["derivatives"]:
        assert derivative["sha256"] == hashlib.sha256((root / derivative["path"]).read_bytes()).hexdigest()
    with Image.open(main) as image:
        assert image.size == (1024, 1024)
    with Image.open(thumb) as image:
        assert image.size == (360, 360)

    before = (main.read_bytes(), thumb.read_bytes())
    signed_fixture = root / "credential-markers.png"
    credentials = PngImagePlugin.PngInfo()
    credentials.add_text("XML:com.adobe.xmp", '<x:xmpmeta xmlns:c2pa="urn:c2pa:test">synthetic marker, not a valid signature</x:xmpmeta>')
    Image.new("RGB", (100, 100), (0, 0, 0)).save(signed_fixture, pnginfo=credentials)
    try:
        importer.import_image(signed_fixture, root, "101001", "test-dish", "credential-test")
        raise AssertionError("Credential-bearing inputs must be blocked before website transformations.")
    except ValueError as error:
        assert "Content-credential markers detected" in str(error)
    assert (main.read_bytes(), thumb.read_bytes()) == before, "A blocked import must preserve existing website assets."
    credential_manifest_path = next((root / "data/internal/audit/rebuild-batches/credential-test-image-sources").glob("*.provenance.json"))
    credential_manifest = json.loads(credential_manifest_path.read_text())
    retained_source = credential_manifest_path.parent / credential_manifest["originalFile"]
    assert retained_source.read_bytes() == signed_fixture.read_bytes()
    assert credential_manifest["transformationStatus"] == "blocked"
    assert credential_manifest["contentCredentialsDetected"] is True

    assert importer.has_content_credentials(b"jpeg-container-jumb-test")
    for code, dish_id, batch in [("123", "test-dish", "test"), ("101001", "../outside", "test"), ("101001", "test-dish", "../outside")]:
        try:
            importer.import_image(source, root, code, dish_id, batch)
            raise AssertionError("Invalid identifiers must be rejected before writing assets.")
        except ValueError:
            pass

print("Image provenance checks passed: exact source archive, derivative hashes, credential guard, asset preservation and safe identifiers.")
