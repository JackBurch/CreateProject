var xPos=200;
var xDir=7;
var yDir=7;
var a = 0;
var yPos = 200;
var di = 30;
var on = false;
var colorChange = true;
var rectDi = 100;
var started = false;
function setup () {
    createCanvas(1280, 720);
}

function draw (){
  if (started == true){
    background(0);
    var r = random (1, 255);
    var g = random (1, 255);
    var b = random (1, 255);
  fill(0,255,0);
  if (mouseButton == LEFT && on == true){
    a = a + 100;
    var c = random(40,width - di);
    xPos = c;
    var d = random(40 + rectDi,height - di);
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
  } else{
    on = false;
  }
  rectangle();
  scoreboard();
  }else{
      intro();
  }
}
function intro(){
    background(100,100,300);
    rect2();
    textSize(70);
    fill(0);
    text("Welcome to Bounce 3", 300, height/3);
    text("Start", 565, height -height/3 - 25);
    
    
}

function rect2(){
    fill(255, 179, 71)
    var a = width/2 - 225;
    var b = height/2 + 25;
    var c= height/2 + 100;
    var d = 100;
    rect(a,b,c,d,25,25,25,25);
   if(mouseX >= a && mouseX <= a + c && mouseY >= b && mouseY <= b + d){
       started = true;
       }
}
function scoreboard(){
  fill(0);
  textSize(100);
  text("Score:" + a,100,90);
}
function rectangle(){
fill(100,100,300);
  rect(0,0,width,rectDi);
}