#!/usr/bin/env python3
"""Crop a 5x3 DishKAI contact sheet into main/thumb WebP assets."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from PIL import Image


GRID_COLS = 5
GRID_ROWS = 3
MAIN_SIZE = 800
THUMB_SIZE = 320
GUTTER_TRIM_RATIO = 0.018


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--sheet", required=True, type=Path)
    parser.add_argument("--manifest", required=True, type=Path)
    parser.add_argument("--start", required=True, type=int, help="0-based start index in manifest")
    parser.add_argument("--count", default=15, type=int)
    parser.add_argument("--main-dir", default=Path("public/assets/dishes/main"), type=Path)
    parser.add_argument("--thumb-dir", default=Path("public/assets/dishes/thumb"), type=Path)
    parser.add_argument("--force", action="store_true")
    return parser.parse_args()


def centered_square(image: Image.Image) -> Image.Image:
    width, height = image.size
    side = min(width, height)
    left = (width - side) // 2
    top = (height - side) // 2
    return image.crop((left, top, left + side, top + side))


def crop_cells(sheet: Image.Image, count: int) -> list[Image.Image]:
    width, height = sheet.size
    cell_width = width / GRID_COLS
    cell_height = height / GRID_ROWS
    trim_x = cell_width * GUTTER_TRIM_RATIO
    trim_y = cell_height * GUTTER_TRIM_RATIO
    crops: list[Image.Image] = []
    for index in range(count):
        row = index // GRID_COLS
        col = index % GRID_COLS
        box = (
            round(col * cell_width + trim_x),
            round(row * cell_height + trim_y),
            round((col + 1) * cell_width - trim_x),
            round((row + 1) * cell_height - trim_y),
        )
        crops.append(centered_square(sheet.crop(box)))
    return crops


def main() -> None:
    args = parse_args()
    dishes = json.loads(args.manifest.read_text())
    batch = dishes[args.start : args.start + args.count]
    if not batch:
        raise SystemExit("No dishes found for requested batch.")

    args.main_dir.mkdir(parents=True, exist_ok=True)
    args.thumb_dir.mkdir(parents=True, exist_ok=True)

    sheet = Image.open(args.sheet).convert("RGB")
    crops = crop_cells(sheet, len(batch))
    written: list[str] = []
    skipped: list[str] = []

    for dish, crop in zip(batch, crops):
        filename = f"{dish['metadataCode']}-{dish['imageSlug']}.webp"
        main_path = args.main_dir / filename
        thumb_path = args.thumb_dir / filename
        if not args.force and main_path.exists() and thumb_path.exists():
            skipped.append(filename)
            continue

        main = crop.resize((MAIN_SIZE, MAIN_SIZE), Image.Resampling.LANCZOS)
        thumb = crop.resize((THUMB_SIZE, THUMB_SIZE), Image.Resampling.LANCZOS)
        main.save(main_path, "WEBP", quality=84, method=6)
        thumb.save(thumb_path, "WEBP", quality=76, method=6)
        written.append(filename)

    print(json.dumps({"sheet": str(args.sheet), "written": written, "skipped": skipped}, indent=2))


if __name__ == "__main__":
    main()
