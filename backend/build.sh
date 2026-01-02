#!/usr/bin/env bash
# Exit on error
set -o errexit

pip install -r requirements.txt

# Convert static files for production
python manage.py collectstatic --no-input

# Apply migrations (creates the fresh SQLite DB on the server)
python manage.py migrate
