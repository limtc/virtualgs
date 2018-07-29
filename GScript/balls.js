/**
    Balls - by Lim Thye Chean
**/

var balls = new Array();

graphics(640, 400);

for (i = 0; i < 16; i++) {
	var color = [random(256), random(256), random(256)];
    balls[i] = new Ball(random(512) + 64, random(272) + 64, 
      random(20) - 10, random(20) - 10, color);
}

setInterval(draw, 50);

// Define ball

function Ball(x, y, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
}

// Draw balls

function draw() {
    setRadialGradient(320, 200, 100, 200, [0, 0, 255], [0, 0, 0]);
    paintRect(0, 0, 640, 400);
    
    for (i = 0; i < 16; i++) {
        ball = balls[i]; 
        size = (i + 1) * 4;
        
        setColor(ball.color, 0.9);
        paintCircle(ball.x, ball.y, size);
    
        ball.x = ball.x + ball.dx;
        if (ball.x < size || ball.x > 640 - size) {
            ball.dx = -ball.dx;
            ball.x = ball.x + ball.dx;
        }
            
        ball.y = ball.y + ball.dy;
        if (ball.y < size || ball.y > 400 - size) {
            ball.dy = -ball.dy;
            ball.y = ball.y + ball.dy;
        }
    }
}
