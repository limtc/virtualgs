// Brainy - by Lim Ding Wen

gr

inverse
print " Brainy "
normal
print "By Lim Ding Wen"
print "Do colors go to left or right?"

color = 1;
loop main, 10

function main {
    for i = 0 to 39 {
        plot i, i
        color = color + 1;
        if (color > 15) color = 1 
    }
}