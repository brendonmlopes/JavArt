var plist = []
var slist = []
var np,ns;
var xoffp = []
var yoffp = [];
var zoffp = [];
var screenS;

function setup() {
  createCanvas(3840, 2160,WEBGL);
  angleMode(DEGREES)
  colorMode(HSB)
  np=100
  ns=2000
  screenS = 2000
  
  for(i=0;i<=ns-1;i++){
    slist[i] = new Star(random(-screenS,screenS),random(-screenS,screenS),random(-screenS,screenS),random(1,5))
    }
  
  for(i=0;i<=np-1;i++){
    plist[i] = new Planet(random(10,50))
    xoffp[i] = random(-screenS,screenS)
    yoffp[i] = random(-screenS/10,screenS/10)
    zoffp[i] = random(-screenS,screenS)
  }
}

function draw() {
  background(0);
  //rotateY(frameCount)
  //rotateX(frameCount/2)
  translate(0,0,-screenS)
  //translate(0,0,frameCount%(screenS*2))
  rotateX(mouseY/1)
  rotateY(mouseX/1)
  noFill()
  stroke(255)
  //box(screenS*2,screenS*2,screenS*2)
  noStroke()
  //sphere(5)
  //pointLight(60,30,100,0,0,0)
  pointLight(0,0,255,0,0,0)
  pointLight(0,0,255,0,0,0)
  pointLight(0,0,255,0,0,0)
  pointLight(0,0,255,0,0,0)
  
  //ambientLight(100)
  //ambientMaterial(60,30,10)
  fill(0,0,255);
  for(i=0;i<=ns-1;i++){
    slist[i].show()
  }
  
  sun = new Star(0,0,0,300);
  push()
  colorMode(RGB)
  fill(255,255,255)
  sphere(50)
  fill(255,255,100,240)
  sun.show()
  pop()
  
  for(i=0;i<=np-1;i++){
    push()
    ambientMaterial(map(i,0,np-1,0,255),20,7)
    translate(xoffp[i],yoffp[i],zoffp[i])
    plist[i].show()
    pop()
  }
  noLoop()
}
      
var Planet =  function(size){
    this.size = size
    this.show = function(){
      sphere(this.size)
    }
  }

var Star = function (x,y,z,size){
  this.size = size
  this.x = x
  this.y = y
  this.z = z
  this.show = function(){
    push()
    translate(this.x,this.y,this.z)
    push()
    //fill(random(250,255),255,255)
    //fill(0,0,100)
    sphere(this.size)
    pop()
    pop()
    pointLight(0, 0, 255, this.x, this.y, this.z)
    pointLight(0, 0, 255, this.x, this.y, this.z)
    pointLight(0, 0, 255, this.x, this.y, this.z)
  }
}