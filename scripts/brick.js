'use strict'

function Bricks(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.size = 50;
    this.x = this.canvas.width + this.size;
    this.y = this.canvas.height - 75;
    this.speed = 5;
    this.imgBrick;
}

Bricks.prototype.draw = function () {
    // this.ctx.fillStyle = "blue";
    // this.ctx.fillRect(
    //     this.x,
    //     this.y,
    //     this.size,
    //     this.size,
    // );
    this.imgBrick = new Image();
    this.imgBrick.src = "./images/3d-model-snow-pine_D-removebg-preview.png";
    this.ctx.drawImage(this.imgBrick,this.x,this.y,this.size,this.size);
}

Bricks.prototype.updatePostion = function () {
    this.x = this.x - this.speed;
}

Bricks.prototype.insideScreen = function () {
    return this.x +this.size / 2 > 0;
}