// Pattern - by Lim Thye Chean

hgr
inverse
print " Pattern "
normal

hcolor = 1
loop main, 1

function main {
  for i = 0 to 639 step 8 {
    hplot i, 0 to 639 - i, 399
    hplot rnd(640), rnd(400)
  }

  hcolor++
  
  if (hcolor > 15) {
    endLoop
    print "Welcome to the future."
  }
}