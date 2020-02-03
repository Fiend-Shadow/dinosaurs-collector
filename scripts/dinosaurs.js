'use strict'

class Dinosaurs{
    constructor (canvas , yTop){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.size = 50;
    this.x = canvas.width +this.size;
    this.y = yTop;
    
    this.speed = 5;
    this.imgDino;
}

draw() {
    // this.ctx.fillStyle = "grey";
    // this.ctx.fillRect(
    //     this.x,
    //     this.y,
    //     this.size,
    //     this.size,
    // );
    this.imgDino = new Image();
    this.imgDino.src = "./images/6199368_0-removebg-preview.png"
    this.ctx.drawImage(this.imgDino,this.x,this.y,this.size,this.size);
}

updatePostion () {
    this.x = this.x - this.speed;
}

insideScreen () {
    return this.x + this.size / 2 >0;
}
}