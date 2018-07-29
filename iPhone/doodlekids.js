
// Doodles by Lim Ding Wen (iPhone)

graphics(320,480);

var draw = false;
var tx;
var ty;
var shape;
var size;
var color = 0;

clearScreen(0);

// Register Events

document.body.ontouchstart = touchStart;
document.body.ontouchmove = touchMove;

// Handle Touch event

function touchStart(event) {
	event.preventDefault();
	var touches = event.targetTouches;
	
    tx = touches[0].pageX;
    ty = touches[0].pageY;
    
    if (touches.length == 2) {
		draw = false;
        clearScreen(0);
    }
	if (touches.length > 2) {
		draw = false;
		clearScreen(color);
		color = random(15) + 1;
	}
	if (touches.length == 1) {
        draw = true;
        shape = random(10);
        touchMove(event);
	}	
}

// Handle touch move event

function touchMove(event) {
	event.preventDefault();

    if (draw) {
        var touches = event.targetTouches;
		
        tx = touches[0].pageX;
        ty = touches[0].pageY;
        
		color = random(15) + 1;
        size = random(9) + 3;
		drawShape();
    }
}

// Draw shape

function drawShape() {
	setColor(color);
	
    switch (shape) {
		case 0:
			paintCircle(tx,ty,size);
			break;
		case 1:
			frameCircle(tx,ty,size);
			break;
		case 2:
			paintRect(tx,ty,size * 2,size * 2);
			break;
		case 3:
			frameRect(tx,ty,size * 2,size * 2);
			break;
		case 4:
			openPoly();
			moveTo(tx,ty);
			lineTo(tx - size,ty + size * 2);
			lineTo(tx + size,ty + size * 2);
			lineTo(tx,ty);
			paintPoly();
			break;
		case 5:
			openPoly();
			moveTo(tx,ty);
			lineTo(tx - size,ty + size * 2);
			lineTo(tx + size,ty + size * 2);
			lineTo(tx,ty);
			framePoly();
			break;
		case 6:
			line(tx,ty,tx + size,ty + size);
			break;
		case 7:
			line(tx,ty,tx - size,ty + size);
			break;
		case 8:
			openPoly();
			moveTo(tx,ty);
			lineTo(tx - size,ty + size);
			lineTo(tx,ty + size * 2);
			lineTo(tx + size,ty + size);
			lineTo(tx,ty);
			paintPoly();
			break;
		case 9:
			openPoly();
			moveTo(tx,ty);
			lineTo(tx - size,ty + size);
			lineTo(tx,ty + size * 2);
			lineTo(tx + size,ty + size);
			lineTo(tx,ty);
			framePoly();
			break;
	}
}