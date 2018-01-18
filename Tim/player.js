function Player(){
    this.X = width/2;
    
    this.show = function(){
        fill(255);
        ellipse(this.X, 400, 50, 40);
    }
    this.move = function(dir){
        this.X += dir*5;
    }
}


