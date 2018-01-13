function Gui(){
    
    // When game first loads and gameState === 0
    this.start = function (){
        
    }
    
    // While the game is being played, gameState === 1
    this.inGame = function (){
        score += difficulty;
        fill(255);
        noStroke();
        var scoreText = "Score: " + score.toString();
        textFont("Calibri");
        text(scoreText, width - textWidth(scoreText) - 10, 10);
    }
    
    // While the game is paused, gameState === 2
    this.pause = function(){
        
    }
    
    // After the game is over, game state === 3
    this.gameOver = function(){
        
    }
}