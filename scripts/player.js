'use strict'

class Player{
    constructor (canvas){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.score = 0;
  this.size = 50;
  this.x = 50;
  this.y = this.canvas.height-70;
  this.vy = null;
  this.speed = 0.7;
  this.imgPlayer;

}

 didCollideDinosaurs (dinosaurs) {
    let playerLeft = this.x;
    let playerRight = this.x + this.size;
    let playerTop = this.y;
    let playerBottom = this.y + this.size;

    let dinosaurLeft = dinosaurs.x;
    let dinosaurRight = dinosaurs.x + dinosaurs.size;
    let dinosaurTop = dinosaurs.y;
    let dinosaurBottom = dinosaurs.y + dinosaurs.size;

    let crossLeft = dinosaurLeft <= playerRight && dinosaurLeft >= playerLeft;
    let crossRight = dinosaurRight >= playerLeft && dinosaurRight <= playerRight;
    let crossBottom = dinosaurBottom >= playerTop && dinosaurBottom <= playerBottom;
    let crossTop = dinosaurTop <= playerBottom && dinosaurTop >= playerTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)){
        return true;
    }
    return false;
};

didCollideBricks  (brick) {
    let playerLeft = this.x;
    let playerRight = this.x + this.size;
    let playerTop = this.y;
    let playerBottom = this.y + this.size;

    let brickLeft =  brick.x;
    let brickRight =  brick.x +  brick.size;
    let brickTop =  brick.y;
    let brickBottom =  brick.y +  brick.size;

    let crossLeft = brickLeft <= playerRight && brickLeft >= playerLeft;
    let crossRight = brickRight >= playerLeft && brickRight <= playerRight;
    let crossBottom = brickBottom >= playerTop && brickBottom <= playerBottom;
    let crossTop = brickTop <= playerBottom && brickTop >= playerTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)){
        return true;
    }
    return false;
}




  draw () {
    // this.ctx.fillStyle = "red";
    
    // this.ctx.fillRect(
    //     this.x,
    //     this.y,
    //     this.size,
    //     this.size
    //     );
        
    this.imgPlayer = new Image();
    this.imgPlayer.src = "./images/google-logo.png";
    this.ctx.drawImage(this.imgPlayer,this.x,this.y,this.size,this.size);
    }
    
    jump (){
        this.y = this.y +this.vy *this.speed;
        
            
            if (this.y < this.canvas.height -170){
                this.vy = 5 ;
            }
            else if (this.y+this.size > this.canvas.height-20){
                this.vy =0;
            }
    
        
    }
    
    move () {
        this.vy = -5 ;
}
}