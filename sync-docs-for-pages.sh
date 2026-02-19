#!/bin/bash
# Sync kit docs → root docs so GitHub Pages (when set to "docs") shows latest.
# Run from repo root: ./sync-docs-for-pages.sh
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
KIT_DOCS="$ROOT/Cursor-Onboarding/cursor-onboarding-kit/docs"
ROOT_DOCS="$ROOT/docs"
if [[ ! -d "$KIT_DOCS" ]]; then
  echo "Not found: $KIT_DOCS"
  exit 1
fi
mkdir -p "$ROOT_DOCS"
rsync -a --delete "$KIT_DOCS/" "$ROOT_DOCS/" --exclude='.git'
touch "$ROOT_DOCS/.nojekyll"
echo "Synced kit docs → root docs. Commit and push to update the live site."
echo "  cd $ROOT && git add docs && git status"
