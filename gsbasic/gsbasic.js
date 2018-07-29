/**
    GScript BASIC 1.4.4 - by Lim Thye Chean
    Simulate a 640x400 screen with Apple IIGS color palette

    hgr: start hires mode or clear hires screen
    hcolor: set color (0-15)
    hplot: plot dot and line
    rect: paint rectangle
    circle: paint circle
    oval: paint oval
    loop: loop a function
    stoploop: stop the loop
    beep: beep
    play: play sound
    print: print to text area
    home: clear text area
    normal: normal text
    inverse: inverse text 
    spc: number of spaces
    rnd: get random number
    int: get integer number
**/

var hires = null;
var text = null;
var loopfun = null;
var sound = null;
var inverseText = false;
var screenWidth = 640;
var screenHeight = 400;
var pixelWidth = 1;
var pixelHeight = 1;
var mousex = 0;
var mousey = 0;
var canvasText = [];
var iPhone = (navigator.userAgent.indexOf("iPhone") > 0 || navigator.userAgent.indexOf("iPod") > 0)
var hcolors = ["#000000", "#777777", "#884411", "#7722CC", "#0000FF","#008800", "#FF7700", "#DD0000", 
  "#FFAA99", "#FFFF00", "#00EE00", "#44DDFF", "#DDAAFF", "#7788FF", "#CCCCCC", "#FFFFFF"];

// Evaluete script

function evalScript(script) {
	var lines = script.split("\n");
	var result = "";

	for (i in lines) {
		var line = lines[i];

		if (line.indexOf("print ") >= 0) {

			// Handle hprint and print

			var start = line.indexOf("\"");
			var end = line.lastIndexOf("\"");
			var str = line.substring(start, end + 1);
			
			if (start < 0)
				lines[i] = line.replace("print ", "print(").replace("at", ",") + ")";
			else
				lines[i] = line.substring(0, start) + "(" + str 
				  + line.substring(end + 1, line.length).replace("at", ",") + ")";
		}
		else if (line.indexOf("for ") >= 0 && line.indexOf(" to ") > 0) {
			
			// Handle for loop
		
			var fr = line.indexOf("for ");
			var eq = line.indexOf("=");
			var st = line.indexOf("step");
			var vr = line.substring(fr + 4, eq);
			var step;
			
			if (st > 0) {
				step = line.substring(st + 5, line.lastIndexOf("{") - 1);
				line = line.substring(0, st) + "{";
			}
			else
				step = "1"; 
			
			lines[i] = line.replace("for ", "for (").replace(" to ", "; " + vr + " < (")
			  .replace("{", "+1); " + vr + " += " + step + ") {");
		}
		else if (line.indexOf("function ") >= 0 && line.indexOf("{") > 0) {
		
			// Handle function
		
			if (line.indexOf("(") < 0)
				lines[i] = line.replace("{", "() {");
		}
		else if (line.indexOf("home") >= 0 && line.indexOf("\"") < 0)
			lines[i] = line.replace("home", "home()");
		else if (line.indexOf("normal") >= 0 && line.indexOf("\"") < 0)
			lines[i] = line.replace("normal", "normal()");
		else if (line.indexOf("inverse") >= 0 && line.indexOf("\"") < 0)
			lines[i] = line.replace("inverse", "inverse()");
		else if (line.indexOf("beep") >= 0 && line.indexOf("\"") < 0)
			lines[i] = line.replace("beep", "beep()");
		else if (line.indexOf("endLoop") >= 0 && line.indexOf("\"") < 0)
			lines[i] = line.replace("endLoop", "endLoop()");
		else if (line.indexOf("plot ") >= 0)
			lines[i] = line.replace("plot ", "plot(").replace("to", ",") + ")";
		else if (line.indexOf("vlin ") >= 0)
			lines[i] = line.replace("vlin ", "vlin(").replace("at", ",") + ")";
		else if (line.indexOf("hlin ") >= 0)
			lines[i] = line.replace("hlin ", "hlin(").replace("at", ",") + ")";
		else if (line.indexOf("draw ") >= 0)
			lines[i] = line.replace("draw ", "draw(").replace("at", ",") + ")";
		else if (line.indexOf("rect ") >= 0)
			lines[i] = line.replace("rect ", "rect(") + ")";
		else if (line.indexOf("circle ") >= 0)
			lines[i] = line.replace("circle ", "circle(") + ")";
		else if (line.indexOf("oval ") >= 0)
			lines[i] = line.replace("oval ", "oval(") + ")";
		else if (line.indexOf("play ") >= 0)
			lines[i] = line.replace("play ", "play(") + ")";
		else if (line.indexOf("wait ") >= 0)
			lines[i] = line.replace("wait ", "wait(") + ")";
		else if (line.indexOf("loop ") >= 0)
			lines[i] = line.replace("loop ", "loop(") + ")";
		else if (line.indexOf("onEvent ") >= 0) {
			var end = line.lastIndexOf("\"");
			lines[i] = line.replace("onEvent ", "onEvent(").replace(" call ", ",") + ")";
		}
		else if (line.indexOf("call ") >= 0)
			lines[i] = line.replace("call ", "") + "()";
		else if (line.indexOf(" and ") > 0)
			lines[i] = line.replace(/and/g, " && ");
		else if (line.indexOf(" or ") > 0)
			lines[i] = line.replace(/or/g, " || ");
		else if (line.indexOf("hgr") >= 0 && line.indexOf("\"") < 0)
			lines[i] = line.replace("hgr", "hgr()");
		else if (line.indexOf("gr") >= 0 && line.indexOf("\"") < 0)
			lines[i] = line.replace("gr", "gr()");
	}
	
//	 alert(lines.join("\n"));
	eval(lines.join("\n"));
}

// Hires mode

function hgr() {
	if (!hires) { 

	    // Create hires canvas
	
	    var canvas = document.createElement("canvas");
	    canvas.setAttribute("width", screenWidth);
	    canvas.setAttribute("height", screenHeight);
	    canvas.style.backgroundColor = "black";
	    canvas.style.marginBottom = 10;
	    document.body.appendChild(canvas);
	    
	    hires = canvas.getContext("2d");
	}
	
    hires.clearRect(0, 0, screenWidth, screenHeight);
    pixelWidth = 1;
    pixelHeight = 1;
    
	// Clear text
	
	for (i in canvasText)
		document.body.removeChild(canvasText[i]);
	
	canvasText = [];
}

// Print text to Hires   

function hprint(str, x, y) {
	if (x < screenWidth && y < screenHeight - 10) {
		var color = (typeof(hcolor) == "number") ? hcolors[Math.floor(hcolor)] : hcolor;
		var div = document.createElement("div");
				
		div.style.position = "absolute";	
		div.style.left = x;
		div.style.top = y;
		div.style.color = color;
		div.innerHTML = str;
		document.body.appendChild(div);
		
		canvasText.push(div);
	}
}

// Print text

function print(str) {
	if (!text) {
	    text = document.createElement("div");
	    document.body.appendChild(text);
	}

	if (str == null)
		str = "";
	else {
		if (str.indexOf("http://") == 0)
			str = "<a href='" + str + "' target='_blank'>" + str + "</a>";
		else {
			str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
		
			if (inverseText)
				str = "<span class='inverse'>" + str.replace(/ /g, "&nbsp;") + "</span>";
			else
				str = "<span class='normal'>" + str.replace(/ /g, "&nbsp;") + "</span>";
		}
	}
	
    text.innerHTML = text.innerHTML + str + "<br>";
}

// Set text to normal state

function normal() {
	inverseText = false;
}

// Set text to inverse state

function inverse() {
	inverseText = true;
}

// Return number of space

function spc(max) {
	var space = "";
	
	for (var i = 0; i < max; i++)
		space += "&nbsp;";
	
	return space;
}

// Home

function home() {
	if (!text) {
	    text = document.createElement("div");
	    document.body.appendChild(text);
	}
	
	text.innerHTML = "";
}

// Plot dot and line

function hplot(x1, y1, x2, y2) {
    setColor();
        
    if (x2 == null)
        hires.fillRect(x1, y1, 1, 1);
    else {
        hires.beginPath();
        hires.moveTo(x1, y1);
        hires.lineTo(x2, y2);
        hires.stroke();
        hires.closePath();
    }
}

// Paint rectangle

function rect(x, y, width, height) {
    setColor();
    hires.fillRect(x, y, width, height);
}

// Paint oval

function oval(x, y, width, height) {
    setColor();
    hires.save();
    hires.translate(x + width / 2, y + height / 2);
    hires.scale(1, height / width);
    hires.beginPath();
    hires.arc(0, 0, width / 2, 0, Math.PI * 2, true);
    hires.fill();
    hires.closePath();
    hires.restore();
}

// Paint circle

function circle(x, y, radius) {
    setColor();
    hires.beginPath();
    hires.arc(x, y, radius, 0, Math.PI * 2, true);
    hires.fill();
    hires.closePath();
}

// Draw image

function image(file) {
	var img = new Image();
    if (file.indexOf("http://") < 0)
        file = "scripts/" + file;
    
	img.src = file;

	return img;
}
	
function draw(image, x, y) {
 	hires.drawImage(image, x, y);
}

// Wait

function wait(fun, seconds) {
	setTimeout(fun, seconds * 1000)
}

// Start loop

function loop(fun, fps) {
	if (fps == null)
		fps = 20;
	
	fun();
	loopfun = setInterval(fun, 1000 / fps);
}

// End loop

function endLoop() {
	if (loopfun != null) {
		clearInterval(loopfun);
		loopfun = null;
	}
}
 
// Get random number

function rnd(number) {
    return Math.floor(Math.random() * number);
}

// Get integer

function int(number) {
	return Math.floor(number);
}

// Play sound

function play(file) {
	if (!iPhone) {	
		if (sound == null) {
			sound = document.createElement("span");
			document.body.appendChild(sound);
		}
		
		sound.innerHTML = "<embed src='scripts/" + file + "' hidden=true autostart=true loop=false>";
	}
}

// Beep

function beep() {
	if (!iPhone) {	
		if (sound == null) {
			sound = document.createElement("span");
			document.body.appendChild(sound);
		}
			
		sound.innerHTML = "<embed src='beep.wav' hidden=true autostart=true loop=false>";
	}
}

// Get character codes

function chr(code) {
	return String.fromCharCode(code);
}

function asc(char) {
	return charCodeAt();
}

// Set color

function setColor() {
    var color = (typeof(hcolor) == "number") ? hcolors[Math.floor(hcolor)] : hcolor;
        
    hires.strokeStyle = color;
    hires.fillStyle = color;
}

// Handle events

function onEvent(event, handler) {
	addEventListener(event, handleEvent, false);
	
	function handleEvent(event) {
		mousex = Math.floor(event.clientX / pixelWidth);
		mousey = Math.floor(event.clientY / pixelHeight);
		key = event.which;
		handler();
	}
}

/**
    Lores - by John B. Matthews and Thye Chean
**/

var lrcolors  = ["black", "red", "darkblue", "violet", "darkgreen", "gray", "blue", "lightblue", "brown",
  "orange", "darkgray", "pink", "lime", "yellow", "aqua", "white"];

function gr() {
	hgr();
	pixelWidth = screenWidth / 40; 
	pixelHeight = screenHeight / 40;
}

function plot(x, y) {
	hcolor = (typeof(color) == "number") ? lrcolors[color] : color;
    rect(x * pixelWidth, y * pixelHeight, pixelWidth, pixelHeight) 
} 

function hlin(x1, x2, y) {
	hcolor = (typeof(color) == "number") ? lrcolors[color] : color;
			 
    if (x1 <= x2) 
    	rect(x1 * pixelWidth, y * pixelHeight, (x2 - x1 + 1) * pixelWidth, pixelHeight); 
    else 
    	rect(x2 * pixelWidth, y * pixelHeight, (x1 - x2 + 1) * pixelWidth, pixelHeight); 
} 

function vlin(y1, y2, x) {
	hcolor = (typeof(color) == "number") ? lrcolors[color] : color;
	
    if (y1 <= y2) 
    	rect(x * pixelWidth, y1 * pixelHeight, pixelWidth, (y2 - y1 + 1) * pixelHeight); 
    else 
    	rect(x * pixelWidth, y2 * pixelHeight, pixelWidth, (y1 - y2 + 1) * pixelHeight); 
}