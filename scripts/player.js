'use strict'

function Player(canvas){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.score = 0;
  this.size = 50;
  this.x = 50;
  this.y = canvas.height-50;
  this.vy = -5;
  this.speed = 2;

}

Player.prototype.didCollideDinosaurs = function (dinosaurs) {}

Player.prototype.didCollideBricks = function (brick) {}



Player.prototype.score = function (sc) {
    if (sc === "up"){
        score++ ;
    }
    else if (sc === "down"){
        score-- ;
    }
}

Player.prototype.draw = function () {
    this.ctx.fillStyle = "red";

    this.ctx.fillRect(
        this.x,
        this.y,
        this.size,
        this.size
    );
    
}


Player.prototype.move = function () {
    this.y += this.vy ;
}