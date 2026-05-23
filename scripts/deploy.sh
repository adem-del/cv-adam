#!/usr/bin/env bash
set -e

echo "🚀 cv-adam — Deploy-Script"
echo "==========================="

# --- GitHub ---
echo ""
echo "📦 Schritt 1: GitHub Repo anlegen"
echo ""
echo "   1. Gehe zu https://github.com/new"
echo "   2. Repo-Name: cv-adam"
echo "   3. Öffentlich (Public)"
echo "   4. Kein README/kein .gitignore (haben wir schon)"
echo "   5. „Create repository“ klicken"
echo ""
echo "📋 Danach siehst du Befehle wie diese hier:"
echo "   git remote add origin https://github.com/DEIN-USERNAME/cv-adam.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""

read -p "🔗 GitHub Remote URL (leer lassen zum Überspringen): " REMOTE

if [ -n "$REMOTE" ]; then
  git remote add origin "$REMOTE"
  git branch -m main
  git push -u origin main
  echo "✅ Code auf GitHub gepusht!"
else
  echo "⏭️  Übersprungen. Mach das später manuell."
fi

# --- Vercel ---
echo ""
echo "⚡ Schritt 2: Auf Vercel deployen"
echo ""
echo "   Am einfachsten:"
echo "   1. Gehe zu https://vercel.com/new"
echo "   2. „Import Git Repository“ > dein cv-adam Repo"
echo "   3. Framework: Vite"
echo "   4. Build Command: npm run build"
echo "   5. Output: dist"
echo "   6. „Deploy“"
echo ""
echo "   Oder per CLI: npm i -g vercel && vercel --prod"
echo ""
echo "✅ Fertig! Deine Seite ist live unter: https://cv-adam.vercel.app"
echo ""
echo "🎯 Optional: https://cv-adam.vercel.app → dein-name.vercel.app"
