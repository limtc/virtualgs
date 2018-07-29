/**
    Stars - by Lim Thye Chean
**/

var stars = new Array();

graphics(640, 400);

for (i = 0; i < 30; i++)
    stars[i] = new Star(random(640), random(400), random(8) + 2, random(3) + 1,
    [random(256), random(256), random(256)]);

setInterval(draw, 50);

// Define star

function Star(x, y, speed, size, color) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = size;
    this.color = color;
}

// Draw stars

function draw() {                
    setGradient(0, 0, 0, 399, [0, 0, 0], [0, 0, 50]);
    paintRect(0, 0, 640, 400);

    for (i = 0; i < 30; i++) {
        var star = stars[i];
        setColor(star.color);

        paintCircle(star.x, star.y, star.size);
        star.x = star.x - star.speed;
        
        if (star.x < 0) {
            star.x = 640;
            star.y = random(400);
        }
    }
    
    setColor(4);
    openPoly();
    moveTo(20, 182);
    lineTo(60, 190);
    lineTo(20, 198);
    paintPoly();
    
    setPenSize(5);
    setColor(7);
    line(16, 182, 32, 182);
    line(16, 198, 32, 198);
}