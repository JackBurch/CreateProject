var player;
var obstacles = [];
function setup(){
    createCanvas(1280, 720);
    
    player = new Player();
    
    for (var i = 0; i < 5; i ++){
       obstacles[i] =  new newO();
    }
    
}

function draw(){
    background(51);
    fill(255);
    player.show();
    obstacles[i].show();
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        player.move(1);
    }else if ( keyCode === LEFT_ARROW){
        player.move(-1 );
    }
}


