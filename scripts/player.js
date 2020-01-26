'use strict'

function Player(canvas){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.score = 0;
  this.size = 50;
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
    if (this.y ===this.canvas.height-50){
        for (let i =0; i <=60;i++){
            if(this.y< this.canvas.height-80){
            this.y -=5;
            }
        
            else if (this.y>0){
                this.y +=5;
            } 
            else if (this.y === 0){
            this.y =this.canvas.height-50
        }
    }
  }
}