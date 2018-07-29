// Pong

gr
inverse
print " Pong Demo "
normal
print "The never ending game."

bx = 20
by = rnd(5) + 15
dx = (rnd(2) < 1) ? -1 : 1
dy = (rnd(2) < 1) ? -1 : 1

py1 = 20
py2 = 20
score1 = 0
score2 = 0

loop main

function main {
    gr

    // Move ball
    
    bx = bx + dx
    by = by + dy
    
    if (bx < 5 or bx > 34) {
        beep
        dx = -dx
    }
        
    if (by < 1 or by > 38)
        dy = -dy
        
    color = "red"
    plot bx, by
    
    // Move paddles

    if (bx < 30) {
        if (py1 > 5 and py1 > by)
            py1 = py1 - 1
                
        if (py1 < 34 and py1 < by)
            py1 = py1 + 1
    }
        
    color = "aqua"
    vlin py1 - 5, py1 + 5 at 4

    if (bx > 9) {
        if (py2 > 5 and py2 > by)
            py2 = py2 - 1
                
        if (py2 < 34 and py2 < by)
            py2 = py2 + 1
    }
        
    color = "lime"
    vlin py2 - 5, py2 + 5 at 35
}