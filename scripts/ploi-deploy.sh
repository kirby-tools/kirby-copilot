cd {SITE_DIRECTORY}

# Pull changes
git pull origin main

# Install composer dependencies
composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev

{RELOAD_PHP_FPM}

# Build playground plugin
pnpm i && pnpm run build:playground

echo "🚀 Playground deployed!"
