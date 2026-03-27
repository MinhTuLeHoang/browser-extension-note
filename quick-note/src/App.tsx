import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { generalRoutes, noteRoutes } from './index.pkg';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { notePagePathsPrefix } from './common/constants/PagePath';
import GeneralLayout from './components/Layout/GeneralLayout';
import NavBar from './containers/Init/NavBar';
import Footer from './containers/Init/Footer';

function App() {
	return (
		<ErrorBoundary fallback={<>error</>}>
			<Suspense>
				<BrowserRouter>
					<NavBar />
					<div style={{ paddingTop: '60px', paddingBottom: '60px', minHeight: '100vh', boxSizing: 'border-box' }}>
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
					</div>
					<Footer />
				</BrowserRouter>
			</Suspense>
		</ErrorBoundary>
	);
}

export default App;
