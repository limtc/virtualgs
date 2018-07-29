/**
    Kids Paint - by Lim Thye Chean
**/

var draw = false;
var px;
var py;

graphics(320, 420);

// Register events

document.body.ontouchstart = touchStart;
document.body.ontouchmove = touchMove;
document.body.ongestureend = gestureEnd;

// Handle touch start event

function touchStart(event) {
	event.preventDefault();

	var touches = event.targetTouches;

	if (touches.length > 1) {
		draw = false;
		clearScreen();
	}
	else {
		px = touches[0].pageX;
		py = touches[0].pageY;

        draw = true;
        setPenSize(random(15) + 5);
        setColor(random(15) + 1);
        touchMove(event);
	}
}

// Handle touch move event

function touchMove(event) {
	event.preventDefault();

    if (draw) {
        var touches = event.targetTouches;
        var x = touches[0].pageX;
        var y = touches[0].pageY;

        line(px, py, x, y);
        px = x;
        py = y;
    }
}

// Handle gesture end event

function gestureEnd(event) {
	scale = event.scale;
	
	if (scale > 1) {
		setRadialGradient(160, 182, 50, 100 * scale, random(15) + 1, 0);
		paintRect(0, 0, 640, 400);
	}
	else if (scale < 1) {
		setRadialGradient(160, 182, 100 * scale, 320, 0, random(15) + 1);
		paintRect(0, 0, 640, 400);
	}
	
    drawPalette();
}