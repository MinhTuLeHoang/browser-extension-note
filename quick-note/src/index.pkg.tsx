import { RouteProps } from 'react-router-dom';
import { notePagePaths, pagePaths } from './common/constants/PagePath';
import HomePage from './containers/HomePage';
import DemoPage from './containers/DemoPage';
import NavigationCenterPage from './containers/NavigationCenterPage';
import MenuPage from './containers/MenuPage';
import QuickNotePage from './containers/Note/QuickNotePage';
import NoteIntroPage from './containers/Note/NoteIntroPage';

export const generalRoutes: RouteProps[] = [
	{ path: pagePaths.Demo, element: <DemoPage /> },
	{ path: pagePaths.Home, element: <HomePage /> },
	{ path: pagePaths.Menu, element: <MenuPage /> },

	// First page of extension
	{ path: '/index.html', element: <MenuPage /> },
	{ path: '*', element: <NavigationCenterPage /> },
];

export const noteRoutes: RouteProps[] = [
	{ path: notePagePaths.Home, element: <QuickNotePage /> },
	{ path: notePagePaths.Intro, element: <NoteIntroPage /> },
];
