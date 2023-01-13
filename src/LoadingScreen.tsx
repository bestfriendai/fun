import React, { useState } from 'react';

import { Howl } from 'howler';

function LoadingScreen() {
	const [ classLoadingScreen, setClassLoadingScreen ] = useState('loadingScreen');

	//robot sound
	const start = new Howl({
		src: [ require('./assets/audio/sci-fi-voiceclip-896-sound-effect-53424073.mp3') ],
		volume: 1
	});

	//hologram sound
	const hologram = new Howl({
		src: [ require('./assets/audio/hologramEffectMain.mp3') ],
		volume: 0.2,
		loop: true
	});

	const handleClickStart = () => {
		if (!start.playing()) start.play();
		setTimeout(() => {
			hologram.play();
			setClassLoadingScreen('none3D');
		}, 2000);
	};
	return (
		<div className={classLoadingScreen}>
			<button className="start" onClick={handleClickStart}>
				EXIT THE MATRIX
			</button>
		</div>
	);
}

export default LoadingScreen;
