var p = 1
var lim = 2000
var zoom=10
var lim_ins = lim

var x=[]
var y=[]
var z=[]

function setup() {
  createCanvas(500, 300,WEBGL);
  angleMode(DEGREES)
  colorMode(HSB)

  for(i=0;i<=lim;i+=p){
    x.push(50*cos(i))
    y.push(50*sin(i))
    z.push(i/zoom)
  }
}

function draw() {
  background(0);
  
  translate(0,-lim/(2*zoom),-100)
  //rotateX(frameCount)
  //rotateZ(frameCount)
  rotateY(-frameCount*10)
  
  for(i=0;i<=lim_ins;i+=p){
    //strokeWeight(1)
    //stroke(255)
    //point(x[i],z[i],y[i])
    //point(x[i],y[i],z[i])
    //point(z[i],y[i],x[i])
    stroke(map(i,0,lim,0,255),100,100)
    //strokeWeight(1)
    line(0,lim/(2*zoom),0,x[i],z[i],y[i])
  }
}