// Lores colors - by Lim Thye Chean

gr
inverse
print " Lores Colors "
normal
print "You can use color number 0-15 for color."

for i = 0 to 15 {
    color = i
    vlin 0, 39 at i * 2 + 4
    vlin 0, 39 at i * 2 + 5
}

for i = 0 to 39 {
    color = i % 16
    hlin 0, 3 at i
    hlin 36, 39 at i
}