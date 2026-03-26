#!/bin/bash
echo "🚀 Updating GitHub Pages..."
git add .
read -p "Enter commit message (or press enter for default): " msg
if [ -z "$msg" ]; then
    msg="Update game $(date +'%Y-%m-%d %H:%M:%S')"
fi
git commit -m "$msg"
git push origin main
echo ""
echo "✅ Done! Your site will be live/updated shortly at:"
echo "👉 https://minato14907-create.github.io/GG.github.io/"
