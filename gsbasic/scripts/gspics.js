// Apple IIGS Pictures - by Lim Thye Chean

hgr

inverse
print " Apple IIGS Pictures "
normal
print "The best Apple IIGS Super Hires images."


// Setup pictures

background = image("gspics/background.jpg")
x = []
y = []
speed = []
pics = []
files = ["taj.jpg", "fruits.jpg", "girl.jpg", "pam.jpg", "redhood.jpg"]

for i = 0 to 4 {
	x[i] = rnd(320)
	y[i] = rnd(200) + 400
	speed[i] = -(i + 1)
	pics[i] = image("gspics/" + files[i])
}

onEvent "mousedown" call click
loop main

// Draw pictures

function main {                
    draw background at 0, 0
        
    for i = 0 to 4 {
        draw pics[i] at x[i], y[i]
    
        y[i] = y[i] + speed[i];
        if (y[i] < -200 or y[i] > 400) {
            x[i] = rnd(320)
            y[i] = 400
            speed[i] = -(i + 1)
        }
    }
}

// Click picture

function click {
	for i = 0 to 4 {
		pic = 4 - i;
		       
        if ((mousex > x[pic] and mousex < x[pic] + 320) and (mousey > y[pic] and mousey < y[pic] + 200)) {
            speed[pic] = -speed[pic]
            return;
        }
    } 
}