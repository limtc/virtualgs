// Duet

gr
inverse
print " Duet "
normal
print "Getting ready..."

play "duet.mid"
loop shapes, 2
wait ready, 50

// Draw stars

function shapes {
    x = rnd(40)
    y = rnd(40)
    w = rnd(3)
    h = rnd(3)
    color = rnd(15) + 1

    for i = x - w to x + w {
        vlin y - h, y + h at i
    }
}

// Ready for show

function ready {
    endLoop
    home
    inverse
    print " Duet "
    normal
    print "Let's rock!"

    sy = []
    cy = []
    
    for i = 0 to 39 {
        sy[i] = rnd(40)
        cy[i] = rnd(10)
     }

    count = 0

    loop show
    wait complete, 184
}

// The show

function show {
    gr
    
    for i = 0 to 39 {
        color = i % 15 + 1
        
        // Draw stars

        plot i, sy[i]
        sy[i] = sy[i] + (i % 3) + 1
    
        if (sy[i] > 39)
            sy[i] = 0
            
        // Draw chart
        
        vlin cy[i] + 29, 39, i
        
        if (count % 5 == 0)
            cy[i] = rnd(10)
     } 
     
     count = count + 1
}

// Complete show

function complete {
    endLoop
    home
    inverse
    print " Duet "
    normal
    print "Apple II Forever!"
    
    loop forever
}

// Scroll stars forever

function forever {
    gr
    
    for i = 0 to 39 {
        color = i % 15 + 1
        
        // Draw stars

        plot i, sy[i]
        sy[i] = sy[i] + (i % 3) + 1
    
        if (sy[i] > 39)
            sy[i] = 0
    } 
}
