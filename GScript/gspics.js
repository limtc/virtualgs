/**
    Apple IIGS Pictures - by Lim Thye Chean
**/

graphics(640, 400);

var x = new Array();
var y = new Array();
var speed = new Array();
var pics = new Array();
var files = ["taj.jpg", "fruits.jpg", "girl.jpg", "pam.jpg", "redhood.jpg"];
var background = loadImage("gspics/background.jpg");

for (var i = 0; i < 5; i++) {
    x[i] = random(320);
    y[i] = random(200) + 400;
    speed[i] = -(i + 1)
    pics[i] = loadImage("gspics/" + files[i]);
}

canvas.onmousedown = mouseDown;
setInterval(draw, 50);

// Draw pictures

function draw() {                
    drawImage(background, 0, 0);
        
    for (var i = 0; i < 5; i++) {
        drawImage(pics[i], x[i], y[i]);
    
        y[i] = y[i] + speed[i];
        if (y[i] < -200 || y[i] > 400) {
            x[i] = random(320);
            y[i] = 400;
            speed[i] = -(i + 1)
        }
    }
}

// Click picture

function mouseDown(event) {
    for (var i = 4; i >= 0; i--) {
        var mx = getMouseX(event);
        var my = getMouseY(event);
        
        if ((mx > x[i] && mx < x[i] + 320) && (my > y[i] && my < y[i] + 200)) {
            speed[i] = -speed[i];
            beep();
            return;
        }
    } 
}