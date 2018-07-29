// Lores Doodle

gr
inverse
print " Lores Doodle "
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
    color = rnd(15) + 1
    call painting
}

// painting

function painting {
    if (down)
        plot mousex, mousey
}

// Stop painting

function stoppaint {
    down = false
}

// Clear screen

function clearscreen {
	gr
}