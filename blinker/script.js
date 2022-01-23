let blink_speed = 700;
let t1 = setInterval(function () {
	let ele = document.getElementById('blinker');
	ele.style.visibility = ele.style.visibility == 'hidden' ? '' : 'hidden';
}, blink_speed);