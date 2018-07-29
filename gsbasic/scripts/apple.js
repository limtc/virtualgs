// Apple ][ Forever - by Lim Thye Chean

gr
inverse
print " APPLE ][ FOREVER! "
normal
print "Original Applesoft source code:"
print "http://www.ld8.org/misc/logo.txt"

play "apple.mp3"

sx = []
sy = []
sc = []
dx = []
dy = []

for i = 0 to 29 {
    sc[i] = rnd(15) + 1
    sx[i] = rnd(3) + 18
    sy[i] = rnd(3) + 18
    dx[i] = rnd(5) - 2
    dy[i] = rnd(5) - 2
}

call readdata
loop main

// Draw stars and Apple logo

function main {
    gr
   
    // Draw stars
   
    for i = 0 to 29 {
        color = sc[i]
        plot sx[i], sy[i]
        
        sx[i] = sx[i] + dx[i]
        sy[i] = sy[i] + dy[i]

        if (sx[i] < 0 or sx[i] > 39 or sy[i] < 0 or sy[i] > 39) {
            sc[i] = rnd(15) + 1
            sx[i] = rnd(3) + 18
            sy[i] = rnd(3) + 18
        }
    }
    
    // Draw Apple

    for i = 0 to 37 {
        line = data[i]
        j = 0
        
        while (j < line.length) {
            if (line[j] == 0) {
        
                // Plot
            
                color = line[j + 1]
                plot line[j + 2], i + 1
                j = j + 3
            }
            else {
            
                // Line
            
                color = line[j + 1]
                hlin line[j + 2], line[j + 3] at i + 1
                j = j + 4
            }
        }
    }
}

// Apple logo data

function readdata {
    data = []
    data[0] = [1,4,23,24]
    data[1] = [0,4,22,0,12,23,0,4,24]
    data[2] = [0,4,21,1,12,22,23,0,4,24]
    data[3] = [1,12,21,23,0,4,24]
    data[4] = [0,4,20,1,12,21,23]
    data[5] = [1,12,20,22,0,4,23]
    data[6] = [1,12,20,22,0,4,23]
    data[7] = [1,12,20,22]
    data[8] = [1,12,20,21]
    data[9] = [1,4,15,17,0,4,20,1,4,23,25]
    data[10] = [0,4,14,1,12,15,17,0,4,18,0,4,22,1,12,23,25,0,4,26]
    data[11] = [0,4,13,1,12,14,19,0,4,20,1,12,21,26,0,4,27]
    data[12] = [0,4,12,1,12,13,27,0,4,28]
    data[13] = [0,4,12,1,12,13,27,0,4,28]
    data[14] = [0,4,11,1,12,12,27,0,4,28]
    data[15] = [0,9,11,1,13,12,27]
    data[16] = [0,8,10,1,13,11,26,0,9,27]
    data[17] = [0,8,10,1,13,11,26]
    data[18] = [0,9,10,1,13,11,25,0,9,26]
    data[19] = [0,9,10,1,13,11,25,0,8,26]
    data[20] = [0,8,10,1,9,11,25,0,8,26]
    data[21] = [0,8,10,1,9,11,25,0,8,26]
    data[22] = [0,8,10,1,9,11,25,0,8,26]
    data[23] = [0,8,10,1,9,11,25,0,8,26]
    data[24] = [0,8,10,1,1,11,26,0,8,27]
    data[25] = [0,8,10,1,1,11,26,0,8,27]
    data[26] = [0,8,11,1,1,12,27]
    data[27] = [0,8,11,1,1,12,27,0,8,28]
    data[28] = [0,8,11,1,1,12,28,0,8,29]
    data[29] = [1,3,12,28,0,6,29]
    data[30] = [0,6,12,1,3,13,28]
    data[31] = [0,6,12,1,3,13,27,0,6,28]
    data[32] = [0,6,13,1,3,14,27]
    data[33] = [0,6,13,1,3,14,26,0,6,27]
    data[34] = [0,6,13,1,7,14,26]
    data[35] = [0,6,14,1,7,15,19,0,6,20,1,7,21,25,0,6,26]
    data[36] = [1,7,15,18,0,6,19,0,6,21,1,7,22,25]
    data[37] = [0,6,15,1,7,16,17,0,6,18,0,6,22,1,7,23,24,0,6,25]
}