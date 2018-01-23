var x, y, speedX, speedY;
var diam = 10;
var rectSize = 200;
var img;  
var title;
function setup() {
img = loadImage("TRONG BALLLLLLL.png");
title = loadImage("title middle final.png");
size(1300,750);

reset();}
function reset() {
x = width/2;
y = height/2;
speedX = random(4, 6);
speedY = random(4, 6);
}

function draw() { 
  
  background(0,150,255);
  image(title, 450,300);
  image(img,x-100, y-80, 120, 120);
  
  fill(100,100,100);
  rect(width-30, mouseY-rectSize/2, 10, rectSize);
  x += speedX;
  y += speedY;
  if ( x > width-30 && x < width -20 && y > mouseY-rectSize/2 && y < mouseY+rectSize/2 ) {
    speedX = speedX * -1;
  } 

  // if ball hits wall, change direction of X
  if (x < 25+35) {
    speedX *= -1.1;
    speedY *= 1.1;
    x += speedX;} 
if ( y > height-75 || y < 0+60 ) {
speedY *= -1;
}
}

function mousePressed() {
  reset();
}

void mousePressed() {
  reset();
}
