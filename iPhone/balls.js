/**
    Balls - by Lim Thye Chean
**/

var balls = new Array();

graphics(320, 480);

for (i = 0; i < 16; i++) {
    balls[i] = new Ball(random(256) + 32, random(416) + 32, 
    random(10) - 5, random(10) - 5, 
    [random(256), random(256), random(256)]);
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
    clearScreen();
    
    for (i = 0; i < 16; i++) {
        ball = balls[i]; 
        size = (i + 1) * 2;
        
        setColor(ball.color);
        paintCircle(ball.x, ball.y, size);
    
        ball.x = ball.x + ball.dx;
        if (ball.x < size || ball.x > 320 - size) {
            ball.dx = ball.dx * -1;
            ball.x = ball.x + ball.dx;
        }
            
        ball.y = ball.y + ball.dy;
        if (ball.y < size || ball.y > 480 - size) {
            ball.dy = ball.dy * -1;
            ball.y = ball.y + ball.dy;
        }
    }
}