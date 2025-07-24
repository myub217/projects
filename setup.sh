#!/bin/bash
# setup.sh - Fix environment, dependencies, and cache for stable Vite + PWA + DaisyUI build

set -euo pipefail

echo "🛠️ Cleaning node_modules, lock files, and dist folder"
rm -rf node_modules pnpm-lock.yaml package-lock.json yarn.lock dist

echo "📦 Installing dependencies (including latest vite-plugin-pwa)"
pnpm add -D vite-plugin-pwa@latest
pnpm install

echo "🧹 Clearing Vite cache and forcing fresh build"
pnpm vite --clearScreen false --force || true

echo "✅ Setup complete. Run 'pnpm run build' to build your project."

# Optional: Install husky git hooks if present
if [ -d .husky ]; then
  echo "🔧 Installing Husky git hooks"
  pnpm exec husky install
fi