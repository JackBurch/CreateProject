function Gui(){
    
    // When game first loads and gameState === 0
    this.beginning = function (){
        fill(255);
        var title = "SNAKE";
        textFont("Calibri");
        textSize(72);
        text(title, (width - textWidth(title))/2, height/3);
        
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
        fill(255);
        var pauseTitle = "PAUSED";
        var resume = "RESUME";
        var menu = "MENU";
        
        textFont("Calibri");
        textSize(72);
        text(pauseTitle, (width - textWidth(pauseTitle))/2, height/4);
        
        textSize(48);
        text(resume, (width - textWidth(resume))/2, height/4 + 1.2 * textAscent(pauseTitle));
        text(menu, (width - textWidth(menu))/2, height/4 + 2.4 * textAscent(menu));
    }
    
    // After the game is over, game state === 3
    this.gameOver = function(){
        
    }
}