// Hope - by Alice

play "hope.mid"
loop hope, 1

function hope {
    hgr
    home
    inverse
    print " Hope "
    normal
    print "Painted by Alice."
    
    for i = 0 to 999 {
      hcolor = rnd(15) + 1
      hplot rnd(640), rnd(400)
    }
    
    hcolor = 8
    circle 319, 99, 20
    
    hcolor = 4
    oval 290, 75, 55, 15
    rect 306, 60, 23, 23
    
    hcolor = 8
    rect 312, 115, 15, 10

    hcolor = 8
    circle 355, 128, 5
    circle 286, 128, 5
    
    hcolor = 10
    rect 303, 123, 35, 55
    rect 338, 123, 15, 10
    rect 288, 123, 15, 10
    
    hcolor = 13
    oval 140, 190, 350, 340
    
    hcolor = 8
    rect 305, 178, 10, 13 
    rect 327, 178, 10, 13
    
    hcolor = 7
    circle 327, 138, 5
    
    hcolor = 9
    circle 327, 138, 2
    
    for i = 0 to 487 {
      hcolor = rnd(2) * 6 + 5
      circle rnd(140) + 250,rnd(350) + 210, 2
    }
    
    for i = 0 to 287 {
      hcolor = rnd(2) * 6 + 5
      circle rnd(310) + 160, rnd(125) + 280, 2
    }
    
    for i = 0 to 187 {
      hcolor = rnd(2) * 6 + 5
      circle rnd(220) + 210, rnd(60) + 235,2
    }
}