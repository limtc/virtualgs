/**
    GScript 1.1.5 - by Lim Thye Chean
    Simulate a 640x400 Super Hires screen with million of colors 

    clearScreen: clear screen
    setColor: set color (color, alpha)
    setGradient: set gradient colors
    setRadialGradient: set radial gradient colors
    setPenSize: set pen size
    plot: plot dot
    line: draw line
    paintRect: paint rectangle
    paintCircle: paint circle
    paintPoly: paint polygon
    frameRect: draw rectangle outline
    frameCircle: draw circle outline
    framePoly: draw polygon outline
    openPoly: define a polygon (use moveTo and lineTo to define points)
    loadImage: load and display image
    drawIage: draw image
    drawString: draw string
    random: get random number
    play: play sound
    beep: beep
**/

var gr = null;
var sound = null;
var canvas = null;
var penSize = 1;
var screenWidth = 640;
var screenHeight = 400;
var canvasText = [];
var colorPalette = ["#000000", "#777777", "#884411", "#7722CC", "#0000FF", "#008800", "#FF7700", "#DD0000", 
  "#FFAA99", "#FFFF00", "#00EE00", "#44DDFF", "#DDAAFF", "#7788FF", "#CCCCCC", "#FFFFFF"];

// Set graphics

function graphics(width, height) {
	if (!gr) { 
	    screenWidth = width;
	    screenHeight = height;  

	    // Create hires canvas
	
	    var tags = document.getElementsByTagName("canvas");

        if (tags.length == 0)
            canvas = document.createElement("canvas");
		else
			canvas = tags[0];

	    canvas.setAttribute("width", screenWidth);
	    canvas.setAttribute("height", screenHeight);
	   	document.body.appendChild(canvas);

	    gr = canvas.getContext("2d");
	    
	    // Hide address bar if on iPhone/iPod touch
	    
		var agent = navigator.userAgent;
	
		if (agent.indexOf("iPhone") > 0 || agent.indexOf("iPod") > 0)
			document.body.onload = setTimeout(function() { window.scrollTo(0, 1) }, 100);
	}
}

// Clear screen

function clearScreen(color) {
	if (color != null) {
    	var cl;
    
    	if (typeof(color) == "number")
    		cl = colorPalette[color];
    	else
        	cl = "rgb(" + Math.floor(color[0]) + "," + Math.floor(color[1]) + "," + Math.floor(color[2]) + ")";
        
      	canvas.style.backgroundColor = cl;
    }
    
	gr.clearRect(0, 0, screenWidth, screenHeight);
	
	// Clear text
	
	for (i in canvasText)
		document.body.removeChild(canvasText[i]);
		
	canvasText = [];
}

// Get random number

function random(number) {
    return Math.floor(Math.random() * number);
}

// Set pen size

function setPenSize(size) {
    penSize = size;
}

// Set color

function setColor(color, alpha) {
    var cl;
    
    if (alpha == null) {
    	if (typeof(color) == "number")
    		cl = colorPalette[color];
    	else
        	cl = "rgb(" + Math.floor(color[0]) + "," + Math.floor(color[1]) + "," + Math.floor(color[2]) + ")";
    }
    else
        cl = "rgba(" + Math.floor(color[0]) + "," + Math.floor(color[1]) 
          + "," + Math.floor(color[2]) + "," + alpha + ")";
    
    gr.strokeStyle = cl;
    gr.fillStyle = cl;
}

// Set gradient

function setGradient(x1, y1, x2, y2, color1, color2) {
    var gradient = gr.createLinearGradient(x1, y1, x2, y2);
    var c1 = typeof(color1) == "number" ? colorPalette[color1] : "rgb(" + color1[0] + "," + color1[1] + "," + color1[2] + ")";
    var c2 = typeof(color2) == "number" ? colorPalette[color2] : "rgb(" + color2[0] + "," + color2[1] + "," + color2[2] + ")";

    gradient.addColorStop(0, c1);
    gradient.addColorStop(1, c2);
    gr.fillStyle = gradient;
}

// Set radial gradient

function setRadialGradient(x, y, r1, r2, color1, color2) {
    var gradient = gr.createRadialGradient(x, y, r1, x, y, r2);
    var c1 = typeof(color1) == "number" ? colorPalette[color1] : "rgb(" + color1[0] + "," + color1[1] + "," + color1[2] + ")";
    var c2 = typeof(color2) == "number" ? colorPalette[color2] : "rgb(" + color2[0] + "," + color2[1] + "," + color2[2] + ")";

    gradient.addColorStop(0, c1);
    gradient.addColorStop(1, c2);
    gr.fillStyle = gradient;
}

// Plot dot

function plot(x, y) {
    gr.fillRect(x, y, penSize, penSize);
}

// Draw line

function line(x1, y1, x2, y2) {
    gr.lineWidth = penSize;
    gr.lineCap = "round";
    gr.beginPath();
    gr.moveTo(x1, y1);
    gr.lineTo(x2, y2);
    gr.stroke();
    gr.closePath();
}

// Draw rectangle

function paintRect(x, y, width, height) {
    gr.fillRect(x, y, width, height);
}

function frameRect(x, y, width, height) {
    gr.lineWidth = penSize;
    gr.strokeRect(x, y, width, height);
}

// Draw oval

function paintOval(x, y, width, height) {
    gr.save();
    gr.translate(x + width / 2, y + height / 2);
    gr.scale(1, height / width);
    gr.beginPath();
    gr.arc(0, 0, width / 2, 0, Math.PI * 2, true);
    gr.fill();
    gr.closePath();
    gr.restore();
}

function frameOval(x, y, width, height) {
    gr.save();
    gr.translate(x + width / 2, y + height / 2);
    gr.scale(1, height / width);
    gr.beginPath();
    gr.arc(0, 0, width / 2, 0, Math.PI * 2, true);
    gr.stroke();
    gr.closePath();
    gr.restore();
}

// Draw circle

function paintCircle(x, y, radius) {
    gr.beginPath();
    gr.arc(x, y, radius, 0, Math.PI * 2, true);
    gr.fill();
    gr.closePath();
}

function frameCircle(x, y, radius) {
    gr.lineWidth = penSize;
    gr.beginPath();
    gr.arc(x, y, radius, 0, Math.PI * 2, true);
    gr.stroke();
    gr.closePath();
}

// Draw polygon

function openPoly() {
	gr.beginPath();
}

function moveTo(x, y) {
	gr.moveTo(x, y);
}

function lineTo(x, y) {
	gr.lineTo(x, y);
}

function paintPoly() {
	gr.fill();
}

function framePoly() {
	gr.stroke();
}

// Draw image

function loadImage(file) {
	var img = new Image();
	img.src = file;

	return img;
}
	
function drawImage(image, x, y) {
 	gr.drawImage(image, x, y);
}

// Draw string   

function drawString(str, x, y) {
	var div = document.createElement("div");
			
	div.style.position = "absolute";	
	div.style.left = x;
	div.style.top = y;
	div.style.color = gr.strokeStyle;
	div.innerHTML = str;
	document.body.appendChild(div);
	
	canvasText.push(div);
}

// Play sound

function play(file) {
	if (sound == null) {
		sound = document.createElement("span");
	   	document.body.appendChild(sound);
    }
    
	sound.innerHTML = "<embed src='" + file + "' hidden=true autostart=true loop=false>";
}

// Beep

function beep() {
	if (sound == null) {
		sound = document.createElement("span");
	   	document.body.appendChild(sound);
    }
		
	sound.innerHTML = "<embed src='beep.wav' hidden=true autostart=true loop=false>";
}

// Handle events

function onEvent(event, handler) {
	document.body.addEventListener(event, handler, false);
}