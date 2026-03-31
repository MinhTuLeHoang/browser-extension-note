/// <reference types="chrome-types"/>
import { useEffect } from 'react';

const SortedTabPage = ({ handleClose }: { handleClose?: () => void }) => {
	useEffect(() => {
		const performSorting = async () => {
			console.log("[SortedTabPage] Starting tab sorting...");
			try {
				const tabs = await chrome.tabs.query({});
				console.log(`[SortedTabPage] Found ${tabs.length} tabs total.`);
				
				// Group tabs by windowId
				const windowTabs: Record<number, chrome.tabs.Tab[]> = {};
				console.log('windowTabs', windowTabs);
				tabs.forEach(tab => {
					if (tab.windowId !== undefined) {
						if (!windowTabs[tab.windowId]) {
							windowTabs[tab.windowId] = [];
						}
						windowTabs[tab.windowId].push(tab);
					}
				});

				console.log(`[SortedTabPage] Grouped into ${Object.keys(windowTabs).length} windows.`);

				for (const [windowIdStr, tabsInWindow] of Object.entries(windowTabs)) {
					const windowId = parseInt(windowIdStr);
					console.log(`[SortedTabPage] Sorting ${tabsInWindow.length} tabs in window ${windowId}...`);
					
					// Sort criteria: URL, then ID
					console.log('tabsInWindow', tabsInWindow);
					const sorted = [...tabsInWindow].sort((a, b) => {
						const urlA = a.url || '';
						const urlB = b.url || '';
						if (urlA !== urlB) return urlA.localeCompare(urlB);
						return (a.id || 0) - (b.id || 0);
					});
					console.log('sorted', sorted);

					// Move tabs to their sorted positions
					for (let i = 0; i < sorted.length; i++) {
						const tab = sorted[i];
						if (tab.id !== undefined && tab.index !== i) {
							console.log(`[SortedTabPage] Moving tab ${tab.id} ("${tab.title}") to index ${i}`);
							await chrome.tabs.move(tab.id, { index: i });
						}
					}
					
					console.log(`[SortedTabPage] Successfully sorted tabs in window ${windowId}`);
				}
			} catch (error) {
				console.error("[SortedTabPage] Failed to sort tabs:", error);
			} finally {
				console.log("[SortedTabPage] Sorting operation finished. Closing...");
				// Close the UI/unmount after finishing
				setTimeout(() => handleClose?.(), 100);
			}
		};

		performSorting();
	}, []);

	return null;
};

export default SortedTabPage;
