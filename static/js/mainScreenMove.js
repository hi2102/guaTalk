const screenContainer = document.querySelector(".mainScreenContainer");
const guaTalk = document.querySelector(".guaTalk_body");

let lastX = 0;
let lastY = 0;
let startX = 0;
let startY = 0;

guaTalk.addEventListener("mousedown", function (e) {
	// e.preventDefault();
	startX = e.clientX;
	startY = e.clientY;
	guaTalk.classList.add("active");
	document.addEventListener("mouseup", onRemoveEvent);
	document.addEventListener("mousemove", onMove);
});

function onRemoveEvent() {
	guaTalk.classList.remove("active");
	document.removeEventListener("mouseup", onRemoveEvent);
	document.removeEventListener("mousemove", onMove);
}

function onMove(e) {
	e.preventDefault();
	lastX = startX - e.clientX;
	lastY = startY - e.clientY;

	startX = e.clientX;
	startY = e.clientY;

	screenContainer.style.top = `${screenContainer.offsetTop - lastY}px`;
	screenContainer.style.left = `${screenContainer.offsetLeft - lastX}px`;
}
