#!/data/data/com.termux/files/usr/bin/bash

set -e

PLUGIN_DIR="plugin-dist"
ZIP_NAME="my-awesome-plugin.zip"
SERVER_PORT=8080

echo "📦 Generating plugin.json..."

# ตรวจสอบว่า plugin.json มีหรือยัง
if [ ! -f "$PLUGIN_DIR/plugin.json" ]; then
  echo '{"id":"my-awesome-plugin","name":"My Plugin","version":"1.0.0","main":"main.js"}' > "$PLUGIN_DIR/plugin.json"
fi

echo "🗜️  Zipping plugin to $ZIP_NAME..."
cd "$PLUGIN_DIR"
zip -r "../$ZIP_NAME" . > /dev/null
cd ..

echo "🚀 Starting HTTP server on port $SERVER_PORT..."
npx http-server . -p $SERVER_PORT &
SERVER_PID=$!

PLUGIN_URL="http://127.0.0.1:$SERVER_PORT/$ZIP_NAME"
echo "🔗 Installing plugin from: $PLUGIN_URL"

# ติดตั้งผ่าน SDK (ให้คุณคัดลอกไปวางใน Acode DevTools หรือ plugin เอง)
echo "✅ Done. Use this URL in Acode Plugin SDK: $PLUGIN_URL"
echo "🛑 CTRL+C to stop the server."

# wait server
wait $SERVER_PID