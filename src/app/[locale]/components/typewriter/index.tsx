// components/TypewriterText.js
import { useEffect, useRef, useState } from 'react';

const Typewriter = ({ toRotate = [] as string[], period = 2000 }) => {
	const [text, setText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopNum, setLoopNum] = useState(0);
	// const [delta, setDelta] = useState(200 - Math.random() * 100);
	// const [delta, setDelta] = useState(100 - Math.random() * 50);
	const [delta, setDelta] = useState(20)
	const toRotateRef = useRef(toRotate);

	useEffect(() => {
		const handleTick = () => {
			const i = loopNum % toRotateRef.current.length;
			const fullText = toRotateRef.current[i];

			setText(prevText => {
				const updatedText = isDeleting
					? fullText.substring(0, prevText.length - 1)
					: fullText.substring(0, prevText.length + 1);
				return updatedText;
			});

			let updatedDelta = delta;

			if (isDeleting) {
				updatedDelta = 40; // super rápido
			} else {
				updatedDelta = 60; // rápido para digitar
			}

			if (!isDeleting && text === fullText) {
				setIsDeleting(true);
				updatedDelta = period;
			} else if (isDeleting && text === '') {
				setIsDeleting(false);
				setLoopNum(loopNum + 1);
				updatedDelta = 500;
			}

			setDelta(updatedDelta);
		};

		const timeout = setTimeout(handleTick, delta);
		return () => clearTimeout(timeout);
	}, [text, isDeleting, loopNum, delta, period]);

	return (
		<span className="typewrite">
			<span className="wrap">{text}</span>
		</span>
	);
};

export default Typewriter;
