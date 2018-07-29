/**
   Doodle - by Lim Thye Chean
**/

graphics(320, 420);

// Register events

document.body.ontouchstart = touchStart;
document.body.ontouchmove = touchMove;

// Handle touch start event

function touchStart(event) {
	clearScreen();
	touchMove(event);
}

// Handle touch move event

function touchMove(event) {
	event.preventDefault();

	var touches = event.targetTouches;

	for (var i = 0; i < touches.length; i++) {
        setColor([random(255), random(255), random(255)]);
        paintCircle(touches[i].pageX, touches[i].pageY, random(10) + 1);
	}
}