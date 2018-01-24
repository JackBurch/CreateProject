function Snake(){
    
    // Initial setup of snake
    this.x = width/2 - pixelWidth/2;
    this.y = height/2 - pixelWidth/2;
    this.tailLength = 1;
    this.initialTailLength = 4;
    
    this.tailX = new Array(this.tailLength);
    this.tailY = new Array(this.tailLength);
    
    // Generate tail
    this.generateTail = function(){
        this.tailX[0] = this.x;
        this.tailY[0] = this.y;
        for (var i = 1; i < this.initialTailLength; i++){
            this.growTail();
        }
    }
    
    // Movement of snake in x and y directions
    this.move = function(){
        
        // Display positions of the snake's body parts.
        for (var i = 0; i < this.tailLength; i++){
            console.log(this.tailX[i].toString() + " " + this.tailY[i].toString());
        }
        
        // Move the snake
        this.tailX.unshift(this.tailX[0] += moveX * pixelWidth);
        this.tailY.unshift(this.tailY[0] += moveY * pixelWidth);
        this.tailX.pop();
        this.tailY.pop();
        
    }
    
    this.growTail = function(){
        this.tailLength++;
        this.tailX.push(Math.random() * - 200);
        this.tailY.push(Math.random() * -200);
    }
    
    // Called every frame by main draw function, check to see if snake hits itself
    this.checkCollision = function(){
        for (var i = 2; i < this.tailLength; i++){
            if (this.tailX[0] === this.tailX[i] && this.tailY[0] === this.tailY[i]){
                // Game over
                gameState = 3;
            }
        }
        
        if (this.tailX[0] > width){
            this.tailX[0] = -pixelWidth/2;
        } else if (this.tailX[0] < 0){
            this.tailX[0] = width + pixelWidth/2;
        }
        
        if (this.tailY[0] > height){
            this.tailY[0] = -pixelWidth/2;
        } else if (this.tailY[0] < 0){
            this.tailY[0] = height + pixelWidth/2;
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