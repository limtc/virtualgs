// Pattern - by Lim Thye Chean

hgr
inverse
print " Pattern "
normal

hcolor = 1
loop main, 1

function main {
  for i = 0 to 319 step 4 {
    hplot i, 0 to 319 - i, 199
    hplot rnd(320), rnd(200)
  }

  hcolor++
  
  if (hcolor > 15) {
    endLoop
    print "Welcome to the future."
  }
}