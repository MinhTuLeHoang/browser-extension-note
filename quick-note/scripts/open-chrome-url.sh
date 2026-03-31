#!/bin/bash

# Utility script to open a URL in Google Chrome on macOS, 
# or focus the tab if it's already open.

TARGET_URL="$1"

if [ -z "$TARGET_URL" ]; then
    echo "Usage: $0 <url>"
    exit 1
fi

# Detect if the page is already open in Chrome and focus it, otherwise open new
if [[ "$OSTYPE" == "darwin"* ]]; then
    # Use osascript for macOS to interact with Chrome tabs
    TAB_FOUND=$(osascript <<EOF
    tell application "Google Chrome"
        set found to false
        set window_list to every window
        set window_index to 1
        log "Window IDs found: " & (id of every window as text)
        log "Total windows found: " & (count of window_list)
        repeat with w in window_list
            set tab_list to tabs of w
            set tab_index to 1
            log "\n"
            log "Checking Window " & (window_index as text) & " (ID: " & (id of w as text) & ") with " & (count of tab_list as text) & " tabs..."
            repeat with t in tab_list
                set current_url to URL of t
                log "  -> Tab " & (tab_index as text) & ": " & current_url
                -- Check for exact match or general management page if requested
                if (current_url starts with "$TARGET_URL") or (("$TARGET_URL" contains "chrome://extensions") and (current_url contains "chrome://extensions")) or (current_url contains "$TARGET_URL") then
                    log "  [MATCH FOUND] Focusing Window " & (window_index as text) & ", Tab " & (tab_index as text)
                    set active tab index of w to tab_index
                    set index of w to 1
                    activate
                    set found to true
                    return true
                end if
                set tab_index to tab_index + 1
            end repeat
            set window_index to window_index + 1
            if found then exit repeat
        end repeat
        return found
    end tell
EOF
)
    if [ "$TAB_FOUND" != "true" ]; then
        open -a "Google Chrome" "$TARGET_URL" || open "$TARGET_URL"
    fi
else
    # Fallback for non-macOS platforms
    if command -v open &> /dev/null; then
        open "$TARGET_URL"
    elif command -v xdg-open &> /dev/null; then
        xdg-open "$TARGET_URL"
    else
        echo "Could not find a command to open the browser."
        exit 1
    fi
fi
