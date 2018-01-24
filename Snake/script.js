//General setup for game
var pixelWidth = 20;
var frameRateMultiplier = 10;
var gameState = 0;
var score = 0;
var difficulty = 2;
var pauseCounter = 0;
var menuSelected = 0;
var pauseSelected = 0;


// These variables are the parameters passed into snake.move()
var moveX = 1;
var moveY = 0;

// Objects
var snake;
var food;
var gui;

function setup() {
    createCanvas(1280, 720);
    difficulty = parseInt(difficulty, 10);
    snake = new Snake();
    food = new Food();
    gui = new Gui();
}

// Runs every frame
function draw() {
    frameRate(difficulty * frameRateMultiplier);
    background(51);
    if (gameState === 0){
        gui.beginning();
    } else if (gameState === 1){
        snake.checkCollision();
        snake.move();
        snake.show();
        food.show();
        gui.inGame();
        checkIfEaten();
    } else if (gameState === 2){
        snake.show();
        food.show();
        gui.pause();
    } else if (gameState === 3){
        snake.show();
        food.show();
        gui.gameOver();
    }
}

// To check if arrow keys are pressed, changing the direction of snake
function keyReleased(){
    
    if (gameState === 0){
        
        if (keyCode === DOWN_ARROW) {
            if (menuSelected != 1) {
                menuSelected++;
            } else {
                menuSelected = 0;
            }
        } else if (keyCode === UP_ARROW) {
            if (menuSelected != 0) {
                menuSelected--;
            } else {
                menuSelected = 1;
            }
        }
        
        if (menuSelected === 1) {
            
            if (keyCode === RIGHT_ARROW) {
                
                if (difficulty != 3) {
                    difficulty++;
                } else {
                    difficulty = 1;
                }
            
            } else if (keyCode === LEFT_ARROW) {
                
                if (difficulty != 1) {
                    difficulty--;
                } else {
                    difficulty = 3;
                }
            }
        }
        
        if (keyCode === ENTER && menuSelected === 0) {
            gameState = 1;
            snake.generateTail();
            food.randomPos();
        }
        
    }
    
    if (gameState === 1){
        
        if (keyCode === RIGHT_ARROW && (keyCode != UP_ARROW || keyCode != DOWN_ARROW)){
            if (moveX != -1){
                moveX = 1;
                moveY = 0;
            }
        } else if (keyCode === LEFT_ARROW && (keyCode != UP_ARROW || keyCode != DOWN_ARROW)){
            if (moveX != 1){
                moveX = -1;
                moveY = 0;
            }
        } else if (keyCode === UP_ARROW && (keyCode != RIGHT_ARROW || keyCode != LEFT_ARROW)){
            if (moveY != 1){
                moveY = -1;
                moveX = 0;
            }
        } else if (keyCode === DOWN_ARROW && (keyCode != RIGHT_ARROW || keyCode != LEFT_ARROW)){
            if (moveY != -1){
                moveY = 1;
                moveX = 0;
            }
        }
        
        // To pause the game
        if (keyCode === ESCAPE){
            gameState = 2;
        }
    }
    
    if (gameState === 2) {
        
        if (keyCode === DOWN_ARROW) {
            if (pauseSelected != 1) {
                pauseSelected++;
            } else {
                pauseSelected = 0;
            }
        } else if (keyCode === UP_ARROW) {
            if (pauseSelected != 0) {
                pauseSelected--;
            } else {
                pauseSelected = 1;
            }
        }
        
        if (keyCode === ENTER) {
            if (pauseSelected === 0) {
                gameState = 1;
            } else if (pauseSelected === 1) {
                gameState = 0;
                resetGame();
            }
            
        }
    }
    
    if (gameState === 3) {
        if (keyCode === ENTER) {
            gameState = 0;
            resetGame();
        }
    }
    
    // Check gameState
    if(keyCode === CONTROL)
    {
        console.log(gameState);
    }
    
}

function resetGame() {
    score = 0;
    for (var i = 1; i < snake.tailLength; i++){
        snake.tailX.pop();
        snake.tailY.pop();
    }
    snake.tailLength = 1;
    snake.generateTail();
}

// If the (x, y) of snake and food are the same, the food is eaten, spawned in a new place, and score is added
function checkIfEaten(){
    if (snake.tailX[0] === food.x && snake.tailY[0] === food.y){
        food.randomPos();
        snake.growTail();
        score += 5;
    }
}