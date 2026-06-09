"""
OJ Exterior Care — Before/After Image Splitter
-----------------------------------------------
Drops combined left=before / right=after images into the work folder.

Usage:
  1. Put your combined before/after JPGs in the same folder as this script.
  2. Name each file with what job it is, e.g.:
       driveway2.jpg, deck2.jpg, patio2.jpg, steps.jpg, etc.
  3. Run:  python split-photos.py
  4. Split files appear in src/assets/work/ automatically.
"""

from PIL import Image
import os, sys

INPUT_FOLDER = os.path.dirname(os.path.abspath(__file__))
OUTPUT_FOLDER = os.path.join(INPUT_FOLDER, "src", "assets", "work")

EXTENSIONS = (".jpg", ".jpeg", ".png", ".webp")

os.makedirs(OUTPUT_FOLDER, exist_ok=True)

processed = 0
for fname in os.listdir(INPUT_FOLDER):
    name, ext = os.path.splitext(fname)
    if ext.lower() not in EXTENSIONS:
        continue
    # Skip already-split files
    if name.endswith("-before") or name.endswith("-after"):
        continue
    # Skip non-job files
    if name in ("split-photos",):
        continue

    path = os.path.join(INPUT_FOLDER, fname)
    try:
        img = Image.open(path)
    except Exception:
        continue

    w, h = img.size
    mid = w // 2

    before = img.crop((0, 0, mid, h))
    after  = img.crop((mid, 0, w, h))

    before_path = os.path.join(OUTPUT_FOLDER, f"{name}-before{ext}")
    after_path  = os.path.join(OUTPUT_FOLDER, f"{name}-after{ext}")

    before.save(before_path, quality=92)
    after.save(after_path,  quality=92)

    print(f"✓  {fname}  →  {name}-before{ext}  +  {name}-after{ext}")
    processed += 1

if processed == 0:
    print("No images found to split. Make sure your combined photos are in the same folder as this script.")
    print("Files should NOT already be named '-before' or '-after'.")
else:
    print(f"\nDone! {processed} image(s) split → src/assets/work/")
    print("Now update InstagramFeed.tsx to import the new files.")
