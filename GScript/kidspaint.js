/**
    Kids Paint - by Lim Thye Chean
**/

var draw = false;
var px;
var py;

graphics(640, 400);
clearScreen(0);

// Register events

onEvent("mousedown", startPaint);
onEvent("mousemove", paint);
onEvent("mouseup", endPaint);
onEvent("mouseout", endPaint);
onEvent("keydown", clearPaint);

// Start paint

function startPaint(event) {
    px = event.clientX;
    py = event.clientY;

    draw = true;
    setPenSize(random(15) + 5);
    setColor(random(15) + 1);
    paint(event);
}

// Paint

function paint(event) {
    if (draw) {
        x = event.clientX;
        y = event.clientY;

        line(px, py, x, y);
        px = x;
        py = y;
    }
}

// End paint

function endPaint(event) {
    draw = false;
}

// Clear paint

function clearPaint() {
	clearScreen(0);
}