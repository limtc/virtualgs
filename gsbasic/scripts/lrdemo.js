// Lores Demo by John B. Matthews

gr
inverse
print " Lores Demo "
normal
print "By John B. Matthews"

call draw1
loop draw2

function draw1 { 
	for p = 0 to 38 {
        color = rnd(15) + 1
        plot 0, p
        plot p, 0
        plot 39, p 
        plot p, 39
        plot p, p
        plot 39 - p, p
    } 
} 

function draw2 { 
    x1 = rnd(40)
    y1 = rnd(40) 
    x2 = rnd(40) 
    y2 = rnd(40) 
    color = rnd(15) + 1 
    hlin x1, x2 at y1
    hlin x1, x2 at y2 
    vlin y1, y2 at x1
    vlin y1, y2 at x2 
} 