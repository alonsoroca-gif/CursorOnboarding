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
# Also copy app to repo root so Pages works with either "root" or "docs"
cp "$ROOT_DOCS/index.html" "$ROOT_DOCS/onboarding-pm.html" "$ROOT_DOCS/onboarding-pm.js" "$ROOT_DOCS/setup-chat.html" "$ROOT_DOCS/setup-chat.js" "$ROOT_DOCS/cursor-rules.html" "$ROOT_DOCS/cursor-rules.js" "$ROOT/"
rm -rf "$ROOT/screenshots"
cp -R "$ROOT_DOCS/screenshots" "$ROOT/"
touch "$ROOT/.nojekyll"
echo "Synced kit docs → root docs and repo root. Commit and push to update the live site."
echo "  cd $ROOT && git add docs index.html onboarding-pm.html onboarding-pm.js setup-chat.html setup-chat.js cursor-rules.html cursor-rules.js screenshots .nojekyll && git status"
