var s,r,b
var x,y,z
var lim
var dt
var points=[]
var speed
var res
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  angleMode(DEGREES)
  perspective(60,width/height,0,(height/2)/tan(60)*10)
  
  s=10
  r=40
  b=2.67
  x=20
  y=30
  z=20
  dt=0.001
  lim=1
  speed=5
  res=5
  
  stroke('cyan')
  //strokeWeight(0.8)
  
  totalTime=75
  //for(t=0;t<totalTime;t+=dt){
    points.push(lorentz(totalTime))
  //}
  background(0)
  noFill()
  colorMode(HSB)
}

function draw() {
  background(0)
  orbitControl(0.8,0.8,0.05)
  //ambient()
  
  beginShape()
  for(i=0;i<points.length;i++){
    for(t=res;t<lim;t+=res){
      
      px=points[i][t-res][0]
      py=points[i][t-res][1]
      pz=points[i][t-res][2]
      x=points[i][t][0]
      y=points[i][t][1]
      z=points[i][t][2]
      //vertex(x,y,z)
      stroke(map(t,0,lim,0,260),100,100)
      line(px,py,pz,x,y,z)
      //point(x,y,z)
    }
  endShape()
    push()
    noStroke()
    translate(x,y,z)
    fill(30,100,100)
    sphere(0.5)
    pop()
    
  if(lim<points[0].length){
    lim+=speed
    }
  }
  speed+=0.01
}

function ambient(){
  push()
  noStroke()
  pointLight(175,100,60,0,0,400)
  ambientLight(175,0,25);
  fill(255,0,100)
  rotateX(90)
  translate(0,0,-60)
  box(300,300,10)
  pop()
}

function lorentz(totalTime){
  xyz=[]
  for(t=0;t<totalTime;t+=dt){
    dx=s*(y-x)*dt
    dy=(x*(r-z)-y)*dt
    dz=(x*y-b*z)*dt
    x+=dx
    y+=dy
    z+=dz
    xyz.push([x,y,z])
  }
  return(xyz)
}