// Apple IIGS Birthday - by Lim Thye Chean

hgr
hcolor = "white"
hprint "Happy Birthday!" at 250, 100

inverse
print " Apple IIGS Forever! "
normal
print "To my best friend, Happy Birthday!"
print ""
print "All the pictures are Apple IIGS Super Hires images."

// Setup pictures

background = image("gsbirthday.jpg")
draw background at 0, 0

x = []
y = []
speed = []
pics = []
files = ["girl.jpg", "pam.jpg", "redhood.jpg"]

for i = 0 to 2 {
	x[i] = rnd(320)
	y[i] = rnd(400) + 400
	speed[i] = -(i * 2 + 1)
	pics[i] = image("gspics/" + files[i])
}

play "gs.mp3"
wait ready, 5

// Get ready

function ready {
	hgr

	onEvent "mousedown" call click
	loop main
	play "birthday.mid"
}

// Draw pictures

function main {                
    draw background at 0, 0
        
    for i = 0 to 2 {
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
	for i = 0 to 2 {
		pic = 2 - i;
		       
        if ((mousex > x[pic] and mousex < x[pic] + 320) and (mousey > y[pic] and mousey < y[pic] + 200)) {
            speed[pic] = -speed[pic]
            return;
        }
    } 
}