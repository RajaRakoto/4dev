// When the user clicks on div, open the notif
const declanche = document.querySelector('.notify');

function notification() {
	let myNotif = document.getElementById('my-notify');
	myNotif.classList.toggle('show');
}

declanche.addEventListener('click', () => {
	notification();
});
