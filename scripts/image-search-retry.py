#!/usr/bin/env python3
"""
Retry the 8 failed image searches with delays between calls to avoid rate limits.
"""

import json
import subprocess
import sys
import time
from pathlib import Path

OUTPUT_FILE = "/home/z/my-project/scripts/image-results.json"

RETRIES = [
    ("p15", "landscape photography mountains wide"),
    ("p16", "restaurant menu design elegant"),
    ("t1", "businessman portrait headshot"),
    ("t2", "businesswoman portrait headshot"),
    ("t3", "professional man portrait"),
    ("hero_brand", "branding identity mockup"),
    ("hero_print", "editorial print poster design"),
    ("hero_web", "website interface mockup"),
]


def extract_json(stdout: str) -> dict | None:
    start = stdout.find("{")
    end = stdout.rfind("}")
    if start == -1 or end == -1:
        return None
    try:
        return json.loads(stdout[start : end + 1])
    except Exception:
        return None


def search_with_retry(key: str, query: str, max_retries: int = 3) -> str | None:
    for attempt in range(1, max_retries + 1):
        cmd = [
            "z-ai", "image-search",
            "-q", query,
            "-c", "3",
            "--gl", "us",
            "--no-rank",
        ]
        try:
            r = subprocess.run(cmd, capture_output=True, text=True, timeout=180)
            combined = r.stdout + "\n" + r.stderr

            if "429" in combined or "Too many requests" in combined:
                wait = 30 * attempt
                print(f"  ⏳ rate limited, waiting {wait}s... (attempt {attempt})", file=sys.stderr)
                time.sleep(wait)
                continue

            data = extract_json(combined)
            if data and data.get("success") and data.get("results"):
                url = data["results"][0]["original_url"]
                print(f"  ✓ {url}", file=sys.stderr)
                return url
            else:
                print(f"  ⚠ no results (attempt {attempt})", file=sys.stderr)
                time.sleep(5)
        except Exception as e:
            print(f"  ⚠ error: {e}", file=sys.stderr)
            time.sleep(5)
    return None


def main():
    # Load existing results
    with open(OUTPUT_FILE, "r") as f:
        results = json.load(f)

    print(f"Starting with {len(results)}/22 images", file=sys.stderr)

    for key, query in RETRIES:
        if key in results:
            print(f"  ↻ skipping {key} (already have URL)", file=sys.stderr)
            continue
        print(f"[{key}] {query}", file=sys.stderr)
        url = search_with_retry(key, query)
        if url:
            results[key] = url
        # Delay between searches to avoid rate limits
        time.sleep(8)

    with open(OUTPUT_FILE, "w") as f:
        json.dump(results, f, indent=2)

    print(f"\nDone. Total: {len(results)}/22", file=sys.stderr)


if __name__ == "__main__":
    main()
