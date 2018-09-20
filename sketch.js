let rez = 10;
let dirs;
let w;
let h;
let currentGoing;

function setup(){
    var canvas = createCanvas(400,400);
    canvas.parent('sketch-holder');
    w=floor(width/rez);
    h=floor(height/rez);
    frameRate(20)
    snake = new snake(w/2,h/2);
    setFood();
    dirs = {
        [RIGHT_ARROW]: createVector(1,0),
        [LEFT_ARROW]: createVector(-1,0),
        [UP_ARROW]: createVector(0,-1),
        [DOWN_ARROW]: createVector(0,1),
    }
}

function setFood(){
    this.food = createVector(floor(random(w)),floor(random(h)))
}

function keyPressed(){
    if(!((currentGoing == RIGHT_ARROW && keyCode == LEFT_ARROW) || (currentGoing == LEFT_ARROW && keyCode == RIGHT_ARROW) || (currentGoing == UP_ARROW && keyCode == DOWN_ARROW) || (currentGoing == DOWN_ARROW && keyCode == UP_ARROW))){
        var dir = dirs[keyCode];
        currentGoing = keyCode;
        if (dir) {
            snake.setDirs(dir);
        }
        if(key == '5'){
            snake.grow();
        }
    }
}

function setScore(s){
    fill(0,0,0)
    textAlign(LEFT)
    textSize(2)
    textFont('Georgia');
    textStyle(BOLD);
    text("Score: "+s,1,2);
    textAlign(RIGHT)
    text("Max Score: 1256",w-1,2);

}

function gameOver(){
    fill(0,0,0,150)
    rect(0,0,w,h)
    fill(255,255,255)
    textAlign(CENTER)
    textSize(5)
    textFont('Georgia');
    textStyle(BOLD);
    text("Game Over 💩",w/2,h/2);
    noLoop()
}


function draw(){
    scale(rez);
    background(220);
    if(snake.update(food)){
        snake.grow();
        setFood();
    }
    snake.show();


    fill(255,0,0);
    rect(this.food.x,this.food.y,1,1);
    setScore(snake.body.length)
    
    if(snake.checkCollision(w,h)){
        gameOver();
    }
}