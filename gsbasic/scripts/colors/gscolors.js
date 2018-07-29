// Apple IIGS Colors - by Lim Thye Chean

hgr

for i = 0 to 15 {
    hcolor = i
    rect i * 40, 0, 40, 370
    hcolor = 15
    hprint i at i * 40 + 15, 380
}

inverse
print " Super Hires Colors "
normal
print "This is the color palette of Apple IIGS."
