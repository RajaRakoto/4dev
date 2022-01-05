//sleep (to test preloader)
const sleep = ms => {
	const date = Date.now();
	let currentDate = null;

	do {
		currentDate = Date.now();
	} while (currentDate - date < ms);
};

//preloader
const loader = document.getElementById('preloader');
window.addEventListener('load', () => {
    sleep(1000); //3s
	loader.style.display = 'none';
});

