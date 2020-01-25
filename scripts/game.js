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
        this.canvasContainer = document.querySelector(".convas-containers");
        this.canvas = this.gameScreen.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");


        this.scoreElement = this.gameScreen.querySelector(".score .value");

        this.containerWidth = this.canvasContainer.offsetWidth;
        this.containerHeight = this.canvasContainer.offsetHeight;
        this.canvas.setAttribute("width", this.containerWidth);
        this.canvas.setAttribute("height",this.containerHeight);


        this.player = {};
        this.player = new Player(this.canvas);

        
        this.handleKeyDown = function (event) {

            if (event.key === "Space"){
                this.player.jump();
            }
        }
        document.body.addEventListener("keydown", this.handleKeyDown.bind(this));
        
        
        this.startLoop();


}

Game.prototype.startLoop = function () {}

Game.prototype.collisions = function () {}

Game.prototype.updateGameStats = function () {}

Game.prototype.passGameOverCallBack = function (callback) {}

Game.prototype.setGameOver= function () {}

Game.prototype.removeGameScreen = function () {}
