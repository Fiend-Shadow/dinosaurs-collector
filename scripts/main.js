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
        game.removeGameOverScreen();
    }
    function startGame () {
        removeSplashScreen();

        game = new Game();
        game.gameScreen = buildGameScreen();

        game.start();
    }
    
    function buildGameOverScreen () {}

    function removeGameOverScreen () {}
    
    buildSplashScreen();

}
window.addEventListener("load", main);