// Random Painter

gr
inverse
print " Random Painter "
normal
print "A random walking dot..."

count = 0
x = 20
y = 20
color = 1
loop main

function main {
    plot x, y
    
    count = count + 1
    
    if (count > 1500) {
        beep
        home
        inverse
        print " Random Painter "
        normal
        print "Done! A Lores Painting!"
        endLoop
        return
    }
    
    x = x + rnd(3) - 1
    y = y + rnd(3) - 1
    
    if (x < 0)
        x = 39
    
    if (x > 39)
        x = 0
        
    if (y < 0)
        y = 39
        
    if (y> 39)
        y = 0
        
    if (count % 50 == 0)
        color = color + 1
    
    if (color > 15)
        color = 1
}