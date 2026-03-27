#!/bin/bash

# Get the script directory and source constants
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PARENT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

if [ -f "$SCRIPT_DIR/constants.sh" ]; then
    source "$SCRIPT_DIR/constants.sh"
else
    # Fallback if constants.sh is not found
    RED='\033[0;31m'
    GREEN='\033[0;32m'
    CYAN='\033[0;36m'
    NC='\033[0m'
    INFO="ℹ️"
    ROCKET="🚀"
fi

echo -e "${CYAN}${ROCKET} Checking project directory sizes in: ${NC}${PARENT_DIR}"
echo "------------------------------------------------------------"

check_size() {
    local target="$PARENT_DIR/$1"
    local label="$2"
    
    if [ -d "$target" ]; then
        local size=$(du -sh "$target" | cut -f1)
        echo -e "${GREEN}${CHECK} ${label}:${NC} ${size}"
    else
        echo -e "${RED}${ERROR} ${label}:${NC} Not found"
    fi
}

# Check sizes of node_modules, src, and build folders
check_size "node_modules" "node_modules"
check_size "src" "src"
check_size "build" "build"

echo "------------------------------------------------------------"
echo -e "${CYAN}${INFO} Size check complete!${NC}"
