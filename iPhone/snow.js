/** 
    Snow - by Lim Ding Wen (24/08/2008)
**/

graphics(320,480);

var snows = new Array();

for (i = 0; i < 100; i++)
    snows[i] = new Snow(random(320),random(400),random(5) + 1,random(5) + 1,random(3) + 1);

setInterval(draw,50);

// Define snow

function Snow(x,y,speed,slide,size) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.slide = slide;
    this.size = size;
}

// Draw

function draw() {
    setGradient(0,0,0,300,[0,0,255],[150,150,150]);
    paintRect(0,0,320,480);
    
    setColor([255,255,255]);
    
    for (i = 0; i < 100; i++) {
        var snow = snows[i];
        
        paintCircle(snow.x, snow.y, snow.size);
        snow.y += snow.speed;
        snow.x += snow.slide;
        
        if (snow.x > 320) snow.x = 0;
        if (snow.y > 480) snow.y = 0;
    }   
}