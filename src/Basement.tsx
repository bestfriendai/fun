import * as THREE from 'three';
import React, { useRef, useMemo, useLayoutEffect, useState, useEffect } from 'react';
import { useGLTF, useAnimations, useBounds } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import page from './img/boreddev.gif';
import desktop from './img/pulpit.png';
import { useLoader } from '@react-three/fiber';
import { Howl } from 'howler';
import { useNavigate, Link } from 'react-router-dom';

type GLTFResult = GLTF & {
	nodes: {
		CC_Base_Body003: THREE.SkinnedMesh;
		CC_Base_Eye003: THREE.SkinnedMesh;
		CC_Base_EyeOcclusion003: THREE.SkinnedMesh;
		CC_Base_TearLine003: THREE.SkinnedMesh;
		CC_Base_Teeth003: THREE.SkinnedMesh;
		CC_Base_Tongue003: THREE.SkinnedMesh;
		Jeans003: THREE.SkinnedMesh;
		Male_Bushy003: THREE.SkinnedMesh;
		Short_blowback003: THREE.SkinnedMesh;
		Spaghetti_strap_Top003: THREE.SkinnedMesh;
		Bang001: THREE.SkinnedMesh;
		Biker_Jeans001: THREE.SkinnedMesh;
		Boxers001: THREE.SkinnedMesh;
		Bun001: THREE.SkinnedMesh;
		CC_Base_Body001: THREE.SkinnedMesh;
		CC_Base_Eye001: THREE.SkinnedMesh;
		CC_Base_EyeOcclusion001: THREE.SkinnedMesh;
		CC_Base_TearLine001: THREE.SkinnedMesh;
		CC_Base_Teeth001: THREE.SkinnedMesh;
		CC_Base_Tongue001: THREE.SkinnedMesh;
		Female_Angled001: THREE.SkinnedMesh;
		Hair_Base001: THREE.SkinnedMesh;
		Real_Hair001: THREE.SkinnedMesh;
		UpDown: THREE.Mesh;
		Screw9: THREE.Mesh;
		Screw8: THREE.Mesh;
		Screw7: THREE.Mesh;
		Screw6: THREE.Mesh;
		Screw11: THREE.Mesh;
		Screw10: THREE.Mesh;
		Screw: THREE.Mesh;
		Pipe_UpDown_control: THREE.Mesh;
		Pipe_UpDown: THREE.Mesh;
		Pipe_holder: THREE.Mesh;
		Metal_pipe_control: THREE.Mesh;
		Metal_Holder: THREE.Mesh;
		Mechanisim_b: THREE.Mesh;
		Mechanisim: THREE.Mesh;
		Chair_Wheel4: THREE.Mesh;
		Chair_Wheel3: THREE.Mesh;
		Chair_Wheel2: THREE.Mesh;
		Chair_Wheel1: THREE.Mesh;
		Chair_Wheel: THREE.Mesh;
		Chair_Sit: THREE.Mesh;
		Chair_Back: THREE.Mesh;
		Button: THREE.Mesh;
		Holder: THREE.Mesh;
		Cube001: THREE.Mesh;
		top: THREE.Mesh;
		sides_right: THREE.Mesh;
		side_left: THREE.Mesh;
		legs: THREE.Mesh;
		handle01: THREE.Mesh;
		handle: THREE.Mesh;
		drawer_supports: THREE.Mesh;
		drawer: THREE.Mesh;
		door: THREE.Mesh;
		bottom: THREE.Mesh;
		back_support: THREE.Mesh;
		back: THREE.Mesh;
		Monitor: THREE.Mesh;
		LED_TV: THREE.Mesh;
		Klavesnice: THREE.Mesh;
		Wheel: THREE.Mesh;
		Top: THREE.Mesh;
		Base: THREE.Mesh;
		mixamorigHips: THREE.Bone;
		mixamorigHips_1: THREE.Bone;
	};
	materials: {
		hologram: THREE.MeshStandardMaterial;
		['hologram hair']: THREE.MeshStandardMaterial;
		['hologram alternative hair']: THREE.MeshStandardMaterial;
		['hologram alternative']: THREE.MeshStandardMaterial;
	};
	animations: GLTFAction[];
};

type ActionName = 'Typing (5)|A|Layer0' | 'Armature|mixamo.com|Layer0.001';
interface GLTFAction extends THREE.AnimationClip {
	name: ActionName;
}

export function Basement(props: JSX.IntrinsicElements['group'] ) {
	const group = useRef<THREE.Group>(null);
	const { nodes, materials, animations, scene } = useGLTF(
		'/myProjectWebHologramDecimate-processed.glb'
	) as GLTFResult;
	const { actions } = useAnimations(animations, group);
	const pageImg = useLoader(THREE.TextureLoader, page);
	const desktopImg = useLoader(THREE.TextureLoader, desktop);

	// useMemo(() => scene.traverse((obj) => (obj.frustumCulled = false)), [ scene ]);

	const api = useBounds();

	const [ isVisible, setIsVisible ] = useState(false);

	const hologram = new Howl({
		src: [require('./assets/audio/hologramEffectEren.mp3')],
		volume: 0.4,
	});

	const eren = new Howl({
		src: [require('./assets/audio/Eren Tatakae Sound.mp3')],
		volume: 0.5,
	})

	useLayoutEffect(() => {
		actions['Typing (5)|A|Layer0']?.play();
		setTimeout(() => actions['Armature|mixamo.com|Layer0.001']?.play(), 60000)
		const startAnimation = setTimeout(() => {
			setIsVisible(true);
			hologram.play();
			eren.play();
		}, 77000);
		const endAnimation = setTimeout(() => {
			setIsVisible(false);
			actions['Armature|mixamo.com|Layer0.001']?.stop()
		}, 80400);
		return () => {
			clearTimeout(startAnimation);
			clearTimeout(endAnimation)
		}
	}, [actions]);

	//hover on monitor
	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		document.body.style.cursor = hovered ? 'pointer' : 'auto'
	  }, [hovered])
	  
	let navigate = useNavigate();

	const handleClickMonitor = (e : any) => {
		e.stopPropagation(); e.delta <= 2 && api.refresh(e.object).fit();
		setTimeout(() => {
			navigate('/main');
			navigate(0)
		}, 1250)
	}

	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Scene" frustumCulled={false} scale={1000}>
				<group
					name="Typing_(5)"
					position={[ -0.03, -0.01, 0.57 ]}
					rotation={[ Math.PI / 2, 0, -3.04 ]}
					scale={0.01}
				>
					<primitive object={nodes.mixamorigHips} />
					<skinnedMesh
						name="CC_Base_Body003"
						geometry={nodes.CC_Base_Body003.geometry}
						material={materials.hologram}
						skeleton={nodes.CC_Base_Body003.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="CC_Base_Eye003"
						geometry={nodes.CC_Base_Eye003.geometry}
						material={materials.hologram}
						skeleton={nodes.CC_Base_Eye003.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="CC_Base_EyeOcclusion003"
						geometry={nodes.CC_Base_EyeOcclusion003.geometry}
						material={materials.hologram}
						skeleton={nodes.CC_Base_EyeOcclusion003.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="CC_Base_TearLine003"
						geometry={nodes.CC_Base_TearLine003.geometry}
						material={materials.hologram}
						skeleton={nodes.CC_Base_TearLine003.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="CC_Base_Teeth003"
						geometry={nodes.CC_Base_Teeth003.geometry}
						material={materials.hologram}
						skeleton={nodes.CC_Base_Teeth003.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="CC_Base_Tongue003"
						geometry={nodes.CC_Base_Tongue003.geometry}
						material={materials.hologram}
						skeleton={nodes.CC_Base_Tongue003.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="Jeans003"
						geometry={nodes.Jeans003.geometry}
						material={materials.hologram}
						skeleton={nodes.Jeans003.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="Male_Bushy003"
						geometry={nodes.Male_Bushy003.geometry}
						material={materials.hologram}
						skeleton={nodes.Male_Bushy003.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="Short_blowback003"
						geometry={nodes.Short_blowback003.geometry}
						material={materials['hologram hair']}
						skeleton={nodes.Short_blowback003.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="Spaghetti_strap_Top003"
						geometry={nodes.Spaghetti_strap_Top003.geometry}
						material={materials.hologram}
						skeleton={nodes.Spaghetti_strap_Top003.skeleton}
						frustumCulled={false}
					/>
				</group>
				<group
					name="Armature"
					position={[ 0.72, 0, 0.44 ]}
					rotation={[ Math.PI / 2, 0, 1.51 ]}
					scale={0.01}
					visible={isVisible}
				>
					<primitive object={nodes.mixamorigHips_1} />
					<skinnedMesh
						name="Bang001"
						geometry={nodes.Bang001.geometry}
						material={materials['hologram alternative hair']}
						skeleton={nodes.Bang001.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="Biker_Jeans001"
						geometry={nodes.Biker_Jeans001.geometry}
						material={materials['hologram alternative']}
						skeleton={nodes.Biker_Jeans001.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="Boxers001"
						geometry={nodes.Boxers001.geometry}
						material={materials['hologram alternative']}
						skeleton={nodes.Boxers001.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="Bun001"
						geometry={nodes.Bun001.geometry}
						material={materials['hologram alternative hair']}
						skeleton={nodes.Bun001.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="CC_Base_Body001"
						geometry={nodes.CC_Base_Body001.geometry}
						material={materials['hologram alternative']}
						skeleton={nodes.CC_Base_Body001.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="CC_Base_Eye001"
						geometry={nodes.CC_Base_Eye001.geometry}
						material={materials['hologram alternative']}
						skeleton={nodes.CC_Base_Eye001.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="CC_Base_EyeOcclusion001"
						geometry={nodes.CC_Base_EyeOcclusion001.geometry}
						material={materials['hologram alternative']}
						skeleton={nodes.CC_Base_EyeOcclusion001.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="CC_Base_TearLine001"
						geometry={nodes.CC_Base_TearLine001.geometry}
						material={materials['hologram alternative']}
						skeleton={nodes.CC_Base_TearLine001.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="CC_Base_Teeth001"
						geometry={nodes.CC_Base_Teeth001.geometry}
						material={materials['hologram alternative']}
						skeleton={nodes.CC_Base_Teeth001.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="CC_Base_Tongue001"
						geometry={nodes.CC_Base_Tongue001.geometry}
						material={materials['hologram alternative']}
						skeleton={nodes.CC_Base_Tongue001.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="Female_Angled001"
						geometry={nodes.Female_Angled001.geometry}
						material={materials['hologram alternative']}
						skeleton={nodes.Female_Angled001.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="Hair_Base001"
						geometry={nodes.Hair_Base001.geometry}
						material={materials['hologram alternative hair']}
						skeleton={nodes.Hair_Base001.skeleton}
						frustumCulled={false}
					/>
					<skinnedMesh
						name="Real_Hair001"
						geometry={nodes.Real_Hair001.geometry}
						material={materials['hologram alternative hair']}
						skeleton={nodes.Real_Hair001.skeleton}
						frustumCulled={false}
					/>
				</group>
				<mesh
					name="UpDown"
					geometry={nodes.UpDown.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Screw9"
					geometry={nodes.Screw9.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Screw8"
					geometry={nodes.Screw8.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Screw7"
					geometry={nodes.Screw7.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Screw6"
					geometry={nodes.Screw6.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Screw11"
					geometry={nodes.Screw11.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Screw10"
					geometry={nodes.Screw10.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Screw"
					geometry={nodes.Screw.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Pipe_UpDown_control"
					geometry={nodes.Pipe_UpDown_control.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Pipe_UpDown"
					geometry={nodes.Pipe_UpDown.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Pipe_holder"
					geometry={nodes.Pipe_holder.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Metal_pipe_control"
					geometry={nodes.Metal_pipe_control.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Metal_Holder"
					geometry={nodes.Metal_Holder.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Mechanisim_b"
					geometry={nodes.Mechanisim_b.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Mechanisim"
					geometry={nodes.Mechanisim.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Chair_Wheel4"
					geometry={nodes.Chair_Wheel4.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Chair_Wheel3"
					geometry={nodes.Chair_Wheel3.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Chair_Wheel2"
					geometry={nodes.Chair_Wheel2.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Chair_Wheel1"
					geometry={nodes.Chair_Wheel1.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Chair_Wheel"
					geometry={nodes.Chair_Wheel.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Chair_Sit"
					geometry={nodes.Chair_Sit.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Chair_Back"
					geometry={nodes.Chair_Back.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Button"
					geometry={nodes.Button.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Holder"
					geometry={nodes.Holder.geometry}
					material={materials.hologram}
					position={[ -0.04, 0, 0.56 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 0.68, 1 ]}
				/>
				<mesh
					name="Cube001"
					geometry={nodes.Cube001.geometry}
					material={materials.hologram}
					position={[ -0.75, 0, -0.18 ]}
				/>
				<mesh
					name="top"
					geometry={nodes.top.geometry}
					material={materials.hologram}
					position={[ 0.02, 0.73, -0.16 ]}
					rotation={[ 0, 0.03, 0 ]}
					scale={[ 1.03, 0.96, 1 ]}
				/>
				<mesh
					name="sides_right"
					geometry={nodes.sides_right.geometry}
					material={materials.hologram}
					position={[ 0.63, 0.37, -0.19 ]}
					rotation={[ 0, 0.03, 0 ]}
					scale={[ 1.03, 0.59, 0.97 ]}
				/>
				<mesh
					name="side_left"
					geometry={nodes.side_left.geometry}
					material={materials.hologram}
					position={[ -0.58, 0.36, -0.15 ]}
					rotation={[ 0, 0.03, 0 ]}
					scale={[ 1.03, 0.59, 0.97 ]}
				/>
				<mesh
					name="legs"
					geometry={nodes.legs.geometry}
					material={materials.hologram}
					position={[ 0.27, 0, 0.06 ]}
					rotation={[ 0, 0.03, 0 ]}
					scale={[ 1.03, 0.96, 1 ]}
				/>
				<mesh
					name="handle01"
					geometry={nodes.handle01.geometry}
					material={materials.hologram}
					position={[ 0.44, 0.51, 0.11 ]}
					rotation={[ 0, 0.03, 0 ]}
					scale={[ 1.03, 0.96, 1 ]}
				/>
				<mesh
					name="handle"
					geometry={nodes.handle.geometry}
					material={materials.hologram}
					position={[ 0.44, 0.66, 0.11 ]}
					rotation={[ 0, 0.03, 0 ]}
					scale={[ 1.03, 0.96, 1 ]}
				/>
				<mesh
					name="drawer_supports"
					geometry={nodes.drawer_supports.geometry}
					material={materials.hologram}
					position={[ 0.43, 0.56, -0.19 ]}
					rotation={[ 0, 0.03, 0 ]}
					scale={[ 1.03, 0.96, 1 ]}
				/>
				<mesh
					name="drawer"
					geometry={nodes.drawer.geometry}
					material={materials.hologram}
					position={[ 0.44, 0.64, 0.09 ]}
					rotation={[ 0, 0.03, 0 ]}
					scale={[ 1.03, 0.96, 1 ]}
				/>
				<mesh
					name="door"
					geometry={nodes.door.geometry}
					material={materials.hologram}
					position={[ 0.44, 0.29, 0.09 ]}
					rotation={[ 0, 0.03, 0 ]}
					scale={[ 1.03, 0.96, 1 ]}
				/>
				<mesh
					name="bottom"
					geometry={nodes.bottom.geometry}
					material={materials.hologram}
					position={[ 0.43, 0.02, -0.18 ]}
					rotation={[ 0, 0.03, 0 ]}
					scale={[ 1.03, 0.96, 1 ]}
				/>
				<mesh
					name="back_support"
					geometry={nodes.back_support.geometry}
					material={materials.hologram}
					position={[ -0.18, 0.61, -0.4 ]}
					rotation={[ 0, 0.03, 0 ]}
					scale={[ 1.03, 0.99, 1 ]}
				/>
				<mesh
					name="back"
					geometry={nodes.back.geometry}
					material={materials.hologram}
					position={[ 0.42, 0.37, -0.45 ]}
					rotation={[ 0, 0.03, 0 ]}
					scale={[ 1.03, 0.96, 1 ]}
				/>
				<mesh
					name="Monitor"
					geometry={nodes.Monitor.geometry}
					material={materials.hologram}
					position={[ -0.18, 0.73, -0.29 ]}
					onClick={handleClickMonitor}
					onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}
					onPointerOver={() => setHovered(true)}
					onPointerOut={() => setHovered(false)}
				/>
				
				<mesh position={[ -0.18, 1, -0.24 ]} rotation={[ -0.05, 0, 0 ]}>
					<planeBufferGeometry attach="geometry" args={[ 0.6, 0.35 ]} />
					<meshBasicMaterial attach="material" map={pageImg} />
				</mesh>
				<mesh
					name="LED_TV"
					geometry={nodes.LED_TV.geometry}
					material={materials.hologram}
					position={[ 0.46, 0.73, -0.18 ]}
					rotation={[ 0, -0.46, 0 ]}
					
				/>
				<mesh position={[ .45, 1, -.164 ]} rotation={[ 0, -.46, 0 ]}>
					<planeBufferGeometry attach="geometry" args={[ 0.57, 0.33 ]} />
					<meshBasicMaterial attach="material" map={desktopImg} />
				</mesh>
				<mesh
					name="Klavesnice"
					geometry={nodes.Klavesnice.geometry}
					material={materials.hologram}
					position={[ -0.04, 0.73, -0.02 ]}
					rotation={[ 0, -1.55, 0 ]}
				/>
				<mesh
					name="Wheel"
					geometry={nodes.Wheel.geometry}
					material={materials.hologram}
					position={[ 0.31, 0.76, -0.04 ]}
					rotation={[ 1.26, 0, 3.14 ]}
					scale={[ 1, 1.34, 1.66 ]}
				/>
				<mesh
					name="Top"
					geometry={nodes.Top.geometry}
					material={materials.hologram}
					position={[ 0.31, 0.77, 0 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 1.69, 1.3 ]}
				/>
				<mesh
					name="Base"
					geometry={nodes.Base.geometry}
					material={materials.hologram}
					position={[ 0.31, 0.75, 0 ]}
					rotation={[ Math.PI, 0, Math.PI ]}
					scale={[ 1, 1.69, 1.3 ]}
				/>
			</group>
		</group>
	);
}

export default Basement;
