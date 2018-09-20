class snake{

constructor(x,y){
    this.body = [];
    this.head = createVector(x,y);
    this.dirs = createVector(0,0);
}

setDirs(dirs){
 this.dirs = dirs;
}

grow(){
    this.body.push(this.head.copy());
    this.head.add(this.dirs);
}

update(food){
    this.body.push(this.head.copy());
    this.head.add(this.dirs);
    this.body.shift();
    if(this.head.x == food.x && this.head.y == food.y){
        return true;
    }
    
}

checkCollision(w,h){
    if(this.head.x <= 0 || this.head.y <= 0 || this.head.x >= w || this.head.y >= h){
        return true;
    }
    for(let part of this.body){
        if(this.head.x == part.x && this.head.y == part.y){
            return true;
        }
    }
}

show(){
    noStroke();
    fill(0);
    for(let part of this.body){
        rect(part.x,part.y,1,1);
    }

    fill(0,50,0);
    rect(this.head.x,this.head.y,1,1);
}


}