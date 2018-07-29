// Crazy Typer - by Lim Thye Chean

hgr
inverse
print " Crazy Typer "
normal
print "Press space to clear screen."

onEvent "keypress" call getkey

function getkey {
  hcolor = rnd(15) + 1
  
  if (key == 32)
    hgr
  else
    hprint chr(key) at rnd(640), rnd(400)
}