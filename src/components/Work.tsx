import React, { useState } from 'react';

import '../styles/mobile/work.css';
import '../styles/desktop/work.css';
import WorkContainer from './WorkContainer';

import { IoArrowUndoSharp, IoArrowRedoSharp } from 'react-icons/io5';

function Work() {
	const [ classContainer2, setClassContainer2 ] = useState('');
	const [ classContainer3, setClassContainer3 ] = useState('');
	const [ classContainer4, setClassContainer4 ] = useState('');
	const [ classButtonLeft, setClassButtonLeft ] = useState('none');
	const [ classButtonRight, setClassButtonRight ] = useState('');

	const handleClickActiveContainer = () => {
		if (classContainer2 === '') {
			setClassContainer2('active');
			setClassButtonLeft('');
		}
		if (classContainer2 === 'active') {
			setClassContainer3('active2');
			setClassButtonRight('none'); //switch to the last slide
		}
		if (classContainer3 === 'active2') {
			setClassContainer4('active3');
		}
	};

	const handleClickInActiveContainer = () => {
		if (classContainer4 === 'active3') {
			setClassContainer4('');
		}

		if (classContainer4 === '') {
			setClassContainer3('');
			setClassButtonRight(''); //switch to the last slide
		}

		if (classContainer3 === '') {
			setClassContainer2('');
			setClassButtonLeft('none');
		}
	};

	return (
		<div className="work">
			<button className={classButtonLeft} onClick={handleClickInActiveContainer}>
				<IoArrowRedoSharp className="icon" />
			</button>
			<div className="containerOuter">
				<WorkContainer
					title={'Raport Game'}
					description={
						'A game of choosing whether the suspect is guilty or not. Created in pure JavaScript. It only works on the PC'
					}
					date={'January 2021'}
					isCodeOrWork={'work'}
					backgroundColor={'purple'}
					link={'https://materka11.github.io/Raport-Game/game.html'}
					classContainer={''}
				/>
				<WorkContainer
					title={'Clothing Store'}
					description={'Online store designed with React.'}
					date={'June 2022'}
					isCodeOrWork={'code'}
					backgroundColor={'white'}
					link={'https://github.com/Materka11/ClothingStore'}
					classContainer={classContainer2}
				/>
				<WorkContainer
					title={'This website'}
					description={'View the code of this website'}
					date={'July 2022'}
					isCodeOrWork={'code'}
					backgroundColor={'purple'}
					link={'https://github.com/Materka11/MyWholeWeb'}
					classContainer={classContainer3}
				/>
				{/* <WorkContainer
					title={'Clothing Store4'}
					description={'Online store designed with React.'}
					date={'June 2022'}
					isCodeOrWork={'code'}
					backgroundColor={'white'}
					link={'https://github.com/Materka11/ClothingStore'}
					classContainer={classContainer4}
				/>  */}
			</div>
			<button className={classButtonRight} onClick={handleClickActiveContainer}>
				<IoArrowUndoSharp className="icon" />
			</button>
		</div>
	);
}

export default Work;
