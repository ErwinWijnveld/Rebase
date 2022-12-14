import { Expo, gsap } from 'gsap';
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

// Gsap Ticker Function
function useTicker(callback: any, paused: any) {
	useEffect(() => {
		if (!paused && callback) {
			gsap.ticker.add(callback);
		}
		return () => {
			gsap.ticker.remove(callback);
		};
	}, [callback, paused]);
}

const EMPTY = {};
function useInstance(value = {}) {
	const ref = useRef(EMPTY);
	if (ref.current === EMPTY) {
		ref.current = typeof value === 'function' ? value() : value;
	}
	return ref.current;
}

// Function for Mouse Move Scale Change
function getScale(diffX: any, diffY: any) {
	const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
	return Math.min(distance / 735, 0.35);
}

// Function For Mouse Movement Angle in Degrees
function getAngle(diffX: any, diffY: any) {
	return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

// Jelly Blob Function
const JellyBlob = () => {
	// React Refs for Jelly Blob and Text
	const jellyRef = useRef(null);
	const textRef = useRef(null);

	// Save pos and velocity Objects
	const pos = useInstance(() => ({ x: 0, y: 0 })) as any;
	const vel = useInstance(() => ({ x: 0, y: 0 })) as any;
	const set = useInstance() as any;

	// Set GSAP quick setter Values on useLayoutEffect Update
	useEffect(() => {
		set.x = gsap.quickSetter(jellyRef.current, 'x', 'px');
		set.y = gsap.quickSetter(jellyRef.current, 'y', 'px');
		set.r = gsap.quickSetter(jellyRef.current, 'rotate', 'deg');
		set.sx = gsap.quickSetter(jellyRef.current, 'scaleX');
		set.sy = gsap.quickSetter(jellyRef.current, 'scaleY');
		set.width = gsap.quickSetter(jellyRef.current, 'width', 'px');
		set.rt = gsap.quickSetter(textRef.current, 'rotate', 'deg');
	}, []);

	// Start Animation loop
	const loop = useCallback(() => {
		// Calculate angle and scale based on velocity
		var rotation = getAngle(vel.x, vel.y); // Mouse Move Angle
		var scale = getScale(vel.x, vel.y); // Blob Squeeze Amount

		// Set GSAP quick setter Values on Loop Function
		set.x(pos.x);
		set.y(pos.y);
		set.width(300 + scale);
		set.r(rotation);
		set.sx(1 + scale / 3.5);
		set.sy(1 - scale / 3.5);
		set.rt(-rotation);
	}, []);

	// Run on Mouse Move
	useEffect(() => {
		// Caluclate Everything Function
		const setFromEvent = (e: any) => {
			// Mouse X and Y
			const x = e.clientX;
			const y = e.clientY;

			// Animate Position and calculate Velocity with GSAP
			gsap.to(pos, {
				x: x,
				y: y,
				duration: 6,
				ease: Expo.easeOut,
				onUpdate: () => {
					vel.x = x - pos.x;
					vel.y = y - pos.y;
				},
			});

			loop();
		};

		window.addEventListener('mousemove', setFromEvent);
		return () => {
			window.removeEventListener('mousemove', setFromEvent);
		};
	}, []);

	useTicker(loop, false);

	// Return UI
	return (
		<div ref={jellyRef} id={'jelly-id'} className="jelly-blob -z-10"></div>
	);
};

const FollowBlur = () => {
	return <JellyBlob />;
};
export default FollowBlur;
