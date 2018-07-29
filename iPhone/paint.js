/**
    Simple Paint - by Lim Thye Chean
**/

var draw = false;
var size = 10;
var px;
var py;
var color = 15;

graphics(320, 420);
drawPalette();

// Register events

document.body.ontouchstart = touchStart;
document.body.ontouchmove = touchMove;
document.body.ongesturechange = gestureChange;

// Draw color palette

function drawPalette() {
    setPenSize(1);
    setGradient(0, 363, 0, 435, [128, 128, 128], [0, 0, 0]);
    paintRect(0, 363, 320, 57);

    for (var i = 0; i < 8; i++) {
    	setColor(i);
    	paintRect(i * 32 + 1, 364, 30, 26);
    }

    for (var i = 0; i < 8; i++) {
    	setColor(i + 8);
    	paintRect(i * 32 + 1, 392, 30, 26);
    }

    setColor(color);
    paintCircle(288, 392, size);
}

// Handle touch start event

function touchStart(event) {
	event.preventDefault();

	var touches = event.targetTouches;
	draw = false;

	if (touches.length > 1) {
    
    	// Clear screen
    
    	if (touches.length == 2)
			clearScreen(0);
		else
			clearScreen(color);

		drawPalette();
	}
	else {
		var x = touches[0].pageX;
		var y = touches[0].pageY;
		
		if (y > 364 - size) {
		
			// Select color
		
            if (x > 256) {

                // Set size
            
                size += 5;
                if (size > 20)
                    size = 5;
                    
                drawPalette();
            }
            else {
            
                // Set color
            
                color = Math.floor(x / 32);
                if (y > 391)
                    color += 8;
                
                drawPalette();
            }
        }
		else {
		
			// Start paint
		
			draw = true;
			px = x;
			py = y;

		    setPenSize(size);
			touchMove(event);
		}
	}
}

// Handle touch move event

function touchMove(event) {
	var touches = event.targetTouches;
	var x = touches[0].pageX;
	var y = touches[0].pageY;
		
	event.preventDefault();

	// Paint line

	if (draw && y < (364 - size)) {
        line(px, py, x, y);
        px = x;
        py = y;
    }
    else {
        px = x;
        py = 364 - size;
    }
}

// Handle gesture end event

function gestureChange(event) {
	scale = event.scale;
	
	if (scale > 1) {
		setRadialGradient(160, 182, 50, 100 * scale, color, 0);
		paintRect(0, 0, 640, 400);
	}
	else if (scale < 1) {
		setRadialGradient(160, 182, 100 * scale, 320, 0, color);
		paintRect(0, 0, 640, 400);
	}
	
    drawPalette();
}