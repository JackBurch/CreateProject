function Snake(){
    
    // Initial setup of snake
    this.x = width/2 - 10;
    this.y = height/2 - 10;
    this.tailLength = 4;
    
    this.tailX = [width/2 - 10, width/2 - 10 - pixelWidth, width/2 - 10 - 2 * pixelWidth, width/2 - 10 - 3 * pixelWidth];
    this.tailY = [height/2 - 10, height/2 - 10, height/2 - 10, height/2 - 10];
    
    // Movement of snake in x and y directions
    this.move = function(dirX, dirY){
        
        // To make sure snake doesn't turn back on itself
        if (dirX === dirX * -1){
            dirX *= -1;
        }
        
        // Same as above
        if (dirY === dirY * -1){
            dirY *= -1;
        }
        
        // Move the snake
        this.tailX.unshift(this.tailX[0] += dirX * pixelWidth);
        this.tailY.unshift(this.tailY[0] += dirY * pixelWidth);
        this.tailX.pop();
        this.tailY.pop();
        
    }
    
    this.growTail = function(){
        this.tailLength++;
        this.tailX.push(-200);
        this.tailY.push(-200);
    }
    
    // Called every frame by main draw function, check to see if snake hits itself
    this.checkCollision = function(){
        for (var i = 1; i < this.tailLength; i++){
            if (this.tailX[0] === this.tailX[i] && this.tailY[0] === this.tailY[i]){
                // Game over
                gameState = 3;
            }
        }
    }
    
    // Called every frame by main draw function, displays snake
    this.show = function(){
        fill(255);
        noStroke();
        rectMode(CENTER);
        for(var i = 0; i < this.tailLength; i++){
            rect(this.tailX[i], this.tailY[i], pixelWidth, pixelWidth);
        }
    }
}