#!/usr/bin/env sh
set -eu

TARGET_URL="${1:-${INTRANET_URL:-http://localhost:8080}}"

printf "Verification de %s\n" "$TARGET_URL"
curl --fail --silent --show-error --max-time "${HEALTHCHECK_TIMEOUT:-5}" "$TARGET_URL" >/dev/null
printf "OK\n"
