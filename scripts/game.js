'use strict'

function Game(){
    this.canvas = null;
    this.ctx = null;
    this.dinosaurs = [];
    this.brick = [];
    this.gameIsOver=false;
    this.gameScreen=null;
    
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
        this.player = new Player(this.canvas);


        this.handleKeyDown = function (event) {

            if (event.key === "ArrowUp"){
                this.player.move();
                }
            }
        
        document.body.addEventListener("keydown", this.handleKeyDown.bind(this));
        
        
        this.startLoop();


}

Game.prototype.startLoop = function () {
    var loop = function (){
        if (Math.random()>0.98){
            var randomY = this.canvas.height * Math.random();
            var newDinosaurs = new Dinosaurs (this.canvas, randomY);
            this.dinosaurs.push(newDinosaurs);
        }
        
        this.collisions();

        this.dinosaurs = this.dinosaurs.filter (function (dinosaur){
            dinosaur.updatePostion();
            return dinosaur.insideScreen();
        });

        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

        this.player.draw();

        this.dinosaurs.forEach(function(dinos){
            dinos.draw();
        });




        if (!this.gameIsOver){
            window.requestAnimationFrame(loop);
        }
    }.bind(this);


    window.requestAnimationFrame(loop);
}

Game.prototype.collisions = function () {}

Game.prototype.updateGameStats = function () {}

Game.prototype.passGameOverCallBack = function (callback) {}

Game.prototype.setGameOver= function () {}

Game.prototype.removeGameScreen = function () {}
