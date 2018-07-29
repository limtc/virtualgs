/**
    Car - by Lim Ding Wen (23/08/2008)
**/

graphics(640, 400);

var x = -210;
setInterval(draw,50);

play("car.mp3");

// Start Draw

function draw() {
	
	// Draw sky
	
	setGradient(0,0,0,100,[255,0,255],[255,127,0]);
	paintRect(0,0,640,400);
	
	// Draw road
	
	setColor(14);
	paintRect(0,200,640,200);
	
	// Draw hills
	
	setColor(10);
	openPoly();
	moveTo(0, 200);
	lineTo(106,100);
	lineTo(212,200);
	lineTo(318,150);
	lineTo(424,200);
	lineTo(530,70);
	lineTo(640,200);
	paintPoly();

	// Draw car

	setColor(4);
	paintRect(x,150,210,50);
	setColor([255,0,0]);
	paintRect(x - 30,200,270,30);
	setColor([127,127,127]);
	paintCircle(x + 30,230,30);
	paintCircle(x + 180,230,30);
	setColor([0,255,255]);
	paintRect(x + 10,160,90,30);
	paintRect(x + 110,160,90,30);
	
	// Go car!
	
	x += 3;
	
	// Restart, car!
	
	if (x > 670) {
		play("car.mp3");
		x = -210;
	}
}