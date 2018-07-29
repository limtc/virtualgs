/**
    Demo - by Lim Thye Chean
**/

var i = 0;
var color = 1;

graphics(640, 400);
clearScreen(0);

setColor([255, 0, 0]);
drawString("GScript", 310, 180);
setColor(15)
drawString("By Lim Thye Chean", 270, 200);

setColor(color);
timer = setInterval(draw, 50);

// Draw stars and lines

function draw() {  
    paintCircle(random(640), random(400), random(3) + 1);
    line(i * 20, 0, 0, 400 - i * 14);
    line(640 - i * 20, 399, 639, i * 14);
    
    i++;
    if (i > 31) {
        i = 0;
        color++;
        
        if (color > 15) {
        	clearInterval(timer);
        	return;
		}
		
        setColor(color);
    }
}