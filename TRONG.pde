float x, y, speedX, speedY;
float diam = 10;
float rectSize = 200;
PImage img;  
void setup() {
  size(500,500);
  fill(0, 255, 0);
  reset();
}

void reset() {
  x = width/2;
  y = height/2;
  speedX = random(3, 5);
  speedY = random(3, 5);
}

void draw() { 
  background(0,150,255);

  ellipse(x, y, 30, 30);
  
  fill(100,100,100);
  rect(width-30, mouseY-rectSize/2, 10, rectSize);
  x += speedX;
  y += speedY;
  if ( x > width-30 && x < width -20 && y > mouseY-rectSize/2 && y < mouseY+rectSize/2 ) {
    speedX = speedX * -1;
  } 

  // if ball hits wall, change direction of X
  if (x < 25) {
    speedX *= -1.1;
    speedY *= 1.1;
    x += speedX;
  }
 
  if ( y > height || y < 0 ) {
    speedY *= -1;
  }
}

void mousePressed() {
  reset();
}