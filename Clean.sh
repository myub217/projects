#!/bin/bash

echo "🧹 ลบ node_modules/..."
rm -rf node_modules

echo "🧼 ลบ pnpm-lock.yaml..."
rm -f pnpm-lock.yaml

echo "🗑️ ลบ dist/ (ถ้ามี)..."
rm -rf dist

echo "📦 ติดตั้ง dependencies ด้วย pnpm..."
pnpm install

echo "🚀 รันเซิร์ฟเวอร์ dev..."
pnpm run dev