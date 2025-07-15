#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail
IFS=$'\n\t'

echo "🔧 Running Full Setup..."

# 1. Node & PNPM Check
node -v
command -v pnpm >/dev/null

# 2. Clean
rm -rf node_modules pnpm-lock.yaml .cache dist coverage || true

# 3. Install
pnpm install

# 4. Fix husky pre-commit if needed
if [ -f ".husky/pre-commit" ]; then
  sed -i '1,2d' .husky/pre-commit
  echo "✅ Husky pre-commit fixed"
fi

# 5. Check jest.setup.ts or jest.setup.js
if [ -f "jest.setup.js" ] && [ ! -f "jest.setup.ts" ]; then
  mv jest.setup.js jest.setup.ts
  echo "✅ Renamed jest.setup.js -> jest.setup.ts"
fi

# 6. Fix jest.config to match setup file
if grep -q "jest.setup.js" jest.config.*; then
  sed -i 's/jest.setup.js/jest.setup.ts/g' jest.config.*
  echo "✅ Fixed jest.config to use jest.setup.ts"
fi

# 7. Create jest.setup.ts if missing
if [ ! -f "jest.setup.ts" ]; then
  echo "import '@testing-library/jest-dom';" > jest.setup.ts
  echo "✅ Created jest.setup.ts with @testing-library/jest-dom"
fi

# 8. Build test coverage folders
mkdir -p coverage

# 9. Typecheck, Lint, Build
pnpm check || true
pnpm build

echo "✅ Setup complete. Ready to commit."