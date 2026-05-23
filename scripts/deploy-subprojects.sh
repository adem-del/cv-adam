#!/usr/bin/env bash
# Deploy alle 3 Sub-Projekte einzeln auf Vercel
# Voraussetzung: Du hast 3 Repos auf GitHub erstellt:
#   github.com/new → digital-euro-dashboard
#   github.com/new → uiuc-housing
#   github.com/new → consulting-case-profitability

set -e

echo "🚀 Deploy Script für Sub-Projekte"
echo "================================"
echo ""

deploy_project() {
  local dir=$1
  local repo=$2
  
  echo "📦 Deploye $dir → $repo"
  
  cd /root/.openclaw/workspace/cv-adem/projects/$dir
  
  # Git initialisieren falls nicht vorhanden
  if [ ! -d .git ]; then
    git init
    git add -A
    git commit -m "Initial commit"
  fi
  
  # Remote setzen
  git remote remove origin 2>/dev/null || true
  git remote add origin https://github.com/adem-del/$repo.git
  git branch -m main
  
  echo ""
  echo "   🔗 So pushen:"
  echo "   cd /root/.openclaw/workspace/cv-adem/projects/$dir"
  echo "   git push -u origin main"
  echo ""
  echo "   ⚡ Danach auf https://vercel.com/new importieren"
}

deploy_project "digital-euro-dashboard" "digital-euro-dashboard"
deploy_project "uiuc-housing" "uiuc-housing"
deploy_project "consulting-case" "consulting-case-profitability"

echo ""
echo "✅ Fertig! Nach dem Push auf Vercel importieren."
