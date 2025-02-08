import { useEffect } from "react";
import { useState } from "react";

const DigitalWatch = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	function formatTime() {
		let hr = time.getHours();
		let mintues = time.getMinutes();
		let seconds = time.getSeconds();
		const meridiem = hr >= 12 ? "pm" : "am";

		hr = hr % 12 || 12;
		return `${padZero(hr)}: ${padZero(mintues)}: ${padZero(seconds)} ${meridiem}`;
	}

	function padZero(number) {
		return (number < 10 ? "0" : "") + number;
	}

	return (
		<div>
			<div>
				<span>{formatTime()}</span>
			</div>
		</div>
	);
};

export default DigitalWatch;
