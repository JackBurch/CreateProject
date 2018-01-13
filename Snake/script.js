//General setup for game
var pixelWidth = 20;
var frameRateMultiplier = 5;

// These variables are the parameters passed into snake.move()
var moveX = 1;
var moveY = 0;

// Objects
var snake;
var food;

// Score
var score = 0;

function setup() {
    createCanvas(1280, 720);
    var difficulty = prompt("Enter your preferred difficulty, 1 = easy, 2 = medium, 3 = hard", "2");
    frameRate(parseInt(difficulty, 10) * frameRateMultiplier);
    snake = new Snake();
    food = new Food();
    food.randomPos();
}

// Runs every frame
function draw() {
    background(51);
    snake.move(moveX, moveY);
    snake.show();
    snake.checkCollision();
    food.show();
    checkIfEaten();
}

// To check if arrow keys are pressed, changing the direction of snake
function keyPressed(){
    if (keyCode === RIGHT_ARROW){
        if (moveX != -1){
            moveX = 1;
            moveY = 0;
        }
    } else if (keyCode === LEFT_ARROW){
        if (moveX != 1){
            moveX = -1;
            moveY = 0;
        }
    } else if (keyCode === UP_ARROW){
        if (moveY != 1){
            moveY = -1;
            moveX = 0;
        }
    } else if (keyCode === DOWN_ARROW){
        if (moveY != -1){
            moveY = 1;
            moveX = 0;
        }
    }
    // To pause the game
    if (keyCode === ENTER){
        moveX = 0;
        moveY = 0;
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