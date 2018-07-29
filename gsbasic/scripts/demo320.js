// Demo - by Lim Thye Chean

i = 0
hcolor = 1

hgr
inverse
print " Demo "
normal
print "Color: " + hcolor
loop main

function main {
    circle rnd(320), rnd(200), rnd(2) + 1
    hplot i * 10, 0 to 0, 200 - i * 7
    hplot 320 - i * 10 to 199, 319, i * 7

    i = i + 1
    if (i > 31) {
        i = 0
        hcolor = hcolor + 1
        
        if (hcolor > 15) {
            home
            inverse
            print " Wow! "
            normal
            print "The amazing Super Hires!"
            
            endLoop
            return;
        }
        
        home
        inverse
        print " Demo "
        normal
        print "Color: " + hcolor
    }
}