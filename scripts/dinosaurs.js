'use strict'

function Dinosaurs(canvas , y){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.size = 30;
    this.x = canvas.width +this.size;
    this.y = y;
    this.speed = 5;
}

Dinosaurs.prototype.draw = function () {
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(
        this.x,
        this.y,
        this.size,
        this.size,
    );
}

Dinosaurs.prototype.updatePostion = function () {
    this.x = this.x - this.speed;
}

Dinosaurs.prototype.insideScreen = function () {
    return this.x + this.size / 2 >0;
}