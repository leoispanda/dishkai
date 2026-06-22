#!/usr/bin/env python3
import argparse
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

    image = Image.open(source).convert("RGB")
    source_dir = root / "data/internal/audit/rebuild-batches" / f"{args.batch}-image-sources"
    source_dir.mkdir(parents=True, exist_ok=True)
    source_copy = source_dir / f"{args.code}-{args.dish_id}.png"
    image.save(source_copy)

    main = stamp_code(cover_square(image, 1024), args.code)
    thumb = stamp_code(cover_square(image, 360), args.code)
    main_path = root / f"public/assets/dishes/main/{args.code}-{args.dish_id}.webp"
    thumb_path = root / f"public/assets/dishes/thumb/{args.code}-{args.dish_id}.webp"
    main.save(main_path, quality=88, method=6)
    thumb.save(thumb_path, quality=82, method=6)

    print(source_copy)
    print(main_path)
    print(thumb_path)


if __name__ == "__main__":
    main()
