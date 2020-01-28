'use strict'

function Player(canvas){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.score = 0;
  this.size = 50;
  this.x = 50;
  this.y = this.canvas.height-70;
  this.vy = null;
  this.speed = 0.5;

}

Player.prototype.didCollideDinosaurs = function (dinosaurs) {
    var playerLeft = this.x;
    var playerRight = this.x + this.size;
    var playerTop = this.y;
    var playerBottom = this.y + this.size;

    var dinosaurLeft = dinosaurs.x;
    var dinosaurRight = dinosaurs.x + dinosaurs.size;
    var dinosaurTop = dinosaurs.y;
    var dinosaurBottom = dinosaurs.y + dinosaurs.size;

    var crossLeft = dinosaurLeft <= playerRight && dinosaurLeft >= playerLeft;
    var crossRight = dinosaurRight >= playerLeft && dinosaurRight <= playerRight;
    var crossBottom = dinosaurBottom >= playerTop && dinosaurBottom <= playerBottom;
    var crossTop = dinosaurTop >= playerBottom && dinosaurTop >= playerTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)){
        return true;
    }
    return false;
};

Player.prototype.didCollideBricks = function (brick) {}




Player.prototype.draw = function () {
    this.ctx.fillStyle = "red";
    
    this.ctx.fillRect(
        this.x,
        this.y,
        this.size,
        this.size
        );
        
    }
    
    Player.prototype.jump = function (){
        this.y = this.y +this.vy *this.speed;
        if (this.y < this.canvas.height -200){
            this.vy = 5 ;
        }
        else if (this.y+this.size > this.canvas.height-20){
            this.vy =0;
        }
        
    }
    
    Player.prototype.move = function () {
        this.vy = -5 ;
}