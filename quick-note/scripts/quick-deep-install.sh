#!/bin/bash

# Get the script directory and source constants
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PARENT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

if [ -f "$SCRIPT_DIR/constants.sh" ]; then
    source "$SCRIPT_DIR/constants.sh"
fi

echo -e "${CYAN}${ROCKET} Starting deep clean and fresh install...${NC}"
echo "------------------------------------------------------------"

# Navigate to project root
cd "$PARENT_DIR" || exit 1

# 1. Delete node_modules and pnpm-lock.yaml
echo -e "${YELLOW}${HOURGLASS} Deleting node_modules and pnpm-lock.yaml...${NC}"
rm -rf node_modules pnpm-lock.yaml
echo -e "${GREEN}${CHECK} Clean up complete!${NC}"
echo ""

# 2. Use Node 22 (NVM)
# We need to source nvm to use it in a script
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

# 3. Fresh installation
echo ""c
echo -e "${CYAN}${ROCKET} Running pnpm install...${NC}"
if command -v pnpm &> /dev/null; then
    pnpm i
    echo "------------------------------------------------------------"
    echo -e "${GREEN}${CHECK} Deep install complete!${NC}"
else
    echo -e "${RED}${ERROR} pnpm not found! Please install pnpm first.${NC}"
fi
