#!/bin/bash
set -euo pipefail

# Paths and patterns
VITE_BUILD_OUTDIR="dist"
LOG_PATTERN="build-*.log"
ENV_PATTERN="env-vars-*.txt"
INFO_PATTERN="project-info-*.json"
TREE_PATTERN="project-structure-*.txt"
SUMMARY_PATTERN="project-summary-prompt-*.txt"
DEPCHECK_PATTERN="depcheck-*.json"
ESLINT_PATTERN="eslint-unused-*.log"

echo "🧼 Cleaning build output directory if exists: $VITE_BUILD_OUTDIR"
if [[ -d "$VITE_BUILD_OUTDIR" ]]; then
  rm -rf -- "$VITE_BUILD_OUTDIR"
  echo "✅ Removed $VITE_BUILD_OUTDIR"
else
  echo "ℹ️ $VITE_BUILD_OUTDIR not found, skipping."
fi

echo "🧼 Removing generated temp/log files"
for pattern in $LOG_PATTERN $ENV_PATTERN $INFO_PATTERN $TREE_PATTERN $SUMMARY_PATTERN $DEPCHECK_PATTERN $ESLINT_PATTERN; do
  if compgen -G "$pattern" > /dev/null; then
    rm -f -- $pattern
    echo "✅ Removed files matching: $pattern"
  else
    echo "ℹ️ No files match pattern: $pattern"
  fi
done

echo "🧼 Clean complete."