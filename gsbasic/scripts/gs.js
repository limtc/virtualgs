// Apple IIGS - by Lim Ding Wen

hgr
inverse
print " Apple IIGS "
normal
print "Drawn by Lim Ding Wen."

keyX = 150

// Draw moniter device

hcolor = "white"
rect 159,73,202,152

hcolor = "silver"
rect 160,74,200,150

hcolor = "aqua"
rect 180,100,160,100

hcolor = "white" 
rect 179,223,162,28

hcolor = "silver"
rect 180,224,160,26

// Draw the machine with logo

hcolor = "white"
rect 159,249,202,52

hcolor = "silver"
rect 160,250,200,50

hcolor = "red"
circle 185,271,1 
circle 185,278,5

// Draw disk drive device

hcolor = "white"
rect 359,249,122,52

hcolor = "silver"
rect 360,250,120,50

hcolor = "black"
hplot 365,260,475,260

// Draw keyboard

hcolor = "white"
rect 139,329,242,46

hcolor = "silver"
rect 140,330,240,44

hcolor = "black"

for i = 0 to 11 {
    circle keyX,354,10
    keyX += 20
}

// Draw mouse

hcolor = "white"
rect 399,339,42,22

hcolor = "silver"
rect 400,340,40,20

// Play sound

play "gs.mp3"