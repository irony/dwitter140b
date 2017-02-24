// f = current frame
c.width=1920 // clear canvas (c)
for(i=0; i<9; i++) c.getContext('2d').fillRect(200+i*100+Math.sin(f/120)*300,0,50,100)