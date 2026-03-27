import React from "react";
import { Home, FileText, Play, Info, Settings } from "lucide-react";
import { pagePaths, notePagePaths } from "@/common/constants/PagePath";

export interface MenuItem {
	id: string;
	title: string;
	description: string;
	icon: React.ReactNode;
	path: string;
	color: string;
	featured?: boolean;
}

export const menuItems: MenuItem[] = [
	{
		id: 'home',
		title: 'Start Browsing',
		description: 'Go to your dashboard',
		icon: <Home size={20} />,
		path: pagePaths.Home,
		color: '#4466ff',
		featured: true
	},
	{
		id: 'note',
		title: 'Quick Note',
		description: 'Capture ideas',
		icon: <FileText size={20} />,
		path: notePagePaths.Home,
		color: '#00f3ff'
	},
	{
		id: 'demo',
		title: 'Demo Play',
		description: 'Test features',
		icon: <Play size={20} />,
		path: pagePaths.Demo,
		color: '#ff00e5'
	},
	{
		id: 'intro',
		title: 'Tutorial',
		description: 'How to use',
		icon: <Info size={20} />,
		path: notePagePaths.Intro,
		color: '#aaff00'
	},
	{
		id: 'settings',
		title: 'Settings',
		description: 'Preferences',
		icon: <Settings size={20} />,
		path: 'chrome://extensions/?id=eeijfnjmjelapkebgockoeaadonbchdd',
		color: '#94a3b8'
	}
];
