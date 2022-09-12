import { createRoot } from 'react-dom/client';
import React from 'react';
import Scene from './Scene';
import reportWebVitals from './reportWebVitals';
import { Canvas } from '@react-three/fiber';
import LoadingScreen from './LoadingScreen';
import './index.css';
import { BrowserRouter, useNavigate } from 'react-router-dom';

function App3D() {
	let navigate = useNavigate();
	return (
		<React.Fragment>
			<Canvas
				style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
				camera={{ position: [ -100, 50, 200 ], zoom: 1.25 }}
			>
				<BrowserRouter>
					<Scene />
				</BrowserRouter>
			</Canvas>
			<LoadingScreen />
		</React.Fragment>
	);
}

export default App3D;
