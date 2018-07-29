// Ball - by Lim Thye Chean

x = 320
y = 200
dx = rnd(5) + 5
dy = rnd(5) + 5

hgr
inverse
print " Bouncing Ball "
normal
print "Press any key to stop..."

onEvent "keypress" call finish

hcolor = rnd(15) + 1

loop main

function main {
    hgr
    x = x + dx
    y = y + dy
    
    if (x > 540 or x < 100) {
        hcolor = rnd(15) + 1
        dx = -dx
        beep
    }
    
    if (y > 300 or y < 100) {
        hcolor = rnd(15) + 1
        dy = -dy
        beep
    }
        
    circle x, y, 100
}

function finish {
    endLoop
    home
    inverse
    print " Bouncing Ball "
    normal
    print "The end."
}