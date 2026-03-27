import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { generalRoutes, noteRoutes } from './index.pkg';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { notePagePathsPrefix } from './common/constants/PagePath';
import GeneralLayout from './components/Layout/GeneralLayout';

function App() {
	return (
		<ErrorBoundary fallback={<>error</>}>
			<Suspense>
				<BrowserRouter>
					<Routes>
						{generalRoutes.map((props, index) => (
							<Route key={index} {...props} />
						))}
						<Route path={notePagePathsPrefix} element={<GeneralLayout />}>
							{noteRoutes.map((props, index) => (
								<Route key={`note-${index}`} {...props} />
							))}
						</Route>
					</Routes>
				</BrowserRouter>
			</Suspense>
		</ErrorBoundary>
	);
}

export default App;
