function Pipe() {
    this.top = random(0, height/2);
    this.bottom = random(0, height/2);
    this.x = width;
    this.W = 20;
    this.speed = 2;
    
    this.hits = function(bird) {
        if (bird.y < this.top || bird.y > height - this.bottom){
            if (bird.x > this.x && bird.x < this.x + this.w)
            return true;
        }
    }
    
    this.show = function() {
        fill(225);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }

    this.update = function() {
        this.x -= this.speed;
    }
    
    this.offscreen = function(){
        if (this.x < - this.w) {
            return true;
            } else {
            return false;
            }
    }

}
    