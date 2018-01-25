var diffHeight = 0;

function Gui(){
    
    // When game first loads and gameState === 0
    this.beginning = function (){
        fill(255);
        diffHeight = height/3 + 2 * textAscent(title) + 1.2 * textAscent(start);
        var title = "SNAKE";
        var start = "START";
        var diffText = "DIFFICULTY";
        var diffDown = "<";
        var diffUp = ">";
        
        if (difficulty === 1){
            diffText = "EASY";
        } else if (difficulty === 2) {
            diffText = "MEDIUM";
        } else if (difficulty === 3) {
            diffText = "HARD";
        }
        
        textFont("Calibri");
        textSize(96);
        text(title, (width - textWidth(title))/2, height/3);
        
        textSize(48);
        
        if (menuSelected === 0){
            fill(211, 84, 0);
        } else {
            fill(255);
        }
        text(start, (width - textWidth(start))/2, height/3 + 2 * textAscent(title));
        
        if (menuSelected === 1){
            fill(211, 84, 0);
        } else {
            fill(255);
        }
        text(diffText, (width - textWidth(diffText))/2, diffHeight);
        
        text(diffDown, (width - textWidth(diffText))/2 - textWidth(diffDown) - 20, diffHeight);
        
        text(diffUp, (width + textWidth(diffText))/2 + 20, diffHeight);
        
    }
    
    // While the game is being played, gameState === 1
    this.inGame = function (){
        score ++;
        fill(255);
        noStroke();
        var scoreText = "Score: " + score.toString();
        textSize(36);
        textFont("Calibri");
        text(scoreText, width - textWidth(scoreText) - 10, textAscent(scoreText));
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
        if (pauseSelected === 0){
            fill(211, 84, 0);
        } else {
            fill(255);
        }
        text(resume, (width - textWidth(resume))/2, height/4 + 1.2 * textAscent(pauseTitle));
        if (pauseSelected === 1){
            fill(211, 84, 0);
        } else {
            fill(255);
        }
        text(menu, (width - textWidth(menu))/2, height/4 + 2.4 * textAscent(menu));
    }
    
    // After the game is over, game state === 3
    this.gameOver = function(){
        fill(255);
        var endTitle = "GAME OVER";
        var scoreLabel = "YOUR SCORE";
        var scoreText = score.toString();
        
        var playAgain = "PLAY AGAIN";
        var menuText = "MENU";
        
        textSize(72);
        text(endTitle, (width - textWidth(endTitle))/2, height/4);
        textSize(64);
        text(scoreLabel, (width - textWidth(scoreLabel))/2, height/3 + textAscent(endTitle));
        text(scoreText, (width - textWidth(scoreText))/2, height/3 + textAscent(endTitle) + 1.1 * textAscent(scoreLabel));
        textSize(48);
        if (endSelected === 0){
            fill(211, 84, 0);
        } else {
            fill(255);
        }
        text(playAgain, (width - textWidth(playAgain))/2, 3 * height/5);
        if (endSelected === 1){
            fill(211, 84, 0);
        } else {
            fill(255);
        }
        text(menuText, (width - textWidth(menuText))/2, 3 * height/5 + 1.2 * textAscent(playAgain));
        
    }
}