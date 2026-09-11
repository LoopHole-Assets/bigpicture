#!/usr/bin/env python3
"""
Batch image search for BigPicture Graphics site.
Parses z-ai image-search stdout (strips status messages, extracts JSON).
"""

import json
import subprocess
import sys
import re
from pathlib import Path

OUTPUT_FILE = "/home/z/my-project/scripts/image-results.json"

SEARCHES = [
    # Portfolio (16)
    ("p01", "premium coffee brand identity packaging mockup dark moody", 2),
    ("p02", "minimalist music label website editorial design dark", 2),
    ("p03", "documentary film production studio mountains cinematography", 2),
    ("p04", "outdoor apparel brand lookbook packaging trekking", 2),
    ("p05", "botanical skincare packaging design minimal green", 2),
    ("p06", "risograph print poster series architecture traditional", 2),
    ("p07", "social media campaign design grid instagram brand", 2),
    ("p08", "boutique hotel hospitality branding interior warm", 2),
    ("p09", "newsroom magazine website editorial layout typography", 2),
    ("p10", "food discovery app design mobile photography", 2),
    ("p11", "adventure film title sequence motion graphics landscape", 2),
    ("p12", "photography portfolio book hardcover landscape exhibition", 2),
    ("p13", "streetwear apparel brand identity logo garment", 2),
    ("p14", "craft beer can packaging design label collection", 2),
    ("p15", "landscape photography portfolio website full bleed", 2),
    ("p16", "fine dining restaurant menu design letterpress elegant", 2),
    # Testimonials (3)
    ("t1", "professional businessman portrait headshot neutral background", 3),
    ("t2", "professional businesswoman portrait headshot neutral background", 3),
    ("t3", "professional man executive portrait headshot neutral", 3),
    # Hero (3)
    ("hero_brand", "creative branding mockup stationery identity system", 2),
    ("hero_print", "editorial print design poster mockup studio", 2),
    ("hero_web", "modern website interface mockup laptop dark", 2),
]


def extract_json(stdout: str) -> dict | None:
    """Extract the JSON object from CLI output (status messages + JSON)."""
    # Find the first '{' and try to parse from there to the matching '}'
    start = stdout.find("{")
    if start == -1:
        return None
    # Find the last '}'
    end = stdout.rfind("}")
    if end == -1:
        return None
    json_str = stdout[start : end + 1]
    try:
        return json.loads(json_str)
    except json.JSONDecodeError:
        return None


def search_image(key: str, query: str, count: int = 2) -> str | None:
    """Run a single image search and return the first result URL."""
    cmd = [
        "z-ai", "image-search",
        "-q", query,
        "-c", str(count),
        "--gl", "us",
        "--no-rank",
    ]
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=180)
        stdout = result.stdout + "\n" + result.stderr

        data = extract_json(stdout)
        if not data:
            print(f"  ⚠ no JSON for: {query}", file=sys.stderr)
            return None

        if not data.get("success") or not data.get("results"):
            print(f"  ⚠ no results for: {query}", file=sys.stderr)
            return None

        url = data["results"][0]["original_url"]
        print(f"  ✓ {key}: {url}", file=sys.stderr)
        return url

    except subprocess.TimeoutExpired:
        print(f"  ⚠ timeout for: {query}", file=sys.stderr)
        return None
    except Exception as e:
        print(f"  ⚠ error for {query}: {e}", file=sys.stderr)
        return None


def main():
    results = {}
    total = len(SEARCHES)
    for i, (key, query, count) in enumerate(SEARCHES, 1):
        print(f"[{i}/{total}] {key}: {query}", file=sys.stderr)
        url = search_image(key, query, count)
        if url:
            results[key] = url

    with open(OUTPUT_FILE, "w") as f:
        json.dump(results, f, indent=2)

    print(f"\nDone. {len(results)}/{total} images found.", file=sys.stderr)
    print(f"Saved to: {OUTPUT_FILE}", file=sys.stderr)


if __name__ == "__main__":
    main()
