#!/bin/bash

# Get the script directory and source constants
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Source existing constants if available
if [ -f "$SCRIPT_DIR/constants.sh" ]; then
    source "$SCRIPT_DIR/constants.sh"
else
    # Fallback if constants.sh is not found
    RED='\033[0;31m'
    GREEN='\033[0;32m'
    CYAN='\033[0;36m'
    YELLOW='\033[0;33m'
    NC='\033[0m'
    INFO="ℹ️"
    ROCKET="🚀"
    HOURGLASS="⏳"
    CHECK="✅"
fi

# 1. Use Node 22 (NVM)
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
    source "$NVM_DIR/nvm.sh"
fi

if command -v nvm &> /dev/null; then
    echo -e "${YELLOW}${HOURGLASS} Switching to Node 22...${NC}"
    nvm use 22
else
    echo -e "${RED}${ERROR} nvm not found, skipping nvm use...${NC}"
fi

# 2. Parse flags for version update
VERSION_TYPE="minor" # Default to Minor (-N)

while getopts "MNP" opt; do
  case $opt in
    M) VERSION_TYPE="major" ;;
    N) VERSION_TYPE="minor" ;;
    P) VERSION_TYPE="patch" ;;
    *) echo -e "${RED}${ERROR} Invalid option. Use -M (Major), -N (Minor), or -P (Patch)${NC}"; exit 1 ;;
  esac
done

echo -e "${CYAN}${ROCKET} Updating extension version (${VERSION_TYPE})...${NC}"

cd "$PROJECT_ROOT" || exit 1

# Update version in package.json
# Using --no-git-tag-version to avoid creating git commits/tags if not in a repo or if user doesn't want it
npm version "$VERSION_TYPE" --no-git-tag-version

NEW_VERSION=$(jq -r '.version' package.json)
echo -e "${GREEN}${CHECK} New version in package.json: ${NEW_VERSION}${NC}"

# 3. Build the project
echo -e "${YELLOW}${HOURGLASS} Building project...${NC}"
pnpm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}${ERROR} Build failed!${NC}"
    exit 1
fi

# 4. Sync version in build/manifest.json
MANIFEST_PATH="$PROJECT_ROOT/build/manifest.json"
if [ -f "$MANIFEST_PATH" ]; then
    echo -e "${YELLOW}${HOURGLASS} Syncing version to build/manifest.json...${NC}"
    # Use temporary file to avoid issues with jq writing to the same file
    jq ".version = \"$NEW_VERSION\"" "$MANIFEST_PATH" > "$MANIFEST_PATH.tmp" && mv "$MANIFEST_PATH.tmp" "$MANIFEST_PATH"
    echo -e "${GREEN}${CHECK} Synchronized manifest version to ${NEW_VERSION}${NC}"
else
    echo -e "${RED}${ERROR} build/manifest.json not found!${NC}"
fi

# 5. Open Chrome to reload extension
EXTENSION_URL="chrome://extensions/?id=nafoojofgbbiikchcomoahijpemdkhoh"
echo -e "${CYAN}${ROCKET} Opening browser to reload extension...${NC}"
# Use the open command on macOS to open Chrome
open -a "Google Chrome" "$EXTENSION_URL" || open "$EXTENSION_URL"

echo "------------------------------------------------------------"
echo -e "${GREEN}${CHECK} Extension update process complete!${NC}"
