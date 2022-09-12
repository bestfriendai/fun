import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Form from './components/Form';
import Header from './components/Header';
import Work from './components/Work';
import Footer from './components/Footer';

function App2D() {
	const [ classNoScroll, setClassNoScroll ] = useState('');

	return (
		<div className={`App ${classNoScroll}`}>
			<Header setClassNoScroll={setClassNoScroll} />
			<AboutMe />
			<Work />
			<Form />
			<Footer />
		</div>
	);
}

export default App2D;
