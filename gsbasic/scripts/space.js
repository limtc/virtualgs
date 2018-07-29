// Space - by Lim Thye Chean

hgr

inverse
print " Space "
normal
print "Little spaceship flying in space happily."

x = rnd(540) + 50
y = rnd(300) + 50
speed = rnd(5) + 2
color1 = rnd(7) + 1
color2 = rnd(8) + 8

sx = []
sy = []
colors = []

for i = 0 to 99 {
    sx[i] = rnd(640)
    sy[i] = rnd(400)
    colors[i] = rnd(15) + 1
}

play "space.mp3"
loop main

function main {
    hgr
    
    for i = 0 to 99 {
        hcolor = colors[i]
        circle sx[i], sy[i], i % 4 + 1

        sx[i] = sx[i] - (sy[i] % 5 + 1)
    
        if (sx[i] < 0) {
            sx[i] = 639
            sy[i] = rnd(400)
        }
    }
    
    hcolor = color1
    oval x - 50, y, 100, 35

    hcolor = color2
    circle x, y, 20

    x = x + speed
    if (x > 690) {
        x = -50
        y = rnd(300) + 50
        speed = rnd(5) + 2
        color1 = rnd(7) + 1
        color2 = rnd(8) + 8
    }
}