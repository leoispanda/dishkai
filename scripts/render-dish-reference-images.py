#!/usr/bin/env python3
import argparse
import json
import math
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


PALETTE = {
    "bg": "#f4efe7",
    "table": "#eee2d1",
    "plate": "#fbfaf6",
    "plate_edge": "#d8cabb",
    "bowl": "#f8f4ea",
    "shadow": "#d0bda8",
    "sauce_red": "#b7432d",
    "sauce_orange": "#d6792c",
    "sauce_yellow": "#d9a13b",
    "sauce_green": "#477a45",
    "sauce_dark": "#453224",
    "cream": "#f4e4c5",
    "rice": "#f8f5e9",
    "noodle": "#f2df9f",
    "rice_noodle": "#f7f5ea",
    "meat": "#8f4733",
    "chicken": "#c47a3d",
    "fish": "#ede4d3",
    "shrimp": "#e98b75",
    "tofu": "#f2ead4",
    "green": "#477f48",
    "herb": "#2f7a45",
    "bean": "#8d513d",
    "potato": "#d6b45e",
    "egg": "#fff6d6",
    "yolk": "#e7a22a",
    "fried": "#c8892f",
    "bread": "#d99a4a",
    "sweet": "#d7839f",
    "purple": "#6e4d86",
    "black": "#2d2924",
}


ITEM_COLORS = {
    "paneer": "tofu",
    "tofu": "tofu",
    "egg": "egg",
    "chicken": "chicken",
    "fried-chicken": "chicken",
    "pork": "meat",
    "minced-pork": "meat",
    "char-siu-pork": "meat",
    "ground-meat": "meat",
    "beef": "meat",
    "lamb": "meat",
    "sausage-global": "meat",
    "fish-fillet": "fish",
    "fish-paste": "fish",
    "fish-cake": "fish",
    "mackerel": "fish",
    "shrimp": "shrimp",
    "crab": "shrimp",
    "mussels": "sauce_dark",
    "rice-vermicelli": "rice_noodle",
    "rice-noodles": "rice_noodle",
    "yellow-noodles": "noodle",
    "egg-noodles": "noodle",
    "steamed-rice": "rice",
    "sticky-rice": "rice",
    "black-glutinous-rice": "purple",
    "lontong-rice-cakes": "rice",
    "rice-flour-batter": "rice",
    "rice-lentil-batter": "rice",
    "radish-cake": "rice",
    "potato": "potato",
    "sweet-potato": "potato",
    "cauliflower": "rice",
    "lentils": "sauce_yellow",
    "red-kidney-beans": "bean",
    "mung-beans": "green",
    "mixed-vegetables": "green",
    "spinach": "green",
    "banana-blossom": "rice_noodle",
    "cabbage": "green",
    "bean-sprouts": "rice_noodle",
    "cucumber": "green",
    "eggplant-global": "purple",
    "tomato": "sauce_red",
    "pineapple": "sauce_yellow",
    "pancake-batter": "bread",
    "thin-pancakes": "bread",
    "bread": "bread",
    "flatbread-lavash": "bread",
    "pide-bread": "bread",
    "phyllo-pastry": "bread",
    "sesame-seeds": "rice",
    "tapioca-starch": "rice",
    "cendol-jelly": "green",
    "sugar": "rice",
    "milk-solids": "cream",
    "cream": "cream",
    "yogurt": "cream",
    "cheese": "cream",
    "feta": "cream",
    "butter": "sauce_yellow",
    "coconut-milk": "cream",
    "peanuts": "potato",
    "almonds": "potato",
    "toasted-coconut": "rice",
    "palm-sugar": "sauce_dark",
    "chocolate": "sauce_dark",
}


SAUCE_COLORS = {
    "tomato-sauce": "sauce_red",
    "chili": "sauce_red",
    "sambal": "sauce_red",
    "ketjap-manis": "sauce_dark",
    "soy-sauce": "sauce_dark",
    "fish-sauce": "sauce_yellow",
    "tamarind": "sauce_dark",
    "turmeric": "sauce_yellow",
    "curry-masala": "sauce_orange",
    "garam-masala": "sauce_orange",
    "coconut-curry": "sauce_orange",
    "satay-sauce": "sauce_orange",
    "keluak": "sauce_dark",
    "shrimp-paste": "sauce_dark",
    "mint": "herb",
    "dill": "herb",
    "parsley": "herb",
    "lemongrass": "herb",
    "lime": "green",
    "lemon": "sauce_yellow",
    "cinnamon": "sauce_dark",
    "vanilla": "cream",
    "cardamom": "sauce_yellow",
    "rosewater": "sweet",
}


def load_font(size, bold=False):
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
    ]
    for font_path in candidates:
        try:
            return ImageFont.truetype(font_path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def main():
    parser = argparse.ArgumentParser(description="Render deterministic DishKAI semantic dish reference images.")
    parser.add_argument("--configs", required=True, help="JSON config list with id, metadataCode, category, composition")
    parser.add_argument("--root", default=".", help="Repository root")
    parser.add_argument("--only-missing", action="store_true", help="Do not overwrite existing images")
    args = parser.parse_args()

    root = Path(args.root).resolve()
    configs = json.loads(Path(args.configs).read_text())
    main_dir = root / "public/assets/dishes/main"
    thumb_dir = root / "public/assets/dishes/thumb"
    main_dir.mkdir(parents=True, exist_ok=True)
    thumb_dir.mkdir(parents=True, exist_ok=True)

    for config in configs:
        main_path = main_dir / f"{config['metadataCode']}-{config['id']}.webp"
        thumb_path = thumb_dir / f"{config['metadataCode']}-{config['id']}.webp"
        if args.only_missing and main_path.exists() and thumb_path.exists():
            continue
        image = render(config)
        image.save(main_path, "WEBP", quality=90, method=6)
        thumb = image.resize((320, 320), Image.Resampling.LANCZOS)
        thumb.save(thumb_path, "WEBP", quality=88, method=6)
        print(f"rendered {config['metadataCode']} {config['id']}")


def render(config):
    rnd = random.Random(f"{config['metadataCode']}:{config['id']}")
    image = Image.new("RGB", (800, 800), PALETTE["bg"])
    draw = ImageDraw.Draw(image)
    draw_background(draw)

    special = SPECIAL_RENDERERS.get(config["id"])
    if special:
        special(draw, config, rnd)
    else:
        category = config.get("category", "main")
        if category in ("curry", "soup"):
            draw_bowl(draw, rnd, config, soup=category == "soup")
        elif category == "noodle":
            draw_noodle_plate(draw, rnd, config)
        elif category == "rice":
            draw_rice_plate(draw, rnd, config)
        elif category in ("fried-snack", "starter"):
            draw_snack_plate(draw, rnd, config)
        elif category == "bread":
            draw_bread_plate(draw, rnd, config)
        elif category == "dessert":
            draw_dessert(draw, rnd, config)
        elif category in ("meat", "seafood"):
            draw_meat_plate(draw, rnd, config)
        elif category == "salad":
            draw_salad_plate(draw, rnd, config)
        else:
            draw_meat_plate(draw, rnd, config)

    stamp_code(draw, config["metadataCode"])
    return image


def draw_background(draw):
    draw.ellipse((50, 36, 750, 736), fill=PALETTE["table"])
    draw.ellipse((115, 100, 685, 670), fill="#ead8c1")


def draw_plate(draw, box=(120, 125, 680, 685), fill=None):
    draw.ellipse(offset_box(box, 0, 16), fill=PALETTE["shadow"])
    draw.ellipse(box, fill=fill or PALETTE["plate"], outline=PALETTE["plate_edge"], width=6)
    inner = shrink_box(box, 42)
    draw.ellipse(inner, fill="#fffdf8", outline="#eadfce", width=2)
    return inner


def draw_bowl_base(draw, box=(135, 130, 665, 660)):
    draw.ellipse(offset_box(box, 0, 18), fill=PALETTE["shadow"])
    draw.ellipse(box, fill=PALETTE["bowl"], outline=PALETTE["plate_edge"], width=8)
    inner = shrink_box(box, 55)
    draw.ellipse(inner, fill="#f4eadb", outline="#d4bda5", width=3)
    return inner


def draw_bowl(draw, rnd, config, soup=False):
    inner = draw_bowl_base(draw)
    sauce = dominant_sauce(config, soup=soup)
    draw.ellipse(inner, fill=sauce)
    if soup:
        draw.ellipse(shrink_box(inner, 20), outline=blend(sauce, "#ffffff", 0.35), width=3)
    scatter_components(draw, rnd, config, inner, count=34 if soup else 28, scale=1.0)
    draw_herbs(draw, rnd, inner, count=18)


def draw_noodle_plate(draw, rnd, config):
    inner = draw_plate(draw)
    noodle_color = color_for(first_of(config, ["yellow-noodles", "egg-noodles", "rice-vermicelli", "rice-noodles"]) or "yellow-noodles")
    for _ in range(42):
        x, y = random_point_in_ellipse(rnd, inner, pad=28)
        length = rnd.randint(90, 170)
        color = noodle_color
        draw.arc((x - length // 2, y - 26, x + length // 2, y + 34), rnd.randint(0, 90), rnd.randint(190, 350), fill=color, width=7)
    scatter_components(draw, rnd, config, inner, count=24, scale=0.85, skip_noodles=True)
    draw_herbs(draw, rnd, inner, count=16)


def draw_rice_plate(draw, rnd, config):
    inner = draw_plate(draw)
    rice_color = color_for(first_of(config, ["black-glutinous-rice", "sticky-rice", "steamed-rice", "lontong-rice-cakes"]) or "steamed-rice")
    draw.ellipse((250, 235, 550, 535), fill=rice_color, outline="#d6c9b9", width=2)
    for _ in range(85):
        x, y = random_point_in_ellipse(rnd, (255, 240, 545, 530), pad=10)
        draw.ellipse((x - 4, y - 2, x + 4, y + 2), fill=blend(rice_color, "#ffffff", rnd.uniform(0.1, 0.35)))
    scatter_components(draw, rnd, config, inner, count=22, scale=0.85, avoid_center=True)
    draw_herbs(draw, rnd, inner, count=10)


def draw_salad_plate(draw, rnd, config):
    inner = draw_plate(draw)
    for _ in range(48):
        x, y = random_point_in_ellipse(rnd, inner, pad=20)
        color = rnd.choice([PALETTE["green"], "#6da660", "#91b65a", PALETTE["rice_noodle"]])
        draw.ellipse((x - 18, y - 9, x + 18, y + 9), fill=color, outline=blend(color, "#000000", 0.12))
    scatter_components(draw, rnd, config, inner, count=20, scale=0.75)


def draw_meat_plate(draw, rnd, config):
    inner = draw_plate(draw)
    scatter_components(draw, rnd, config, inner, count=34, scale=1.05)
    draw_sauce_swirl(draw, rnd, inner, dominant_sauce(config))
    draw_herbs(draw, rnd, inner, count=12)


def draw_snack_plate(draw, rnd, config):
    inner = draw_plate(draw)
    ids = component_ids(config)
    fried = "fried" in " ".join(config.get("cookingMethods", [])) or config.get("category") == "fried-snack"
    for i in range(12):
        x, y = random_point_in_ellipse(rnd, inner, pad=60)
        w = rnd.randint(44, 72)
        h = rnd.randint(30, 54)
        color = PALETTE["fried"] if fried else color_for(ids[i % len(ids)] if ids else "mixed-vegetables")
        draw.rounded_rectangle((x - w, y - h, x + w, y + h), radius=18, fill=color, outline=blend(color, "#000000", 0.18), width=2)
    scatter_components(draw, rnd, config, inner, count=10, scale=0.55)


def draw_bread_plate(draw, rnd, config):
    inner = draw_plate(draw)
    for i in range(4):
        x = 230 + i * 88 + rnd.randint(-12, 12)
        y = 330 + rnd.randint(-22, 22)
        draw.rounded_rectangle((x - 115, y - 48, x + 115, y + 48), radius=22, fill=PALETTE["bread"], outline="#b87433", width=3)
        draw.line((x - 85, y, x + 85, y), fill="#b87433", width=3)
    scatter_components(draw, rnd, config, inner, count=14, scale=0.65)


def draw_dessert(draw, rnd, config):
    inner = draw_bowl_base(draw)
    base = dominant_sauce(config, dessert=True)
    draw.ellipse(inner, fill=base)
    ids = component_ids(config)
    for _ in range(30):
        x, y = random_point_in_ellipse(rnd, inner, pad=34)
        color = color_for(rnd.choice(ids)) if ids else PALETTE["sweet"]
        draw.ellipse((x - 16, y - 12, x + 16, y + 12), fill=color, outline=blend(color, "#000000", 0.12))
    if config["id"] in ("che-ba-mau", "es-cendol", "pulut-hitam"):
        draw.ellipse((215, 250, 585, 575), outline="#ffffff", width=5)


def scatter_components(draw, rnd, config, box, count=22, scale=1.0, skip_noodles=False, avoid_center=False):
    ids = component_ids(config)
    if skip_noodles:
        ids = [item for item in ids if "noodle" not in item and "vermicelli" not in item]
    ids = ids or ["mixed-vegetables"]
    weights = component_weights(config, ids)
    for _ in range(count):
        item = weighted_choice(rnd, ids, weights)
        x, y = random_point_in_ellipse(rnd, box, pad=36)
        if avoid_center and 285 < x < 515 and 265 < y < 545:
            x += rnd.choice([-170, 170])
            y += rnd.choice([-110, 110])
        draw_component(draw, rnd, item, x, y, scale)


def draw_component(draw, rnd, item, x, y, scale=1.0):
    color = color_for(item)
    if item in ("shrimp", "crab"):
        r = int(20 * scale)
        draw.arc((x - r, y - r, x + r, y + r), 35, 300, fill=color, width=max(4, int(8 * scale)))
        draw.ellipse((x + r // 2 - 4, y - 5, x + r // 2 + 4, y + 3), fill="#fff3ef")
    elif item in ("rice-vermicelli", "rice-noodles", "yellow-noodles", "egg-noodles"):
        for i in range(4):
            dy = (i - 2) * 7
            draw.arc((x - 45, y - 20 + dy, x + 45, y + 20 + dy), 0, 220, fill=color, width=4)
    elif item in ("fish-fillet", "fish-paste", "fish-cake", "mackerel"):
        w, h = int(44 * scale), int(20 * scale)
        draw.polygon([(x - w, y), (x - 10, y - h), (x + w, y), (x - 10, y + h)], fill=color, outline="#cbbfae")
    elif item in ("chicken", "pork", "beef", "lamb", "ground-meat", "minced-pork", "char-siu-pork"):
        w, h = int(rnd.randint(24, 42) * scale), int(rnd.randint(20, 34) * scale)
        draw.rounded_rectangle((x - w, y - h, x + w, y + h), radius=12, fill=color, outline=blend(color, "#000000", 0.25), width=2)
        draw.line((x - w + 8, y - h + 5, x + w - 8, y + h - 5), fill=blend(color, "#000000", 0.22), width=2)
    elif item in ("paneer", "tofu", "lontong-rice-cakes", "radish-cake"):
        s = int(26 * scale)
        draw.rounded_rectangle((x - s, y - s, x + s, y + s), radius=8, fill=color, outline="#d2c4a8", width=2)
    elif item == "egg":
        draw.ellipse((x - 28, y - 20, x + 28, y + 20), fill=PALETTE["egg"], outline="#d9c38b", width=2)
        draw.ellipse((x - 10, y - 10, x + 10, y + 10), fill=PALETTE["yolk"])
    elif item in ("potato", "sweet-potato", "cauliflower"):
        r = int(22 * scale)
        draw.ellipse((x - r, y - r, x + r, y + r), fill=color, outline=blend(color, "#000000", 0.16), width=2)
    elif item in ("peanuts", "almonds", "sesame-seeds"):
        for _ in range(5):
            dx, dy = rnd.randint(-18, 18), rnd.randint(-14, 14)
            draw.ellipse((x + dx - 5, y + dy - 3, x + dx + 5, y + dy + 3), fill=color)
    elif item in ("cendol-jelly", "tapioca-starch"):
        draw.rounded_rectangle((x - 16, y - 10, x + 16, y + 10), radius=8, fill=color, outline=blend(color, "#000000", 0.12))
    elif item in ("mussels",):
        draw.ellipse((x - 24, y - 16, x + 24, y + 16), fill="#332a25", outline="#14100e", width=2)
        draw.ellipse((x - 14, y - 7, x + 14, y + 7), fill=PALETTE["rice"])
    else:
        r = int(15 * scale)
        draw.ellipse((x - r, y - r, x + r, y + r), fill=color, outline=blend(color, "#000000", 0.12), width=1)


def draw_herbs(draw, rnd, box, count=12):
    for _ in range(count):
        x, y = random_point_in_ellipse(rnd, box, pad=35)
        length = rnd.randint(18, 36)
        draw.line((x - length // 2, y, x + length // 2, y + rnd.randint(-8, 8)), fill=PALETTE["herb"], width=4)


def draw_sauce_swirl(draw, rnd, box, color):
    for _ in range(4):
        x, y = random_point_in_ellipse(rnd, box, pad=80)
        draw.arc((x - 60, y - 30, x + 60, y + 30), 10, 310, fill=color, width=5)


def dominant_sauce(config, soup=False, dessert=False):
    ids = component_ids(config)
    if dessert:
        if "black-glutinous-rice" in ids:
            return PALETTE["purple"]
        if "coconut-milk" in ids or "cream" in ids or "yogurt" in ids:
            return PALETTE["cream"]
        return PALETTE["sweet"]
    for item in ids:
        if item in SAUCE_COLORS:
            return color_for(item)
    if "spinach" in ids:
        return PALETTE["sauce_green"]
    if "keluak" in ids:
        return PALETTE["sauce_dark"]
    return PALETTE["sauce_yellow"] if soup else PALETTE["sauce_orange"]


def stamp_code(draw, code):
    font = load_font(22, bold=True)
    box = (632, 735, 778, 778)
    draw.rounded_rectangle(box, radius=10, fill="#1f1c19")
    draw.text((652, 746), str(code), fill="#f7f2ea", font=font)


def component_ids(config):
    ids = []
    for component in config.get("composition", []):
        if isinstance(component, list) and component:
            ids.append(component[0])
    return ids


def component_weights(config, ids):
    values = []
    for item in ids:
        weight = 8
        for component in config.get("composition", []):
            if isinstance(component, list) and component and component[0] == item:
                weight = max(3, int(component[1]))
                break
        values.append(weight)
    return values


def weighted_choice(rnd, items, weights):
    total = sum(weights)
    pick = rnd.uniform(0, total)
    cursor = 0
    for item, weight in zip(items, weights):
        cursor += weight
        if cursor >= pick:
            return item
    return items[-1]


def first_of(config, candidates):
    ids = component_ids(config)
    for item in candidates:
        if item in ids:
            return item
    return None


def color_for(item):
    key = ITEM_COLORS.get(item) or SAUCE_COLORS.get(item) or "green"
    return PALETTE.get(key, key)


def random_point_in_ellipse(rnd, box, pad=0):
    left, top, right, bottom = box
    left += pad
    top += pad
    right -= pad
    bottom -= pad
    cx, cy = (left + right) / 2, (top + bottom) / 2
    rx, ry = max(8, (right - left) / 2), max(8, (bottom - top) / 2)
    angle = rnd.uniform(0, math.tau)
    radius = math.sqrt(rnd.uniform(0, 1))
    return int(cx + math.cos(angle) * rx * radius), int(cy + math.sin(angle) * ry * radius)


def shrink_box(box, amount):
    l, t, r, b = box
    return (l + amount, t + amount, r - amount, b - amount)


def offset_box(box, dx, dy):
    l, t, r, b = box
    return (l + dx, t + dy, r + dx, b + dy)


def blend(a, b, ratio):
    def parse(color):
        color = color.lstrip("#")
        return tuple(int(color[i : i + 2], 16) for i in (0, 2, 4))

    ca, cb = parse(a), parse(b)
    return "#" + "".join(f"{int(ca[i] * (1 - ratio) + cb[i] * ratio):02x}" for i in range(3))


def special_dosa(draw, config, rnd):
    inner = draw_plate(draw)
    draw.rounded_rectangle((170, 300, 630, 435), radius=55, fill="#dba54d", outline="#a96c25", width=4)
    draw.rectangle((310, 300, 490, 435), fill="#e4b65e")
    draw.ellipse((210, 485, 290, 565), fill=PALETTE["cream"], outline="#d6c0a0", width=2)
    draw.ellipse((330, 500, 410, 580), fill=PALETTE["sauce_green"])
    draw.ellipse((450, 485, 550, 585), fill=PALETTE["sauce_orange"])
    draw_herbs(draw, rnd, inner, 8)


def special_idli(draw, config, rnd):
    inner = draw_plate(draw)
    for x, y in [(285, 315), (405, 295), (520, 360), (340, 470), (470, 485)]:
        draw.ellipse((x - 58, y - 44, x + 58, y + 44), fill="#f7f4e9", outline="#d9d0bf", width=3)
    draw.ellipse((205, 535, 310, 630), fill=PALETTE["sauce_green"])
    draw.ellipse((490, 525, 610, 640), fill=PALETTE["sauce_orange"])


def special_vada(draw, config, rnd):
    inner = draw_plate(draw)
    for x, y in [(285, 330), (420, 300), (535, 395), (340, 500), (475, 515)]:
        draw.ellipse((x - 55, y - 55, x + 55, y + 55), fill=PALETTE["fried"], outline="#9f621e", width=4)
        draw.ellipse((x - 20, y - 20, x + 20, y + 20), fill=PALETTE["plate"])
    draw_sauce_swirl(draw, rnd, inner, PALETTE["sauce_green"])


def special_banh_cuon(draw, config, rnd):
    inner = draw_plate(draw)
    for y in [285, 360, 435, 510]:
        draw.rounded_rectangle((210, y - 28, 590, y + 28), radius=28, fill="#f6f2e7", outline="#d5c8b8", width=2)
        draw.line((245, y, 555, y), fill="#e2d5c5", width=2)
    scatter_components(draw, rnd, config, inner, count=14, scale=0.55)


def special_banh_beo(draw, config, rnd):
    inner = draw_plate(draw)
    for x, y in [(245, 295), (395, 280), (545, 315), (300, 455), (470, 455), (390, 570)]:
        draw.ellipse((x - 58, y - 44, x + 58, y + 44), fill="#f7f3e6", outline="#d8c8b4", width=3)
        draw.ellipse((x - 18, y - 9, x + 18, y + 9), fill=PALETTE["shrimp"])
        draw.line((x - 25, y + 15, x + 25, y + 10), fill=PALETTE["herb"], width=4)


def special_banh_khot(draw, config, rnd):
    inner = draw_plate(draw)
    for x, y in [(245, 285), (385, 270), (525, 310), (295, 435), (455, 440), (380, 565)]:
        draw.ellipse((x - 52, y - 40, x + 52, y + 40), fill=PALETTE["sauce_yellow"], outline="#b67827", width=4)
        draw.ellipse((x - 38, y - 28, x + 38, y + 28), fill="#e7b657")
        draw_component(draw, rnd, "shrimp", x + 4, y - 2, 0.7)
        draw.line((x - 22, y + 20, x + 22, y + 10), fill=PALETTE["herb"], width=4)
    draw_herbs(draw, rnd, inner, 8)


def special_banh_flan(draw, config, rnd):
    inner = draw_plate(draw)
    draw.ellipse((245, 235, 555, 540), fill="#c98733", outline="#a46320", width=5)
    draw.ellipse((280, 260, 520, 520), fill="#f0d28e", outline="#d6ad5c", width=4)
    draw.ellipse((310, 265, 490, 340), fill="#9b5423")
    for _ in range(7):
        x, y = random_point_in_ellipse(rnd, inner, pad=100)
        draw.ellipse((x - 10, y - 10, x + 10, y + 10), fill="#f7efe2")


def special_che(draw, config, rnd):
    draw_bowl(draw, rnd, config, soup=False)
    for i, color in enumerate([PALETTE["bean"], PALETTE["green"], PALETTE["sauce_yellow"], PALETTE["cream"]]):
        draw.rounded_rectangle((280, 250 + i * 72, 520, 315 + i * 72), radius=24, fill=color, outline="#ffffff", width=2)


def special_xoi_man(draw, config, rnd):
    inner = draw_plate(draw)
    draw.ellipse((240, 245, 560, 545), fill=PALETTE["rice"], outline="#d6c9b9", width=3)
    for _ in range(65):
        x, y = random_point_in_ellipse(rnd, (250, 255, 550, 535), pad=10)
        draw.ellipse((x - 4, y - 2, x + 4, y + 2), fill="#ffffff")
    for x, y in [(315, 330), (470, 380)]:
        draw_component(draw, rnd, "egg", x, y, 0.85)
    for x, y in [(360, 430), (430, 315), (505, 470)]:
        draw_component(draw, rnd, "sausage-global", x, y, 0.85)
    draw_herbs(draw, rnd, inner, 16)
    scatter_components(draw, rnd, config, inner, count=8, scale=0.5, avoid_center=True)


def special_rendang(draw, config, rnd):
    inner = draw_plate(draw)
    draw.ellipse((210, 210, 590, 590), fill="#5a3321", outline="#3d2318", width=5)
    for _ in range(22):
        x, y = random_point_in_ellipse(rnd, (225, 225, 575, 575), pad=24)
        draw_component(draw, rnd, "beef", x, y, 0.95)
    for _ in range(24):
        x, y = random_point_in_ellipse(rnd, (225, 225, 575, 575), pad=30)
        draw.line((x - 10, y, x + 10, y + 3), fill="#c78f4a", width=3)
    draw_herbs(draw, rnd, inner, 8)


def special_sutlac(draw, config, rnd):
    inner = draw_bowl_base(draw)
    draw.ellipse(inner, fill=PALETTE["cream"])
    draw.ellipse(shrink_box(inner, 50), fill="#f7ead0", outline="#dbc59c", width=3)
    for _ in range(70):
        x, y = random_point_in_ellipse(rnd, inner, pad=45)
        draw.ellipse((x - 3, y - 2, x + 3, y + 2), fill="#f9f4e8")
    for _ in range(28):
        x, y = random_point_in_ellipse(rnd, inner, pad=70)
        draw.ellipse((x - 4, y - 3, x + 4, y + 3), fill="#8b5a31")


def special_simit(draw, config, rnd):
    inner = draw_plate(draw)
    draw.ellipse((210, 240, 590, 580), fill=PALETTE["bread"], outline="#9e6225", width=12)
    draw.ellipse((325, 340, 475, 485), fill=PALETTE["plate"], outline="#d8cabb", width=5)
    for _ in range(120):
        x, y = random_point_in_ellipse(rnd, (210, 240, 590, 580), pad=15)
        if 320 < x < 480 and 335 < y < 490:
            continue
        draw.ellipse((x - 4, y - 3, x + 4, y + 3), fill="#f3e2bc")


def special_lokum(draw, config, rnd):
    inner = draw_plate(draw)
    colors = ["#d995a7", "#f1d2a1", "#c9d988", "#e8c7d7"]
    for row in range(3):
        for col in range(4):
            x = 250 + col * 92
            y = 285 + row * 92
            color = colors[(row + col) % len(colors)]
            draw.rounded_rectangle((x - 34, y - 34, x + 34, y + 34), radius=12, fill=color, outline="#ffffff", width=4)
            draw.ellipse((x - 8, y - 8, x + 8, y + 8), fill="#f9f1e5")


SPECIAL_RENDERERS = {
    "dosa": special_dosa,
    "idli": special_idli,
    "vada": special_vada,
    "banh-khot": special_banh_khot,
    "banh-cuon": special_banh_cuon,
    "banh-beo": special_banh_beo,
    "banh-flan-vietnamese": special_banh_flan,
    "che-ba-mau": special_che,
    "xoi-man": special_xoi_man,
    "beef-rendang-malaysian": special_rendang,
    "simit": special_simit,
    "lokum": special_lokum,
    "sutlac": special_sutlac,
}


if __name__ == "__main__":
    main()
