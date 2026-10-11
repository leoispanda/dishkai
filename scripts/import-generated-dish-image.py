#!/usr/bin/env python3
import argparse
import hashlib
import json
import re
from datetime import datetime, timezone
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


def load_font(size):
    for font_path in (
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
    ):
        try:
            return ImageFont.truetype(font_path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def cover_square(image, size):
    width, height = image.size
    side = min(width, height)
    left = (width - side) // 2
    top = (height - side) // 2
    return image.crop((left, top, left + side, top + side)).resize((size, size), Image.LANCZOS)


def stamp_code(image, code):
    draw = ImageDraw.Draw(image)
    font = load_font(max(18, image.size[0] // 28))
    bbox = draw.textbbox((0, 0), code, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    pad = max(8, image.size[0] // 80)
    x = image.size[0] - text_width - pad * 2
    y = image.size[1] - text_height - pad * 2
    draw.rounded_rectangle(
        (x - pad, y - pad, x + text_width + pad, y + text_height + pad),
        radius=pad,
        fill=(248, 244, 236),
        outline=(70, 55, 42),
        width=max(1, image.size[0] // 300),
    )
    draw.text((x, y), code, font=font, fill=(45, 36, 30))
    return image


def has_content_credentials(source_bytes):
    """Conservative guard, not a signature validator or watermark detector."""
    lowered = source_bytes.lower()
    return any(marker in lowered for marker in (
        b"c2pa", b"jumb", b"contentcredentials", b"content credentials",
    ))


def import_image(source, root, code, dish_id, batch):
    if not re.fullmatch(r"[1-7][0-9]{5}", code):
        raise ValueError("metadataCode must use the six-digit DishKAI code format.")
    if not all(re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", slug) for slug in (dish_id, batch)):
        raise ValueError("Dish ID and batch must be lowercase slugs.")

    source_bytes = source.read_bytes()
    source_dir = root / "data/internal/audit/rebuild-batches" / f"{batch}-image-sources"
    source_dir.mkdir(parents=True, exist_ok=True)
    stem = f"{code}-{dish_id}"
    extension = source.suffix.lower() if source.suffix.lower() in (".png", ".jpg", ".jpeg", ".webp") else ".bin"
    source_digest = hashlib.sha256(source_bytes).hexdigest()
    original_path = source_dir / f"{stem}.original-{source_digest[:16]}{extension}"
    original_path.write_bytes(source_bytes)
    credentials_detected = has_content_credentials(source_bytes)
    manifest = {
        "version": 1,
        "metadataCode": code,
        "dishId": dish_id,
        "declaredOrigin": "ai-generated",
        "originalFile": original_path.name,
        "originalSha256": source_digest,
        "importedAt": datetime.now(timezone.utc).isoformat(),
        "contentCredentialsDetected": credentials_detected,
        "markingStatus": "declared-provenance-only",
        "transformationStatus": "blocked" if credentials_detected else "pending",
        "note": "Source archive and declared origin are not proof of robust AI marking or signature validity.",
    }
    manifest_path = source_dir / f"{stem}.{source_digest[:16]}.provenance.json"
    manifest_path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    if credentials_detected:
        raise ValueError(
            "Content-credential markers detected. Original bytes were archived, but no website assets "
            "were changed. Use a toolchain that preserves valid lineage and re-signs transformed content; "
            "do not strip credentials or copy the original signature onto resized pixels."
        )

    with Image.open(source) as opened:
        image = opened.convert("RGB")
    # Preserve the historical PNG working-copy path; the .original file is the evidence archive.
    source_copy = source_dir / f"{stem}.png"
    image.save(source_copy)
    main_path = root / f"public/assets/dishes/main/{stem}.webp"
    thumb_path = root / f"public/assets/dishes/thumb/{stem}.webp"
    main_path.parent.mkdir(parents=True, exist_ok=True)
    thumb_path.parent.mkdir(parents=True, exist_ok=True)
    stamp_code(cover_square(image, 1024), code).save(main_path, quality=88, method=6)
    stamp_code(cover_square(image, 360), code).save(thumb_path, quality=82, method=6)
    manifest.update({
        "transformationStatus": "completed-without-credential-toolchain",
        "derivatives": [
            {"path": str(path.relative_to(root)), "sha256": hashlib.sha256(path.read_bytes()).hexdigest()}
            for path in (main_path, thumb_path)
        ],
    })
    manifest_path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    return original_path, source_copy, main_path, thumb_path, manifest_path


def main():
    parser = argparse.ArgumentParser(description="Import a generated DishKAI dish image into website assets.")
    parser.add_argument("--src", required=True, help="Generated source image path")
    parser.add_argument("--code", required=True, help="Dish metadataCode/imageCode")
    parser.add_argument("--dish-id", required=True, help="Stable DishKAI dish id")
    parser.add_argument("--batch", required=True, help="Audit batch slug for raw source archival")
    parser.add_argument("--root", default=".", help="Repository root")
    args = parser.parse_args()

    root = Path(args.root).resolve()
    source = Path(args.src).resolve()
    if not source.exists():
        raise SystemExit(f"Source image not found: {source}")

    try:
        for path in import_image(source, root, args.code, args.dish_id, args.batch):
            print(path)
    except ValueError as error:
        raise SystemExit(str(error)) from error


if __name__ == "__main__":
    main()
