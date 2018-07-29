// Kaleidoscope - by John B. Matthews

gr
inverse
print " Kaleidoscope "
normal
print "By John B. Matthews"

j = 1
loop main, 5

function main {
    for i = 0 to 18 {
       color = j
       hlin 0, 39 at i
       vlin 0, 39 at i
       hlin 0, 39 at 39 - i
       vlin 0, 39 at 39 - i
       j++
       if (j > 14) j = 1
   }
}