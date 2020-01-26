'use strict'

function Bricks(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getcContext("2d");
    this.size = 30;
    this.x = this.canvas.width + this.size;
    this.y = this.canvas.height - 50;
    this.speed = 5;
}

Bricks.prototype.draw = function () {
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(
        this.x,
        this.y,
        this.size,
        this.size,
    );
}

Bricks.prototype.updatePostion = function () {
    this.x = this.x - this.speed;
}

Bricks.prototype.insideScreen = function () {
    return this.x +this.size / 2 > 0;
}