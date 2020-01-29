'use strict'

function buildDom(htmlString){
    var div=document.createElement('div');
    div.innerHTML=htmlString;
    return div.children[0];
}

function main(){
    var game;
    var splashScreen;
    var gameOverScreen;



    function buildSplashScreen () {
        splashScreen = buildDom(`
        <main>
            <h1> dinosaurs collector</h1>
            <button>start</button>
        </main>    
        `);

        document.body.appendChild(splashScreen);

        var startButton = splashScreen.querySelector('button');

        startButton.addEventListener("click", startGame);
        
    }

    function removeSplashScreen () {
        splashScreen.remove();
    }

    function buildGameScreen () {
        var gameScreen = buildDom(`
        <main class="game container">
            <header>
              <div class="score">
                <span class="label">Score:</span>
                <span class="value"></span>
              </div>
            </header>  
            <div class="canvas-container">
              <canvas></canvas>
            </div>
        </main>`);
        document.body.appendChild(gameScreen);
        return gameScreen;
    }
    

    

    function removeGameScreen () {
        game.removeGameScreen();
    }
    
    function createGameOverScreen () {
        gameOverScreen = buildDom(`
        <main>
            <h1>Game Over</h1>
            <p>Yout score : <span></span></p>
            <button>Restart</button>
        </main>`);

        var button = gameOverScreen.querySelector("button");
        button.addEventListener("click", startGame);

        // var span =gameOverScreen.querySelector("span");
        // span.innerHTML = score;

        document.body.appendChild(gameOverScreen);
    }

    function removeGameOverScreen () {
        if (gameOverScreen !== undefined) {
    gameOverScreen.remove();
    }
}
    
    function startGame () {
        removeSplashScreen();
        removeGameOverScreen();

        game = new Game();
        game.gameScreen = buildGameScreen();

        game.start();

        Game.prototype.passGameOverCallBack = function (){
            gameOver (game.score);
            console.log("gameover callback");
        };
    }


    function gameOver(score){
        
        removeGameScreen();
        createGameOverScreen();
    }

    buildSplashScreen();

}
window.addEventListener("load", main);