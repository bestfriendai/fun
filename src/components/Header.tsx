import React, { useEffect, useState, useRef } from 'react';
import logo from '../img/logo.png';
import background from '../img/Component 12 – 1@2x2.png';
import logoMenu from '../img/logoMenu.png';
import '../styles/mobile/header.css';
import '../styles/desktop/header.css';
import Menu from './Menu';

import { FiMessageCircle } from 'react-icons/fi';

import { useHasScrolled } from '../hooks/useHasScrolled';

interface NoScroll {
	setClassNoScroll: React.Dispatch<React.SetStateAction<string>>;
}

function Header({ setClassNoScroll }: NoScroll) {
	const [ xEye, setXEye ] = useState('');
	const [ yEye, setYEye ] = useState('');

	const [ xHead, setXHead ] = useState(0);
	const [ yHead, setYHead ] = useState(0);
	const [ rotXHead, setRotXHead ] = useState(0);
	const [ rotYHead, setRotYHead ] = useState(0);

	const eyesRef: any = useRef(null);

	const [ classMenu, setClassMenu ] = useState('inactive');
	const [ isToggledMenu, setIsToggledMenu ] = useState(false);
	const [ switchLogo, setSwitchLogo ] = useState(logo);
	const [ classNav, setClassNav ] = useState('');

	const [ classDotHome, setClassDotHome ] = useState('dot scrollDot');
	const [ classLineHome, setClassLineHome ] = useState('line');
	const [ classButtonHome, setClassButtonHome ] = useState('');

	const [ classDotAboutMe, setClassDotAboutMe ] = useState('dot');
	const [ classLineAboutMe, setClassLineAboutMe ] = useState('line');
	const [ classButtonAboutMe, setClassButtonAboutMe ] = useState('');

	const [ classDotWork, setClassDotWork ] = useState('dot');
	const [ classLineWork, setClassLineWork ] = useState('line');
	const [ classButtonWork, setClassButtonWork ] = useState('');

	const [ classDotContact, setClassDotContact ] = useState('dot');
	const [ classLineContact, setClassLineContact ] = useState('line');
	const [ classButtonContact, setClassButtonContact ] = useState('');

	useEffect(
		() => {
			const update = (e: MouseEvent) => {
				const { innerWidth, innerHeight } = window;
				const { clientX, clientY } = e;

				if (innerWidth >= 1440) {
					setXEye(clientX * 100 / innerWidth + '%');
					setYEye(clientY * 100 / innerHeight + '%');

					setXHead((xHead) => xHead + (clientX - xHead) * 0.15);
					setYHead((yHead) => yHead + (clientY - yHead) * 0.15);
					setRotXHead(xHead / innerWidth * -2 + 1);
					setRotYHead(yHead / innerHeight * 2 - 1);
				}
			};
			window.addEventListener('mousemove', update);

			return () => {
				window.removeEventListener('mousemove', update);
			};
		},
		[ xEye, yEye ]
	);

	// console.log(
	// 	Math.round(
	// 		(document.documentElement.scrollTop + document.documentElement.clientHeight) /
	// 			document.documentElement.scrollHeight *
	// 			1000
	// 	)
	// );

	//between header and about me
	const scrollHeaderHome = useHasScrolled(276);
	const scrollHeaderAboutMe = useHasScrolled(265);
	const scrollHeaderWork = useHasScrolled(252);
	const scrollHeaderContact = useHasScrolled(240);

	const scrollHeaderNav = useHasScrolled(454);

	//between about me and work
	const scrollAboutMeHome = useHasScrolled(533);
	const scrollAboutMeAboutMe = useHasScrolled(523);
	const scrollAboutMeWork = useHasScrolled(510);
	const scrollAboutMeContact = useHasScrolled(498);

	const scrollAboutMeNav = useHasScrolled(684);

	//between work and contact
	const scrollWorkHome = useHasScrolled(761);
	const scrollWorkAboutMe = useHasScrolled(750);
	const scrollWorkWork = useHasScrolled(737);
	const scrollWorkContact = useHasScrolled(725);

	const scrollWorkNav = useHasScrolled(906);

	//between contact and footer
	const scrollContactHome = useHasScrolled(988);
	const scrollContactAboutMe = useHasScrolled(977);
	const scrollContactWork = useHasScrolled(964);
	const scrollContactContact = useHasScrolled(952);

	useEffect(
		() => {
			const { innerWidth } = window;

			if (innerWidth >= 1440) {
				//between header and about me
				if (scrollHeaderHome) {
					setClassDotHome('dot colorDot');
					setClassLineHome('line colorLine');
					setClassButtonHome('colorButton');
				} else if (!scrollHeaderHome) {
					setClassDotHome('dot scrollDot');
					setClassLineHome('line');
					setClassButtonHome('');
				}

				if (scrollHeaderAboutMe) {
					setClassDotAboutMe('dot scrollDotColor');
					setClassLineAboutMe('line colorLine');
					setClassButtonAboutMe('colorButton');
				} else if (!scrollHeaderAboutMe) {
					setClassDotAboutMe('dot');
					setClassLineAboutMe('line ');
					setClassButtonAboutMe('');
				}

				if (scrollHeaderWork) {
					setClassDotWork('dot colorDot');
					setClassLineWork('line colorLine');
					setClassButtonWork('colorButton');
				} else if (!scrollHeaderAboutMe) {
					setClassDotWork('dot');
					setClassLineWork('line ');
					setClassButtonWork('');
				}

				if (scrollHeaderContact) {
					setClassDotContact('dot colorDot');
					setClassLineContact('line colorLine');
					setClassButtonContact('colorButton');
				} else if (!scrollHeaderContact) {
					setClassDotContact('dot');
					setClassLineContact('line ');
					setClassButtonContact('');
				}

				if (scrollHeaderNav) {
					setSwitchLogo(logoMenu);
					setClassNav('white');
				} else if (!scrollHeaderNav) {
					setSwitchLogo(logo);
					setClassNav('');
				}

				//between about me and work
				if (scrollAboutMeHome) {
					setClassDotHome('dot');
					setClassLineHome('line');
					setClassButtonHome('');
				}

				if (scrollAboutMeAboutMe) {
					setClassDotAboutMe('dot');
					setClassLineAboutMe('line');
					setClassButtonAboutMe('');
				}

				if (scrollAboutMeWork) {
					setClassDotWork('dot scrollDot');
					setClassLineWork('line');
					setClassButtonWork('');
				}

				if (scrollAboutMeContact) {
					setClassDotContact('dot');
					setClassLineContact('line');
					setClassButtonContact('');
				}

				if (scrollAboutMeNav) {
					setSwitchLogo(logo);
					setClassNav('');
				}

				//between work and contact
				if (scrollWorkHome) {
					setClassDotHome('dot colorDot');
					setClassLineHome('line colorLine');
					setClassButtonHome('colorButton');
				}

				if (scrollWorkAboutMe) {
					setClassDotAboutMe('dot colorDot');
					setClassLineAboutMe('line colorLine');
					setClassButtonAboutMe('colorButton');
				}

				if (scrollWorkWork) {
					setClassDotWork('dot colorDot');
					setClassLineWork('line colorLine');
					setClassButtonWork('colorButton');
				}

				if (scrollWorkContact) {
					setClassDotContact('dot scrollDotColor');
					setClassLineContact('line colorLine');
					setClassButtonContact('colorButton');
				}

				if (scrollWorkNav) {
					setSwitchLogo(logoMenu);
					setClassNav('white');
				}

				//between contact and footer
				if (scrollContactHome) {
					setClassDotHome('dot');
					setClassLineHome('line');
					setClassButtonHome('');
				}

				if (scrollContactAboutMe) {
					setClassDotAboutMe('dot');
					setClassLineAboutMe('line');
					setClassButtonAboutMe('');
				}

				if (scrollContactWork) {
					setClassDotWork('dot');
					setClassLineWork('line');
					setClassButtonWork('');
				}

				if (scrollContactContact) {
					setClassDotContact('dot');
					setClassLineContact('line');
					setClassButtonContact('');
				}
			}
		},
		[ document.documentElement.scrollTop ]
	);

	const styleEyes = {
		left: xEye,
		top: yEye,
		transform: `translate(-${xEye}, -${yEye})`
	};

	const styleHead = {
		transform:
			'rotateX(calc(-15deg * ' + rotXHead + '))  rotateY(calc(-15deg * ' + rotYHead + ')) translate(-50%, 0)'
	};

	const styleShadow = {
		boxShadow: `${rotXHead * 50}px ${rotYHead * -50}px 20px 0px rgba(66, 68, 90, 0.50)`
	};

	const handleClickMenu = () => {
		if (!isToggledMenu) {
			setClassMenu('active');
			setIsToggledMenu(true);
			setClassNoScroll('noScroll');
			setSwitchLogo(logoMenu);
			setClassNav('navMenu');
		} else {
			setClassMenu('inactive');
			setIsToggledMenu(false);
			setClassNoScroll('');
			setSwitchLogo(logo);
			setClassNav('');
		}
	};

	const scrollToComponent = (value: number) => {
		const { innerHeight, scrollTo } = window;
		setTimeout(() => {
			scrollTo({
				top: innerHeight * value + 100,
				behavior: 'smooth'
			});
		}, 0);
	};

	return (
		<div className="header">
			<nav className={classNav}>
				<img src={switchLogo} alt="logo" />
				<hr />
				<span className="spanMenu" onClick={handleClickMenu}>
					<span className="spanLink">CLOSE</span>
					<span className="spanLink menuSpan">MENU</span>
				</span>
				<FiMessageCircle className="icon" />
				<a href="mailto:arekmaterka11@gmail.com?subject=Hi Arek, I'd like to say hello">SAY HELLO</a>
			</nav>
			<div className="bust">
				<div style={styleHead} className="head">
					<div style={styleShadow} className="hair" />
					<div className="face">
						<div className="eyebrows left" />
						<div className="eyebrows right" />
						<div className={`eyes left`}>
							<div ref={eyesRef} style={styleEyes} className="ball" />
						</div>
						<div className={`eyes right`}>
							<div ref={eyesRef} style={styleEyes} className="ball" />
						</div>
						<div className="lowerEyelid left" />
						<div className="lowerEyelid right" />
						<div className="nose" />
						<div className="mouth" />
					</div>

					<div className="ears left">
						<div className="line" />
					</div>
					<div className="ears right">
						<div className="line" />
					</div>
					<div className="neck left" />
					<div className="neck right" />
					<div style={styleShadow} className="face shadow" />
					<div style={styleShadow} className="body" />
				</div>
			</div>
			<img className="background" src={background} alt="background" />
			<span className="name">
				<strong className="hi">Hi, my</strong> name is <strong>Arek</strong>
				<span className="description">
					I'm a <strong>self-taught frontend developer</strong> from Pomorskie, Poland.
				</span>
			</span>
			<span className="scroll" />
			<div className="scroll" />
			<div className="menuDesktop">
				<span className="headerMenu">MENU</span>
				<div className="menuDesktopFixed">
					<div className="subMenu">
						<div className={classDotHome} />
						<div className={classLineHome} />
						<button className={classButtonHome} onClick={() => scrollToComponent(0 - 100)}>
							Home
						</button>
					</div>
					<div className="subMenu">
						<div className={classDotAboutMe} />
						<div className={classLineAboutMe} />
						<button className={classButtonAboutMe} onClick={() => scrollToComponent(1)}>
							About Me
						</button>
					</div>
					<div className="subMenu">
						<div className={classDotWork} />
						<div className={classLineWork} />
						<button className={classButtonWork} onClick={() => scrollToComponent(2)}>
							Work
						</button>
					</div>
					<div className="subMenu">
						<div className={classDotContact} />
						<div className={classLineContact} />
						<button className={classButtonContact} onClick={() => scrollToComponent(3)}>
							Contact
						</button>
					</div>
				</div>
			</div>
			<Menu classMenu={classMenu} handleClickMenu={handleClickMenu} scrollToComponent={scrollToComponent} />
		</div>
	);
}

export default Header;
