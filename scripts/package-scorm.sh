#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
source_dir="$repo_root/scorm-src"
output_dir="$repo_root/dist"
output_file="$output_dir/spec-driven-agentic-coding-labs-scorm-1.2.zip"

command -v zip >/dev/null 2>&1 || { echo "zip is required" >&2; exit 1; }
node "$repo_root/scripts/validate-scorm.mjs"
mkdir -p "$output_dir"
rm -f "$output_file"
(
  cd "$source_dir"
  zip -qr "$output_file" .
)
unzip -t "$output_file" >/dev/null
echo "$output_file"

