'use strict'

function Player(canvas){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.score = 0;
  this.size = 80;
  this.x = 50;
  this.y = canvas.height-50;


}

Player.prototype.didCollideDinosaurs = function (dinosaurs) {}

Player.prototype.didCollideBricks = function (brick) {}

Player.prototype.handleScreenCollisions = function () {}

Player.prototype.score = function () {
    if (score === "up"){
        score++ ;
    }
    else if (score === "down"){
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

Player.prototype.jump = function () {
}