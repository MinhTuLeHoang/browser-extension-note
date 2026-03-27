#!/bin/bash

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Source constants
if [ -f "$SCRIPT_DIR/constants.sh" ]; then
   source "$SCRIPT_DIR/constants.sh"
fi

echo -e "${BLUE}${ROCKET} Applying chmod +x to all .sh files in ${YELLOW}$SCRIPT_DIR${NC}..."

# Find all .sh files in the script's directory and make them executable
find "$SCRIPT_DIR" -maxdepth 1 -name "*.sh" -exec chmod +x {} \;

echo -e "${GREEN}${CHECK} All .sh files are now executable!${NC}"

