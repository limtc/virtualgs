// Home - by Lim Thye Chean

hgr

// Draw pattern

for i = 0 to 31 {
    hcolor = i % 15 + 1

    // Plot lines

    hplot i * 20, 0 to 0, 400 - i * 12.5
    hplot i * 20, 0 to 639, i * 12.5
    hplot 640 - i * 20, 399 to 639, i * 12.5
    hplot 640 - i * 20, 399 to 0, 400 - i * 12.5
}

// Description

hcolor = "red"
hprint "GScript BASIC" at 260, 180

hcolor = "white"
hprint "Applesoft BASIC for the Web" at 200, 200

inverse
print " GScript BASIC 1.4.4 "
normal
print ""
print "By Lim Thye Chean"
print "http://virtualgs.larwe.com"