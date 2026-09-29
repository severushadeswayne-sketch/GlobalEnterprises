"""Regenerate assets/img/images.json with every image's path and pixel size.

Run from the repository root after adding or replacing images:
    pip install pillow
    python tools/build_manifest.py
Then copy the width/height values into the matching <img> tags.
"""
import json
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent.parent
img_dir = root / "assets" / "img"
manifest = []
for f in sorted(img_dir.iterdir()):
    if f.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}:
        with Image.open(f) as im:
            w, h = im.size
        manifest.append({
            "file": f"assets/img/{f.name}",
            "width": w,
            "height": h,
            "orientation": "portrait" if h > w else "landscape",
            "kb": round(f.stat().st_size / 1024),
        })
(img_dir / "images.json").write_text(json.dumps(manifest, indent=2))
print(f"Wrote {len(manifest)} entries to assets/img/images.json")
