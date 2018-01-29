
function setup () {
    createCanvas(1280, 720);
    stroke(0);
    fill(255);
    strokeWeight(!0);
    rect(0,0,1279,719);
    
}

function draw (){
    strokeWeight(10);
    
    rects();
   
}
function mouseDragged(){
    strokeWeight(5);
    line(mouseX,mouseY, pmouseX, pmouseY); 
    changeColor();  
    
}

function changeColor(){
    
}
function rects(){   
    
    strokeWeight(1);
    fill(255,0,0);
    var rect1 = rect(0,0,100,100);
    fill(0,255,0);
    var rect2 = rect(100,0,100,100);
    fill(0,0,255);
    rect(200,0,100,100);
}