'use strict'

function Game(){
    this.canvas = null;
    this.ctx = null;
    this.dinosaurs = [];
    this.player1 = null;
    this.brick = [];
    this.gameIsOver=false;
    this.gameScreen=null;
    this.score =0;
}
Game.prototype.start = function () {
        this.canvasContainer = document.querySelector(".canvas-container");
        this.canvas = this.gameScreen.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        
        


        this.scoreElement = this.gameScreen.querySelector(".score .value");


        this.containerWidth = this.canvasContainer.offsetWidth;
        this.containerHeight = this.canvasContainer.offsetHeight;
        this.canvas.setAttribute("width", this.containerWidth);
        this.canvas.setAttribute("height",this.containerHeight);


        //this.player = {};
        this.player1 = new Player(this.canvas);


        this.handleKeyDown = function (event) {

            if (event.key === "ArrowUp"){
                this.player1.move();
                
                }
            }
        
        document.body.addEventListener("keydown", this.handleKeyDown.bind(this));
        
        
        this.startLoop();


}

Game.prototype.startLoop = function () {
    var loop = function (){
        if (Math.random()>0.99){
            
            var randomY = (this.canvas.height-70) * Math.random();
            var newDinosaurs = new Dinosaurs (this.canvas, randomY);
            this.dinosaurs.push(newDinosaurs);
            
        }
        if (Math.random()>0.99){
            Math.random();
            var newBrick = new Bricks(this.canvas);
            this.brick.push(newBrick);
        
        }
        this.collisions();


        
        this.player1.jump();


        this.dinosaurs = this.dinosaurs.filter (function (dinosaur){
            dinosaur.updatePostion();
            return dinosaur.insideScreen();
        });

        this.brick = this.brick.filter (function (br){
            br.updatePostion();
            return br.insideScreen();
        });

        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

        this.player1.draw();

        this.dinosaurs.forEach(function(dinos){
            dinos.draw();
        });
        this.brick.forEach(function(br){
            br.draw();
        });




        if (!this.gameIsOver){
            window.requestAnimationFrame(loop);
        }
    }.bind(this);


    window.requestAnimationFrame(loop);
}

Game.prototype.collisions = function () {

    
    this.dinosaurs.forEach(function(element){
        if (this.player1.didCollideDinosaurs(element)){
        
        this.score ++;
         this.scoreElement.innerHTML = this.score;
        element.x = 0 - element.size;
        }
        // else if (!this.player1.didCollideDinosaurs(element)){
        //   this.score --;
        // }
        }.bind(this));
        console.log(this.score);

        this.brick.forEach(function(element){
            if (this.player1.didCollideBricks(element)){
            
                
            this.gameOver();
        }
    }.bind(this));
}

Game.prototype.updateGameStats = function () {}

Game.prototype.passGameOverCallBack = function () {
    this.onGameOverCallBack = this.gameOver;
}

Game.prototype.setGameOver= function () {
    
}

Game.prototype.gameOver = function (){
    this.gameIsOver = true;
    this.passGameOverCallBack();

};

Game.prototype.removeGameScreen = function () {
    this.gameScreen.remove();
}
