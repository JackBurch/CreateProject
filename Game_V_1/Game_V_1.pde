float xPos=200;
int xDir=7;
int yDir=7;
int a = 0;
float yPos = 200;
int di = 30;
boolean on = false;
boolean colorChange = true;
int rectDi = 100;

void setup()
{
  size (1000,1000);
  smooth();
  background(0);
  noStroke();
  
}

void draw()
{
  background(0);
    float r = random (1, 255);
    float g = random (1, 255);
    float b = random (1, 255);
  fill(0,255,0);
  if (mouseButton == LEFT && on == true){
    a = a + 100;
    float c = random(40,width - di);
    xPos = c;
    float d = random(40 + rectDi,height - di);
    yPos = d;
    
  }
  if (colorChange == true){
    fill(r,g,b);
  }
  rect(xPos, yPos,di, di);
  xPos=xPos+xDir;
  if (xPos>width-di || xPos<0)
  {
    xDir=-xDir;
  }
  yPos=yPos+yDir;
  if (yPos>height-di || yPos<100)
  {
    yDir=-yDir;
  }
  
  if(mouseX >= xPos && mouseX <= xPos+di && 
      mouseY >= yPos && mouseY <= yPos+di) {
    on = true;
  }else{
    on = false;
  }
  rectangle();
  scoreboard();
}
void scoreboard(){
  fill(0);
  textSize(100);
  text("Score:" + a,100,90);
}
void rectangle(){
fill(100,100,300);
  rect(0,0,width,rectDi);
}