#!/usr/bin/env python3
"""
Download all remote images to /public/images/ with clean category-based names.
Mapping: portfolio items by category, testimonials, hero, about sections.
"""

import os
import urllib.request
import ssl
from pathlib import Path

OUTPUT_DIR = "/home/z/my-project/public/images"

# (remote_url, local_filename)
# Portfolio: naming by category with sequential numbers
DOWNLOADS = [
    # Portfolio — Branding
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4b796828559f.jpg", "branding-1.jpg"),    # p01 Himalayan Roastery
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9816848e1e72.jpg", "branding-2.jpg"),    # p08 Boudha Living
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2a01fd234fd9.jpg", "branding-3.jpg"),    # p13 Khukri Wears
    # Portfolio — Web
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/cc516ead4add.png", "web-1.png"),         # p02 Kathmandu Sound
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b05240b83462.jpg", "web-2.jpg"),         # p09 Pokhara Daily
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b9b5eff7a0db.jpg", "web-3.jpg"),         # p15 Sagarmatha Studios
    # Portfolio — Video
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/74b96664e94c.jpg", "video-1.jpg"),       # p03 Annapurna Studios
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/aded51a8f29d.jpg", "video-2.jpg"),       # p11 Mustang Films
    # Portfolio — Print
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ce9678d7ee26.jpg", "print-1.jpg"),       # p04 Yeti Apparel
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/024009e138a4.png", "print-2.png"),       # p06 Patan Press
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c815c80c1e96.jpg", "print-3.jpg"),       # p16 Newa Kitchen
    # Portfolio — Graphic Design
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e1f35d6e96ae.jpg", "graphic-design-1.jpg"), # p05 Lumbini Botanicals
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5d789d92c4d7.jpg", "graphic-design-2.jpg"), # p12 Everest Studio
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1dacbbb8e79b.jpg", "graphic-design-3.jpg"), # p14 Bagmati Brews
    # Portfolio — Digital
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8bf2a16784c1.png", "digital-1.png"),     # p07 Summit Social
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a66437470a1c.jpg", "digital-2.jpg"),     # p10 Thamel Eats
    # Testimonials
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5bddbc7a393f.jpg", "testimonial-1.jpg"), # t1 Aarav
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/afd4fd350489.jpg", "testimonial-2.jpg"), # t2 Priya
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a85a6c25b64f.jpg", "testimonial-3.jpg"), # t3 Bikash
    # Hero
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1e93aaf246e3.jpg", "hero-branding.jpg"), # hero_brand
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b75b78a9dbdd.jpeg", "hero-web.jpeg"),    # hero_web
    # About sections — use the studio workspace image
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7546530bedc3.jpg", "about-studio.jpg"),  # About + AboutIntro
]

def download(url, filename):
    dest = os.path.join(OUTPUT_DIR, filename)
    if os.path.exists(dest):
        print(f"  ✓ exists: {filename}")
        return True
    try:
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, context=ctx, timeout=30) as resp:
            data = resp.read()
        with open(dest, "wb") as f:
            f.write(data)
        print(f"  ✓ downloaded: {filename} ({len(data)//1024}KB)")
        return True
    except Exception as e:
        print(f"  ⚠ failed: {filename} — {e}")
        return False

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    success = 0
    total = len(DOWNLOADS)
    for url, filename in DOWNLOADS:
        if download(url, filename):
            success += 1
    print(f"\nDone. {success}/{total} images downloaded to {OUTPUT_DIR}")

if __name__ == "__main__":
    main()
