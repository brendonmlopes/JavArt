function setup() {
  createCanvas(400, 400, WEBGL);
}

var lim = 10;
var len_r1 = 0.6;
var len_r2 = 0.9;
var len_ini = 10;

function brick(l, angle) {
  strokeWeight(map(l, 0, len_ini, 1, 5));
  stroke(
    map(l, 0, len_ini, 0, 150),
    map(l, 0, len_ini, 200, 50),
    map(l, 0, len_ini, 0, 10)
  );
  line(0, 0, 0, 1.5*l);
  //point(0, l);
  translate(0, l);
  rotate(1.3 * angle);
  angle += 10;
  if (l >= lim) {
    push();
    rotateZ(-angle);
    rotateY(angle);
    brick(len_r1 * l, angle);
    pop();
    push();
    rotateY(-1.5 * angle);
    rotateX(-2 * angle);
    brick(len_r1 * l, angle);

    pop();
    brick(len_r2 * l, -angle);
  }
}

function draw() {
  rotateY(frameCount);
  angleMode(DEGREES);
  translate(-200, -200, -20);
  background(0);
  translate(width / 2, height);
  rotate(200);
  brick(len_ini, 20);
  //if(lim>=10){
  //lim-=0.1
  //}
  //noLoop()
  if(len_ini<=50){
    len_ini+=0.1
  }
}
