/**
    Apple IIGS Pictures - by Lim Thye Chean
**/

graphics(320, 480);

var x = new Array();
var y = new Array();
var pics = new Array();
var speed = new Array()
var files = ["taj.jpg", "fruits.jpg", "girl.jpg", "pam.jpg", "redhood.jpg"];
var background = loadImage("gspics/background.jpg");

for (var i = 0; i < 5; i++) {
    x[i] = random(160);
    y[i] = random(200) + 480;
    speed[i] = -(i + 1);
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
        if (y[i] < -200 || y[i] > 480) {
            x[i] = random(160);
            y[i] = 480;
            speed[i] = -(i + 1);
        }
    }
}

// Click picture

function mouseDown(event) {
	event.preventDefault();

    for (var i = 4; i >= 0; i--) {
        var mx = event.clientX;
        var my = event.clientY;
        
        if ((mx > x[i] && mx < x[i] + 160) && (my > y[i] && my < y[i] + 100)) {
            speed[i] = -speed[i];
            return;
        }
    } 
}