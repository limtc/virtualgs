// Lores Stars - By Lim Thye Chean

x = []
y = []
colors = []

for i = 0 to 30 {
    x[i] = rnd(40)
    y[i] = rnd(40)
    colors[i] = rnd(15) + 1
}

gr
inverse
print " Lores Stars "
normal
print "Flying through stars..."

loop main

function main {
    gr
    
    for i = 0 to 30 {
        color = colors[i]
        plot x[i], y[i]

        x[i] = x[i] - (y[i] % 3 + 1)
    
        if (x[i] < 0) {
            x[i] = 39
            y[i] = rnd(40)
        }
    }
}