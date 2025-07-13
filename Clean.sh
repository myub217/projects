#!/bin/bash
set -euo pipefail

# ============================
# 🧹 Clean script for project workspace
# ============================

# Configurable variables (set to your project structure)
VITE_BUILD_OUTDIR="${VITE_BUILD_OUTDIR:-dist}"
LOG_PATTERN="build-*.log"
ENV_PATTERN="env-vars-*.txt"
INFO_PATTERN="project-info-*.json"
TREE_PATTERN="project-structure-*.txt"
SUMMARY_PATTERN="project-summary-prompt-*.txt"

echo "🧼 Cleaning build output directory: $VITE_BUILD_OUTDIR"
rm -rf -- "$VITE_BUILD_OUTDIR"

echo "🧼 Removing generated logs and temp files"
rm -f -- $LOG_PATTERN $ENV_PATTERN $INFO_PATTERN $TREE_PATTERN $SUMMARY_PATTERN

echo "🧼 Clean complete."