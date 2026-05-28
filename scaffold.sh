#!/bin/bash

# Scaffold script for Monad User Management MiniApp
# This script sets up the development environment

set -e

echo "🚀 Setting up Monad User Management MiniApp..."

# Check if Bun is installed
if ! command -v bun &> /dev/null; then
    echo "❌ Bun is not installed. Installing Bun..."
    curl -fsSL https://bun.sh/install | bash
fi

# Install dependencies
echo "📦 Installing dependencies..."
bun install

# Copy environment file
if [ ! -f .env.local ]; then
    echo "🔧 Setting up environment..."
    cp .env.example .env.local
    echo "⚠️  Please edit .env.local with your configuration"
fi

# Generate database migrations
echo "🗄️  Generating database migrations..."
bun db:generate

echo "✅ Setup complete! Run 'bun dev' to start development server."
echo ""
echo "📝 Next steps:"
echo "  1. Edit .env.local with your configuration"
echo "  2. Run 'bun dev' to start the development server"
echo "  3. Open http://localhost:3000 in your browser"