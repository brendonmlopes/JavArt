//Don't mess with this
var z=[]
var fly=0

//Tinker with this to change effect
//If the velocity matches the size, the effect is better
var size = 40 //Default = 40
var scl = 7  //Default = 4
var freq = 30 //Default = 30
var vel = 20  //Default = 20

function setup() {
  createCanvas(400, 400,WEBGL);
//Creating two-dimensional array for the z values os the point of the strip
  for(x=0;x<=size*2;x++){
    z[x]=[]
  }
  
}

function draw() {
  background(50,200,255);
//  directionalLight(0, 250, 0, 0, -10, -1);
//Changing the noise values
  yoff=fly
    fly-=vel*0.01
  for(x=0;x<=size*2;x+=1){
    xoff=0
    for(y=0;y<=size*2;y+=1){
      z[x][y]=map(noise(xoff,yoff),0,1,-freq,freq-10)
      xoff+=0.2
    }
    yoff+=0.2
  }

//Uncomment to change frequency with time
  //freq=20+40*abs(sin(frameCount/30))

//Perspective and stroke config
  noStroke()
  //strokeWeight(0.2)
  rotateX(2.5*PI/7)
  rotateZ(PI/2)
  translate(180,0,110)
  //rotateY(PI)
  
//drawing the terrain
  for(x=-size;x<size;x+=1){
  beginShape(TRIANGLE_STRIP)
    for(y=-size;y<size;y+=1){
//Uncomment to draw the points
      //point(x*scl,y*scl,z[x+size][y+size])
      //point(x*scl+scl,(y+1)*scl,z[x+1+size][y+1+size])

//Green on the high parts
  fill(map(z[x+size][y+size],freq-10,-freq,0,60),map(z[x+size][y+size],-freq,freq-10,-50,200),20)
//Draw vertex      
      vertex(x*scl,y*scl,z[x+size][y+size])
//Green on the high parts      
  fill(map(z[x+1+size][y+1+size],freq-10,-freq,0,60),map(z[x+1+size][y+1+size],-freq,freq-10,-50,200),20)
//Draw another vertex
      vertex(x*scl+scl,(y+1)*scl,z[x+1+size][y+1+size])
    }
  endShape()
  }
  if(mouseIsPressed){
    vel+=1
  }
}