// Colors - by Lim Thye Chean

hgr

colors = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon",
  "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"]

for (color in colors) {
    str = colors[color]
    hcolor = str 
    rect 0, color * 25, 550, 25
    
    hcolor = "white"
    hprint str at 560, color * 25 + 5
}

inverse
print " Color Names "

normal
print "You can use color name for hcolor."