import { useEffect, useState } from 'react';
import reactLogo from 'assets/react.svg';
import viteLogo from '/../public/vite.svg';

const DemoPage = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log('load page demo');
		console.log(import.meta.env.VITE_APP_TITLE) // "123"
		console.log(import.meta.env.BASE_URL)
		console.log(import.meta.env.MODE)
	}, [])

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button style={{ background: 'blue' }} onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR a
				</p>
			</div>
			<p className="read-the-docs">Made by passioned dev Minh Tú Lê Hoàng</p>
		</>
	);
};

export default DemoPage;