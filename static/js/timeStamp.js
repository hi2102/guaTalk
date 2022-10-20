const timeStamp = () => {
	const date = new Date();
	const hours = date.getHours();
	const minuites = date.getMinutes();
	const currentMin = String(minuites).padStart(2, "0");

	let currentTime = "";
	if (hours > 12) {
		const pm = `오후 ${hours - 12}`;
		currentTime = `${pm}:${currentMin}`;
	} else {
		const am = `오전 ${hours}`;
		currentTime = `${am}:${currentMin}`;
	}
	return currentTime;
};
