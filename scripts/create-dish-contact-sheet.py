#!/usr/bin/env python3
import argparse
import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


def load_font(size):
    for font_path in (
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
    ):
        try:
            return ImageFont.truetype(font_path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def main():
    parser = argparse.ArgumentParser(description="Create a DishKAI audit contact sheet.")
    parser.add_argument("--root", default=".", help="Repository root")
    parser.add_argument("--items", required=True, help="JSON file with dish id/code/imagePath/name rows")
    parser.add_argument("--out", required=True, help="Output PNG path")
    parser.add_argument("--columns", type=int, default=5)
    args = parser.parse_args()

    root = Path(args.root).resolve()
    rows = json.loads(Path(args.items).read_text())
    columns = max(1, args.columns)
    image_size = 160
    label_height = 52
    gap = 12
    margin = 18
    rows_count = (len(rows) + columns - 1) // columns
    width = margin * 2 + columns * image_size + (columns - 1) * gap
    height = margin * 2 + rows_count * (image_size + label_height) + (rows_count - 1) * gap

    sheet = Image.new("RGB", (width, height), "#faf8f3")
    draw = ImageDraw.Draw(sheet)
    font_bold = load_font(13)
    font = load_font(11)

    for index, row in enumerate(rows):
        col = index % columns
        row_index = index // columns
        x = margin + col * (image_size + gap)
        y = margin + row_index * (image_size + label_height + gap)
        image_path = root / "public" / row["imagePath"].lstrip("/")
        try:
            image = Image.open(image_path).convert("RGB")
            image.thumbnail((image_size, image_size))
            tile = Image.new("RGB", (image_size, image_size), "#eee6dc")
            tile.paste(image, ((image_size - image.width) // 2, (image_size - image.height) // 2))
        except OSError:
            tile = Image.new("RGB", (image_size, image_size), "#dcc8bd")
            draw_missing = ImageDraw.Draw(tile)
            draw_missing.text((20, 68), "missing image", fill="#5d4037", font=font)

        sheet.paste(tile, (x, y))
        draw.rectangle((x, y, x + image_size, y + image_size), outline="#d8cec2", width=1)
        label_y = y + image_size + 7
        title = f"{row['metadataCode']} {row['dishId']}"
        if len(title) > 27:
            title = title[:24] + "..."
        draw.text((x, label_y), title, fill="#2d2924", font=font_bold)
        name = row.get("name", "")
        if len(name) > 26:
            name = name[:23] + "..."
        draw.text((x, label_y + 18), name, fill="#6b6258", font=font)

    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(out)


if __name__ == "__main__":
    main()
