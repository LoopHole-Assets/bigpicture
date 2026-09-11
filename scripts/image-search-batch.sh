#!/usr/bin/env bash
# Batch image search for BigPicture Graphics site.
# Runs searches sequentially (to avoid rate limits) and writes results to JSON.
#
# Output: /home/z/my-project/scripts/image-results.json

set -uo pipefail

OUTPUT="/home/z/my-project/scripts/image-results.json"
echo "{" > "$OUTPUT"
FIRST=1

emit() {
  local key="$1"
  local query="$2"
  local count="${3:-1}"
  echo "  Searching: $query" >&2
  local result
  result=$(z-ai image-search -q "$query" -c "$count" --gl us --no-rank 2>/dev/null)
  if [ $? -ne 0 ]; then
    echo "  ⚠ search failed for: $query" >&2
    return
  fi
  # Extract first original_url from JSON response
  local url
  url=$(echo "$result" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    if data.get('success') and data.get('results'):
        print(data['results'][0]['original_url'])
except Exception:
    pass
" 2>/dev/null)
  if [ -z "$url" ]; then
    echo "  ⚠ no URL found for: $query" >&2
    return
  fi
  echo "  ✓ $url" >&2
  if [ $FIRST -eq 1 ]; then
    FIRST=0
  else
    echo "," >> "$OUTPUT"
  fi
  printf '  "%s": "%s"' "$key" "$url" >> "$OUTPUT"
}

# ----------------------------------------------------------------------------
# PORTFOLIO IMAGES (16)
# ----------------------------------------------------------------------------
emit "p01" "premium coffee brand identity packaging mockup dark moody" 2
emit "p02" "minimalist music label website editorial design dark" 2
emit "p03" "documentary film production studio himalayan mountains cinematography" 2
emit "p04" "outdoor apparel brand lookbook packaging trekking" 2
emit "p05" "botanical skincare packaging design minimal green" 2
emit "p06" "risograph print poster series architecture patan" 2
emit "p07" "social media campaign design grid instagram brand" 2
emit "p08" "boutique hotel hospitality branding interior boudha" 2
emit "p09" "newsroom magazine website editorial layout typography" 2
emit "p10" "food discovery app design mobile photography thamel" 2
emit "p11" "adventure film title sequence motion graphics landscape" 2
emit "p12" "photography portfolio book hardcover landscape exhibition" 2
emit "p13" "streetwear apparel brand identity logo garment" 2
emit "p14" "craft beer can packaging design label collection" 2
emit "p15" "landscape photography portfolio website full bleed" 2
emit "p16" "fine dining restaurant menu design letterpress newari" 2

# ----------------------------------------------------------------------------
# TESTIMONIAL PHOTOS (3)
# ----------------------------------------------------------------------------
emit "t1" "professional south asian businessman portrait headshot neutral background" 3
emit "t2" "professional south asian businesswoman portrait headshot neutral background" 3
emit "t3" "professional south asian man executive portrait headshot" 3

# ----------------------------------------------------------------------------
# HERO IMAGES (3)
# ----------------------------------------------------------------------------
emit "hero_brand" "creative branding mockup stationery identity system" 2
emit "hero_print" "editorial print design poster mockup studio" 2
emit "hero_web" "modern website interface mockup laptop dark" 2

echo "" >> "$OUTPUT"
echo "}" >> "$OUTPUT"

echo "" >&2
echo "Done. Results saved to: $OUTPUT" >&2
