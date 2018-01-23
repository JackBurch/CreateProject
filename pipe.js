function Pipe() {
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.W = 20;
    this.speed = 1;
    
    this.show = function() {
        fill(225);
        rect(this.x,o,this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }

    this.update = function() {
        this.x -= this.speed;
    }


}
    