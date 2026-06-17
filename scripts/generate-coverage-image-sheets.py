#!/usr/bin/env python3
"""Generate 3x3 DishKAI coverage image sheets for later cropping."""

from __future__ import annotations

import argparse
import hashlib
import json
import math
from pathlib import Path

from PIL import Image, ImageDraw


SHEET_SIZE = 1800
GRID = 3
CELL = SHEET_SIZE // GRID

ACCENTS = {
    "thai": (210, 85, 48), "japanese": (194, 69, 75), "korean": (188, 62, 50),
    "chinese": (178, 48, 42), "italian": (72, 136, 88), "french": (70, 90, 128),
    "german": (184, 140, 65), "dutch": (220, 130, 58), "belgian": (114, 83, 55),
    "greek": (66, 130, 166), "spanish": (204, 104, 42), "indian": (206, 116, 40),
    "vietnamese": (82, 144, 92), "indonesian": (176, 84, 43),
    "malaysian-singaporean": (206, 122, 56), "turkish": (172, 68, 62),
    "middle-eastern": (158, 104, 63), "mexican": (72, 144, 88),
    "american": (136, 78, 58), "british-irish": (96, 112, 79),
    "moroccan": (188, 90, 48), "portuguese": (62, 118, 124),
    "surinamese": (96, 142, 72), "ethiopian": (153, 91, 50),
    "scandinavian": (80, 128, 150), "peruvian": (203, 116, 50),
    "brazilian": (72, 152, 88),
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--manifest", required=True, type=Path)
    parser.add_argument("--out-dir", required=True, type=Path)
    parser.add_argument("--batch-size", default=9, type=int)
    return parser.parse_args()


def seed_for(dish: dict) -> int:
    digest = hashlib.sha256(f"{dish['metadataCode']}:{dish['id']}".encode()).hexdigest()
    return int(digest[:10], 16)


def blend(a, b, t):
    return tuple(int(a[i] * (1 - t) + b[i] * t) for i in range(3))


def light(c, t=0.28):
    return blend(c, (255, 246, 226), t)


def dark(c, t=0.28):
    return blend(c, (42, 34, 28), t)


def ellipse(draw, cx, cy, rx, ry, fill, outline=None, width=1):
    draw.ellipse((cx - rx, cy - ry, cx + rx, cy + ry), fill=fill, outline=outline, width=width)


def rounded(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def jitter(seed, index, amount):
    return int(((((seed >> (index % 28)) & 255) / 255) - 0.5) * amount)


def draw_cell(draw: ImageDraw.ImageDraw, dish: dict, ox: int, oy: int):
    seed = seed_for(dish)
    accent = ACCENTS.get(dish["cuisineId"], (150, 95, 60))
    table = (181, 137, 91)
    sky = (224, 232, 222)
    chair = (92, 111, 80)
    rail = (34, 43, 38)
    plate = (244, 239, 226)

    draw.rectangle((ox, oy, ox + CELL, oy + 190), fill=sky)
    draw.rectangle((ox, oy + 250, ox + CELL, oy + CELL), fill=table)
    draw.rounded_rectangle((ox + 22, oy + 70, ox + 170, oy + 520), radius=54, fill=light(chair, 0.08))
    draw.rectangle((ox, oy + 210, ox + CELL, oy + 224), fill=rail)
    for x in range(ox + 42, ox + CELL, 98):
        draw.rectangle((x, oy + 160, x + 6, oy + 270), fill=rail)
    for y in range(oy + 272, oy + CELL, 36):
        draw.line((ox, y, ox + CELL, y + jitter(seed, y, 10)), fill=dark(table, 0.08), width=2)

    cx, cy = ox + CELL // 2 + 18, oy + CELL // 2 + 34
    ellipse(draw, cx + 10, cy + 18, 205, 154, fill=(144, 107, 76))
    ellipse(draw, cx, cy, 214, 162, fill=plate, outline=(217, 205, 187), width=5)
    ellipse(draw, cx, cy, 166, 118, fill=(238, 229, 210), outline=(225, 214, 194), width=2)
    draw_food(draw, dish, cx, cy, accent, seed)


def draw_food(draw, dish, cx, cy, accent, seed):
    category = dish["category"]
    if category in {"soup", "curry", "stew"}:
        ellipse(draw, cx, cy, 142, 96, fill=light(accent, 0.18), outline=dark(accent, 0.2), width=3)
        for i in range(16):
            x = cx - 112 + ((seed >> (i % 24)) & 255) % 224
            y = cy - 68 + ((seed >> ((i + 6) % 24)) & 255) % 136
            ellipse(draw, x, y, 14 + i % 7, 8 + i % 5, fill=light([(83, 142, 74), (224, 177, 82), accent][i % 3], 0.14))
    elif category in {"rice", "noodle"}:
        base = (246, 238, 204) if category == "rice" else (227, 202, 146)
        ellipse(draw, cx, cy + 8, 154, 102, fill=base, outline=(215, 192, 160), width=2)
        for i in range(24):
            y = cy - 74 + i * 6 + jitter(seed, i, 10)
            draw.arc((cx - 150, y, cx + 150, y + 94), 190, 350, fill=light(base, 0.08), width=4)
        for i in range(12):
            ellipse(draw, cx - 118 + ((seed >> i) & 255) % 236, cy - 64 + ((seed >> (i + 4)) & 255) % 128, 13, 8, fill=accent)
    elif category in {"meat", "seafood"}:
        main = (126, 74, 54) if category == "meat" else (222, 184, 138)
        for i in range(4):
            x = cx - 134 + i * 60 + jitter(seed, i, 15)
            y = cy - 54 + jitter(seed, i + 4, 18)
            rounded(draw, (x, y, x + 120, y + 48), 22, fill=light(main, i * 0.04), outline=dark(main, 0.22), width=2)
            draw.line((x + 12, y + 16, x + 102, y + 34), fill=dark(main, 0.35), width=2)
        garnish(draw, cx, cy, accent, seed, 16)
    elif category in {"bread", "sandwich", "starter", "fried-snack", "dumpling"}:
        fill = (218, 159, 84) if category != "dumpling" else (238, 222, 194)
        for i in range(8):
            x = cx - 145 + (i % 4) * 74 + jitter(seed, i, 12)
            y = cy - 70 + (i // 4) * 72 + jitter(seed, i + 5, 12)
            rounded(draw, (x, y, x + 64, y + 42), 18, fill=light(fill, (i % 3) * 0.05), outline=dark(fill, 0.24), width=2)
        garnish(draw, cx, cy, accent, seed, 12)
    elif category == "dessert":
        for i in range(3):
            x = cx - 108 + i * 74
            rounded(draw, (x, cy - 76, x + 70, cy + 72), 18, fill=light(accent, 0.34), outline=dark(accent, 0.22), width=2)
            draw.rectangle((x + 8, cy - 20, x + 62, cy - 4), fill=(247, 231, 204))
    else:
        for i in range(28):
            x = cx - 145 + ((seed >> (i % 24)) & 255) % 290
            y = cy - 94 + ((seed >> ((i + 7) % 24)) & 255) % 188
            color = [(83, 142, 74), (202, 66, 50), (238, 218, 123), accent][i % 4]
            ellipse(draw, x, y, 18, 9, fill=light(color, 0.08), outline=dark(color, 0.1))


def garnish(draw, cx, cy, color, seed, count):
    for i in range(count):
        angle = (seed % 360 + i * 47) * math.pi / 180
        r = 34 + ((seed >> (i % 16)) & 95)
        x = int(cx + math.cos(angle) * r)
        y = int(cy + math.sin(angle) * r * 0.66)
        ellipse(draw, x, y, 7 + i % 4, 4 + i % 3, fill=light((76, 134, 72) if i % 2 else color, 0.22))


def main():
    args = parse_args()
    dishes = json.loads(args.manifest.read_text())
    args.out_dir.mkdir(parents=True, exist_ok=True)
    paths = []
    for start in range(0, len(dishes), args.batch_size):
        sheet = Image.new("RGB", (SHEET_SIZE, SHEET_SIZE), (230, 224, 212))
        draw = ImageDraw.Draw(sheet)
        batch = dishes[start:start + args.batch_size]
        for index, dish in enumerate(batch):
            row, col = divmod(index, GRID)
            draw_cell(draw, dish, col * CELL, row * CELL)
        for line in (CELL, CELL * 2):
            draw.rectangle((line - 3, 0, line + 3, SHEET_SIZE), fill=(245, 241, 230))
            draw.rectangle((0, line - 3, SHEET_SIZE, line + 3), fill=(245, 241, 230))
        path = args.out_dir / f"coverage-sheet-{start // args.batch_size + 1:03d}.png"
        sheet.save(path)
        paths.append(str(path))
    print(json.dumps({"sheets": len(paths), "paths": paths}, indent=2))


if __name__ == "__main__":
    main()
