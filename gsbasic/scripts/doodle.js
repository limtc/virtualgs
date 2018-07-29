// Doodle

hgr
inverse
print " Doodle "
normal
print "Press any key to clear the screen."

down = false

// Register events

onEvent "mousedown" call startpaint
onEvent "mousemove" call painting
onEvent "mouseover" call stoppaint
onEvent "mouseup" call stoppaint
onEvent "keypress" call clearscreen

// Start painting

function startpaint {
    down = true
    call painting
}

// painting

function painting {
    if (down) {
        hcolor = rnd(15) + 1
        circle mousex, mousey, rnd(10) + 5
    }
}

// Stop painting

function stoppaint {
    down = false
}

// Clear screen

function clearscreen {
    hgr
}