//General setup for game
var pixelWidth = 20;
var frameRateMultiplier = 5;
var gameState = 1;
var score = 0;
var difficulty = 2;
var pauseCounter = 0;

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
    snake.generateTail();
    food.randomPos();
}

// Runs every frame
function draw() {
    frameRate(difficulty * frameRateMultiplier);
    background(51);
    if (gameState === 0){
        gui.beginning();
    } else if (gameState === 1){
        snake.move();
        snake.show();
        snake.checkCollision();
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
function keyPressed(){
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
    
    // Check gameState
    if(keyCode === CONTROL)
    {
        console.log(gameState);
    }
    
    // To pause the game
    if (keyCode === ENTER){
        gameState = 2;
    }
    
}

function mouseClicked() {
    // Different buttons for different game states
    
    // Game state 0, main menu
    if (gameState === 0){
        /*if (mouseX >= (width - textWidth("START"))/2 && mouseX <= (width + textWidth("START"))/2 && mouseY <= height/3 + 2 * textAscent("START") && mouseY >= height/3 + 3 * textAscent("START")){
            textSize(48);
            gameState = 1;
        }*/
        
        if (1 === 0) {
            
        }
    }
}

// If the (x, y) of snake and food are the same, the food is eaten, spawned in a new place, and score is added
function checkIfEaten(){
    if (snake.tailX[0] === food.x && snake.tailY[0] === food.y){
        food.randomPos();
        snake.growTail();
        score += 5;
    }
}