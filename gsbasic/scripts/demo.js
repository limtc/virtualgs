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
    circle rnd(640), rnd(400), rnd(5) + 1
    hplot i * 20, 0 to 0, 400 - i * 14
    hplot 640 - i * 20 to 399, 639, i * 14

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