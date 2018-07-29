// Happy Birthday Xin Quan - By Alice

play "birthday.mid"
loop birthday, 5

function birthday {
    gr
    home
    inverse
    print " Happy Birthday "
    normal
    print "To Xin Quan by Alice."
    
    color = "red"
    plot 5, 4
    plot 4, 5
    plot 6, 5
    plot 7, 6
    plot 3, 6
    plot 7, 7
    plot 3, 7
    plot 4, 8
    plot 6, 8
    plot 5, 9
    plot 5, 3
    
    color = "yellow"
    plot 5, 10
    plot 4, 10
    plot 3, 10
    plot 2, 10
    plot 6, 10
    plot 7, 10
    plot 8, 10
    vlin 10, 35 at 2 
    vlin 10, 35 at 8
    hlin 2, 8 at 36
    
    color = "green"
    hlin 9, 37 at 36
    hlin 9, 37 at 35
    
    color = "orange"
    hlin 9, 35 at 34
    hlin 9, 35 at 33
    
    color = "blue"
    hlin 9, 33 at 32
    hlin 9, 33 at 31
    
    color = "pink"
    hlin 9, 31 at 30
    hlin 9, 31 at 29
    
    color ="violet"
    hlin 9, 29 at 28
    hlin 9, 29 at 27
    
    color = "aqua"
    vlin 22, 26 at 12
    vlin 22, 26 at 18
    hlin 12, 18 at 21
    
    color = "lime"
    vlin 19, 26 at 24
    vlin 23, 26 at 21
    hlin 21, 24 at 23
    
    color = "brown"
    hlin 13, 17 at 20
    color = "white"
    hlin 14, 16 at 19
    color = "red"
    hlin 15, 15 at 18
    
    for i = 0 to 99 {
      color = rnd(15) + 1
      plot rnd(5) + 3, rnd(25) + 11
    }
}