import { Home, FileText, Play, Info, Settings, LayoutGrid } from "lucide-react";
import loadable, { LoadableComponent } from "@loadable/component";
import { pagePaths, notePagePaths } from "@/common/constants/PagePath";

export enum EClickAction {
	DEEPLINK = 'DEEPLINK',
	FUNCTION = 'FUNCTION',
	UI = 'UI'
}

export interface MenuItem {
	id: string;
	title: string;
	description: string;
	keywords: string[];
	icon: React.ReactNode;
	clickAction: {
		action: EClickAction;
		data: Partial<{
			/** Used with EClickAction.DEEPLINK */
			path: string;
			/** Used with EClickAction.FUNCTION */
			func: () => void;
			/** Used with EClickAction.UI */
			ui: LoadableComponent<any>;
			/** Used with EClickAction.UI (default: menu-extra-ui) */
			id: string;
		}>;
	};
	color: string;
	featured?: boolean;
}

export const menuItems: MenuItem[] = [
	{
		id: 'sorted-tab',
		title: 'Sorted Tab Page',
		description: 'Automatically sort all tabs in every window by URL',
		keywords: ['sort', 'tab', 'window', 'organize'],
		icon: <LayoutGrid size={20} />,
		clickAction: {
			action: EClickAction.UI,
			data: { 
				ui: loadable(() => import('../../FunctionPage/SortedTabPage')),
				id: 'sorted-tab-page'
			}
		},
		color: '#f59e0b',
		featured: true
	},
	{
		id: 'home',
		title: 'Start Browsing',
		description: 'Go to your dashboard',
		keywords: ['home', 'dashboard', 'start'],
		icon: <Home size={20} />,
		clickAction: {
			action: EClickAction.DEEPLINK,
			data: { path: pagePaths.Home }
		},
		color: '#4466ff',
		featured: true
	},
	{
		id: 'note',
		title: 'Quick Note',
		description: 'Capture ideas',
		keywords: ['note', 'write', 'capture', 'idea'],
		icon: <FileText size={20} />,
		clickAction: {
			action: EClickAction.DEEPLINK,
			data: { path: notePagePaths.Home }
		},
		color: '#00f3ff'
	},
	{
		id: 'demo',
		title: 'Demo Play',
		description: 'Test features',
		keywords: ['demo', 'play', 'test'],
		icon: <Play size={20} />,
		clickAction: {
			action: EClickAction.DEEPLINK,
			data: { path: pagePaths.Demo }
		},
		color: '#ff00e5'
	},
	{
		id: 'intro',
		title: 'Tutorial',
		description: 'How to use',
		keywords: ['intro', 'tutorial', 'help', 'guide'],
		icon: <Info size={20} />,
		clickAction: {
			action: EClickAction.DEEPLINK,
			data: { path: notePagePaths.Intro }
		},
		color: '#aaff00'
	},
	{
		id: 'settings',
		title: 'Settings',
		description: 'Preferences',
		keywords: ['settings', 'config', 'preference'],
		icon: <Settings size={20} />,
		clickAction: {
			action: EClickAction.DEEPLINK,
			data: { path: 'chrome://extensions/?id=eeijfnjmjelapkebgockoeaadonbchdd' }
		},
		color: '#94a3b8'
	}
];
