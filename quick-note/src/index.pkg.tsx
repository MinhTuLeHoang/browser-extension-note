import { RouteProps } from 'react-router-dom';
import { pagePaths } from './common/constants/PagePath';
import HomePage from './containers/HomePage';
import DemoPage from './containers/DemoPage';

const routes: RouteProps[] = [
	{ path: pagePaths.Home, element: <HomePage /> },
	{ path: pagePaths.Demo, element: <DemoPage /> },
];

export default routes;
