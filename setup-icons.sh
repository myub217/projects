#!/bin/bash

echo "สร้างโฟลเดอร์ public/icons..."
mkdir -p public/icons

echo "ดาวน์โหลด favicon.ico"
wget -O public/favicon.ico https://tailwindcss.com/favicon.ico

echo "ดาวน์โหลด icon-192x192.png"
wget -O public/icons/icon-192x192.png https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/192px-React-icon.svg.png

echo "ดาวน์โหลด icon-512x512.png"
wget -O public/icons/icon-512x512.png https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png

echo "สร้างไฟล์ manifest.json"
cat > public/manifest.json <<EOF
{
  "name": "Modular OnePage",
  "short_name": "OnePage",
  "description": "Modern React + Tailwind + DaisyUI App",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#18BC9C",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
EOF

echo "เสร็จสิ้น! อย่าลืมเพิ่มลิงก์ใน <head> ของ index.html:"
echo '<link rel="icon" href="/favicon.ico" />'
echo '<link rel="manifest" href="/manifest.json" />'
echo '<meta name="theme-color" content="#18BC9C" />'