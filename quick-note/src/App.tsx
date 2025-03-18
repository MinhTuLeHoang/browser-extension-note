import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './index.pkg';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
	return (
		<ErrorBoundary fallback={<>error</>}>
			<Suspense>
				<BrowserRouter>
					<Routes>
						{routes.map((props, index) => (
							<Route key={index} {...props} />
						))}
					</Routes>
				</BrowserRouter>
			</Suspense>
		</ErrorBoundary>
	);
}

export default App;
