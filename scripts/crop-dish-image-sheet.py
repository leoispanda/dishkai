#!/usr/bin/env python3
"""Crop a DishKAI 3x3 dish image sheet into main/thumb WebP assets."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


MAIN_SIZE = 800
THUMB_SIZE = 320


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--sheet", required=True, type=Path)
    parser.add_argument("--manifest", required=True, type=Path)
    parser.add_argument("--start", required=True, type=int, help="0-based start index in manifest")
    parser.add_argument("--count", default=9, type=int)
    parser.add_argument("--main-dir", default=Path("public/assets/dishes/main"), type=Path)
    parser.add_argument("--thumb-dir", default=Path("public/assets/dishes/thumb"), type=Path)
    parser.add_argument("--force", action="store_true")
    return parser.parse_args()


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
    ]
    for candidate in candidates:
        try:
            return ImageFont.truetype(candidate, size=size)
        except OSError:
            continue
    return ImageFont.load_default()


def add_code(image: Image.Image, code: str) -> Image.Image:
    image = image.convert("RGB")
    draw = ImageDraw.Draw(image)
    label_font = font(26, bold=True)
    box = draw.textbbox((0, 0), code, font=label_font)
    text_width = box[2] - box[0]
    x2 = image.width - 24
    y2 = image.height - 24
    x1 = x2 - text_width - 28
    y1 = y2 - 42
    draw.rounded_rectangle((x1, y1, x2, y2), radius=13, fill=(28, 37, 32))
    draw.text((x1 + 14, y1 + 7), code, fill=(245, 241, 230), font=label_font)
    return image


def crop_cells(sheet: Image.Image, count: int) -> list[Image.Image]:
    width, height = sheet.size
    side = min(width, height)
    left = (width - side) // 2
    top = (height - side) // 2
    cell = side // 3
    crops = []
    for index in range(count):
      row = index // 3
      col = index % 3
      box = (
          left + col * cell,
          top + row * cell,
          left + (col + 1) * cell,
          top + (row + 1) * cell,
      )
      crops.append(sheet.crop(box))
    return crops


def main() -> None:
    args = parse_args()
    dishes = json.loads(args.manifest.read_text())
    batch = dishes[args.start:args.start + args.count]
    if not batch:
        raise SystemExit("No dishes found for requested batch.")

    args.main_dir.mkdir(parents=True, exist_ok=True)
    args.thumb_dir.mkdir(parents=True, exist_ok=True)
    sheet = Image.open(args.sheet).convert("RGB")
    crops = crop_cells(sheet, len(batch))
    written = []

    for dish, crop in zip(batch, crops):
        filename = f"{dish['metadataCode']}-{dish['id']}.webp"
        main_path = args.main_dir / filename
        thumb_path = args.thumb_dir / filename
        if not args.force and main_path.exists() and thumb_path.exists():
            continue

        main_image = add_code(crop.resize((MAIN_SIZE, MAIN_SIZE), Image.Resampling.LANCZOS), dish["metadataCode"])
        main_image.save(main_path, "WEBP", quality=88, method=6)
        main_image.resize((THUMB_SIZE, THUMB_SIZE), Image.Resampling.LANCZOS).save(
            thumb_path,
            "WEBP",
            quality=84,
            method=6,
        )
        written.append(filename)

    print(json.dumps({"sheet": str(args.sheet), "written": written}, indent=2))


if __name__ == "__main__":
    main()
