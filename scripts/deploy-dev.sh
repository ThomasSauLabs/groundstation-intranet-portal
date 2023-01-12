#!/usr/bin/env sh
set -eu
ENVIRONMENT="${1:-development}"
printf 'Préparation des outils Groundstation pour %s\n' "$ENVIRONMENT"
printf 'Ce script prépare uniquement les fichiers de développement local.\n'
