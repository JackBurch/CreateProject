function Food(){
    
    this.randomPos = function(){
        this.x = (pixelWidth/2 + (Math.round(Math.random() * width) % (width/pixelWidth)) * pixelWidth);
        this.y = (pixelWidth/2 + (Math.round(Math.random() * width) % (height/pixelWidth)) * pixelWidth);    
    }
    
    this.show = function(){
        fill(255);
        noStroke();
        ellipse(this.x, this.y, pixelWidth, pixelWidth);
    }
}