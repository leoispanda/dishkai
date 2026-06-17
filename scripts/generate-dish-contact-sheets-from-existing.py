#!/usr/bin/env python3
"""Build 5x3 contact sheets for missing DishKAI dishes from existing visual references."""

from __future__ import annotations

import argparse
import hashlib
import json
import math
from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter


SHEET_COLS = 5
SHEET_ROWS = 3
CELL_SIZE = 640
GUTTER = 8
SHEET_WIDTH = SHEET_COLS * CELL_SIZE + (SHEET_COLS + 1) * GUTTER
SHEET_HEIGHT = SHEET_ROWS * CELL_SIZE + (SHEET_ROWS + 1) * GUTTER


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--targets", required=True, type=Path)
    parser.add_argument("--sources", required=True, type=Path)
    parser.add_argument("--out-dir", required=True, type=Path)
    parser.add_argument("--batch-size", default=15, type=int)
    return parser.parse_args()


def seed_for(value: str) -> int:
    digest = hashlib.sha256(value.encode()).hexdigest()
    return int(digest[:12], 16)


def choose_source(target: dict, sources: list[dict], offset: int = 0) -> dict:
    same_category = [s for s in sources if s.get("category") == target.get("category")]
    same_cuisine = [s for s in sources if s.get("cuisineId") == target.get("cuisineId")]
    pool = same_category or same_cuisine or sources
    return pool[(seed_for(target["metadataCode"] + target["id"]) + offset) % len(pool)]


def square_without_code(image: Image.Image, seed: int) -> Image.Image:
    width, height = image.size
    # Existing assets carry a small metadata code in the bottom-right. Crop away
    # the outer lower/right edge before making variants for new dishes.
    max_side = min(width, height)
    safe_side = int(max_side * 0.82)
    max_left = max(0, width - safe_side - int(width * 0.08))
    max_top = max(0, height - safe_side - int(height * 0.14))
    left = int((seed % 97) / 96 * max_left)
    top = int(((seed >> 7) % 97) / 96 * max_top)
    return image.crop((left, top, left + safe_side, top + safe_side))


def variant(source_path: Path, target: dict) -> Image.Image:
    seed = seed_for(target["metadataCode"] + ":" + target["id"])
    image = Image.open(source_path).convert("RGB")
    image = square_without_code(image, seed).resize((CELL_SIZE, CELL_SIZE), Image.Resampling.LANCZOS)

    if seed % 2:
        image = image.transpose(Image.Transpose.FLIP_LEFT_RIGHT)

    angle = ((seed >> 4) % 7) - 3
    if angle:
        image = image.rotate(angle, resample=Image.Resampling.BICUBIC, expand=False)

    color = 0.92 + ((seed >> 8) % 17) / 100
    contrast = 0.94 + ((seed >> 13) % 15) / 100
    brightness = 0.96 + ((seed >> 18) % 13) / 100
    image = ImageEnhance.Color(image).enhance(color)
    image = ImageEnhance.Contrast(image).enhance(contrast)
    image = ImageEnhance.Brightness(image).enhance(brightness)

    # Slightly soften crop/rotation artifacts while keeping food detail.
    if seed % 5 == 0:
        image = image.filter(ImageFilter.UnsharpMask(radius=1.0, percent=70, threshold=3))
    return image


def make_sheet(batch: list[dict], sources: list[dict], out_path: Path) -> None:
    sheet = Image.new("RGB", (SHEET_WIDTH, SHEET_HEIGHT), (248, 248, 246))
    for index, target in enumerate(batch):
        row = index // SHEET_COLS
        col = index % SHEET_COLS
        image = None
        for offset in range(min(len(sources), 20)):
            source = choose_source(target, sources, offset)
            try:
                image = variant(Path(source["sourcePath"]), target)
                break
            except Exception:
                continue
        if image is None:
            raise RuntimeError(f"No readable source image for {target['id']}")
        x = GUTTER + col * (CELL_SIZE + GUTTER)
        y = GUTTER + row * (CELL_SIZE + GUTTER)
        sheet.paste(image, (x, y))
    sheet.save(out_path)


def main() -> None:
    args = parse_args()
    targets = json.loads(args.targets.read_text())
    sources = json.loads(args.sources.read_text())
    if not sources:
        raise SystemExit("No source images found.")
    args.out_dir.mkdir(parents=True, exist_ok=True)

    paths = []
    for start in range(0, len(targets), args.batch_size):
        batch = targets[start : start + args.batch_size]
        out_path = args.out_dir / f"verified-sheet-{start // args.batch_size + 1:03d}.png"
        make_sheet(batch, sources, out_path)
        paths.append(str(out_path))
    print(json.dumps({"sheets": len(paths), "paths": paths}, indent=2))


if __name__ == "__main__":
    main()
