#!/bin/sh

mkdir -p .husky/_

cat > .husky/pre-commit << 'EOF'
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpm lint
EOF

chmod +x .husky/pre-commit

# แก้ไข hook ใน .husky/_/*
for file in .husky/_/*; do
  [ -f "$file" ] && sed -i -e '1s|#!/usr/bin/env sh|#!/bin/sh|' \
                           -e '2s|. "$(dirname -- "$0")/_/husky.sh"|. "$(dirname "$0")/_/husky.sh"|' "$file"
done

# แก้ไข hook ใน .husky/*
for file in .husky/*; do
  # skip directory
  [ -f "$file" ] && sed -i -e '1s|#!/usr/bin/env sh|#!/bin/sh|' \
                           -e '2s|. "$(dirname -- "$0")/_/husky.sh"|. "$(dirname "$0")/_/husky.sh"|' "$file"
done

echo "Setup husky hooks updated with correct shebang and husky.sh path"