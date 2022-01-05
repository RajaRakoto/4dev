const card = document.querySelectorAll('.card');
let delay = 0;

card.forEach(el => {
	el.style.animation =
		'slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
	el.style.animationDelay = delay + 's';
	delay += 0.2;
});
