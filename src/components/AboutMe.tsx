import React, { useState, useEffect } from 'react';

import '../styles/mobile/aboutMe.css';
import '../styles/desktop/aboutMe.css';

import circles from '../img/Component 6 – 1@2x.png';
import stairs from '../img/Component 7 – 1@2x.png';

import { useHasScrolled } from '../hooks/useHasScrolled';

function AboutMe() {
	const [ classContainer, setClassContainer ] = useState('');

	const scrollAboutMe = useHasScrolled(440);

	useEffect(
		() => {
			const { innerWidth } = window;
			if (innerWidth >= 1440) {
				if (scrollAboutMe) {
					setClassContainer('active');
				} else if (!scrollAboutMe) {
					setClassContainer('');
				}
			}
		},
		[ document.documentElement.scrollTop ]
	);
	return (
		<div className="aboutMe">
			<div className={`container ${classContainer}`}>
				<span>History</span>
				<p>
					I started learning about the frontend from October 2017. Later I tested my knowledge on various
					projects but it was time to introduce some mechanics to my projects and the first language I learned
					was JavaScript. I made a little game with it. After JavaScript, came powerful JavaScript library,
					React. I studied it for half a year and started my first project based on it, meanwhile I learned
					git and how to use Adobe XD. After creating the first project based on React I I started learning
					the Typescript and built this part of the website. When I finished I started to improve this page by
					making part of the 3D page. The project was based on React Three Fiber. For this project, I also had
					to learn Blender to recreate my idea in 3D.
				</p>
			</div>
			<div className={`container skill ${classContainer}`}>
				<span>Skill</span>
				<ul>
					<li>Very good knowledge of HTML5, CSS3 and JavaScript (ES6)</li>
					<li>Good knowledge of React 17</li>
					<li>Ability to build an application with React 17</li>
					<li>Ability to use the Git version control system</li>
					<li>Ability to use Sass</li>
					<li>Basic unit testing skills using the Jest framework and the Testing Library</li>
					<li>Ability to use TypeScript</li>
					<li>Basic knowledge of PHP and MySQL</li>
					<li>Basic design skills in Adobe XD</li>
					<li>Basic design skills in Blender</li>
					<li>Ability to use React Three Fiber</li>
					<li>Ability to use the tool: Webpack, Babel</li>
				</ul>
			</div>
			<img className="circle1" src={circles} alt="background element" />
			<img className="circle2" src={circles} alt="background element" />
			<img className="stairs1 stairs" src={stairs} alt="background element" />
			<img className="stairs2 stairs" src={stairs} alt="background element" />
		</div>
	);
}

export default AboutMe;
