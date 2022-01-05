var blink_speed = 700;
var t1 = setInterval(function () {
	var ele = document.getElementById('blinker');
	ele.style.visibility = ele.style.visibility == 'hidden' ? '' : 'hidden';
}, blink_speed);