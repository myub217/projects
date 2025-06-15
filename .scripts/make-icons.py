from PIL import Image
import os

output_dir = "public/icons"
os.makedirs(output_dir, exist_ok=True)

base_size = 512
icon_color = (26, 35, 126)  # Navy blue (#1A237E)

img = Image.new("RGB", (base_size, base_size), color=icon_color)

img.save(os.path.join(output_dir, "icon-512x512.png"))
img.resize((192, 192)).save(os.path.join(output_dir, "icon-192x192.png"))
