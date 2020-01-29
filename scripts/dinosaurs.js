'use strict'

function Dinosaurs(canvas , yTop){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.size = 30;
    this.x = canvas.width +this.size;
    this.y = yTop;
    
    this.speed = 5;
    this.imgDino;
}

Dinosaurs.prototype.draw = function () {
    // this.ctx.fillStyle = "grey";
    // this.ctx.fillRect(
    //     this.x,
    //     this.y,
    //     this.size,
    //     this.size,
    // );
    this.imgDino = new Image();
    this.imgDino.src = "/images/tyrannosaurus-t-shirt-dino-t-rex-runner-2-lonely-t-rex-run-2-google-chrome-8-bit.jpg"
    this.ctx.drawImage(this.imgDino,this.x,this.y,this.size,this.size);
}

Dinosaurs.prototype.updatePostion = function () {
    this.x = this.x - this.speed;
}

Dinosaurs.prototype.insideScreen = function () {
    return this.x + this.size / 2 >0;
}