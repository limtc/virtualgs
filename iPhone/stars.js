/**
    Stars - by Lim Thye Chean
**/

var stars = new Array();

graphics(320, 480);
setPenSize(2);

for (i = 0; i < 30; i++)
    stars[i] = new Star(random(320), random(480), random(5) + 2, 
      [random(256), random(256), random(256)]);

setInterval(draw, 50);

// Define star

function Star(x, y, speed, color) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
}

// Draw stars

function draw() {
    clearScreen();
    
    for (i = 0; i < 30; i++) {
        var star = stars[i];
    	
    	setColor(star.color);
        paintCircle(star.x, star.y, i % 3 + 1);
        star.x = star.x - star.speed;
        
        if (star.x < 0) {
            star.x = 320;
            star.y = random(480);
        }
    }
}