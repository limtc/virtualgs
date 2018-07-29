/**
    Demo - by Lim Thye Chean
**/

graphics(320, 480);

i = 0;
num = 0;
setColor(7);
drawString("GScript", 140, 220);
setColor(15);
drawString("By Lim Thye Chean", 100, 240);

setColor([random(256), random(256), random(256)]);
timer = setInterval(draw, 50);

// Draw lines and stars

function draw() {                
    plot(random(320), random(480));
    line(i * 10, 0, 0, 480 - i * 15);
    line(320 - i * 10, 479, 319, i * 15);
    
    i++;
    if (i > 31) {
        i = 0;
        setColor([random(256), random(256), random(256)]);
        
        num++;
        if (num > 9) {
			clearInterval(timer);
			return;
        }
    }
}