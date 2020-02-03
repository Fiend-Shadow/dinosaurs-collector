'use strict'

class Game{
    constructor (){
    this.canvas = null;
    this.ctx = null;
    this.dinosaurs = [];
    this.player1 = null;
    this.brick = [];
    this.gameIsOver=false;
    this.gameScreen=null;
    this.score =0;
    this.backImg = new Image();
    this.backImg.src = "./images/62999356-seamless-game-background-flat-style-2d-game-application.jpg"
}
  start  () {
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


        this.handleKeyDown = event => {

            if (event.key === "ArrowUp"){
                this.player1.move();
                
                }
            }
        
        document.body.addEventListener("keydown", this.handleKeyDown.bind(this));
        
        
        this.startLoop();


}

  startLoop () {
    let loop =  ()=>{
        if (Math.random()>0.99){
            
            let randomY = ((this.canvas.height-180) * Math.random())+100;
            let newDinosaurs = new Dinosaurs (this.canvas, randomY);
            this.dinosaurs.push(newDinosaurs);
            
        }
        if (Math.random()>0.99){
            Math.random();
            let newBrick = new Bricks(this.canvas);
            this.brick.push(newBrick);
        
        }
        this.collisions();


        
        this.player1.jump();


        this.dinosaurs = this.dinosaurs.filter ( (dinosaur) => {
            dinosaur.updatePostion();
            return dinosaur.insideScreen();
        });

        this.brick = this.brick.filter (br=>{
            br.updatePostion();
            return br.insideScreen();
        });

        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

        // this.ctx.drawImage(this.backImg, 0, 0, this.canvas.width, this.canvas.height);

        this.player1.draw();

        this.dinosaurs.forEach((dinos) => {
            dinos.draw();
        });
        this.brick.forEach((br)=>{
            br.draw();
        });




        if (!this.gameIsOver){
            window.requestAnimationFrame(loop);
        }
    };


    window.requestAnimationFrame(loop);
}

  collisions () {

    
    this.dinosaurs.forEach((element)=>{
        if (this.player1.didCollideDinosaurs(element)){
        
        this.score ++;
        

         this.scoreElement.innerHTML = this.score;
        element.x = 0 - element.size;
        }
        // else if (!this.player1.didCollideDinosaurs(element)){
        //   this.score --;
        // }
        });
        console.log(this.score);
        

        this.brick.forEach((element) => {
            if (this.player1.didCollideBricks(element)){
            
                
            this.gameOver();
        }
    });
}



 passGameOverCallBack () {
    this.onGameOverCallBack = this.gameOver;
}

 setGameOver () {
    
}

 gameOver  (){
    this.gameIsOver = true;
    this.passGameOverCallBack();

};

 removeGameScreen () {
    this.gameScreen.remove();
}
}