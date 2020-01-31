'use strict'

function buildDom(htmlString){
    var div=document.createElement('div');
    div.innerHTML=htmlString;
    return div;
}

function main(){
    var game;
    var splashScreen;
    var gameOverScreen;



    function buildSplashScreen () {
        splashScreen = buildDom(`
        <nav>
        <ul id="nav_bar">
          <li class="nav-links" id="gmail"><a href="#">Dinosaur Mail</a></li>
          <li class="nav-links"><a href="#">Images</a></li>
          <li id="sign_in"><a href="#">Sign In</a></li>
        </ul>  
      </nav>  
        <div class="google">
        <a href="#" id="google_logo"><img src="./images/output-onlinestringtools.png" alt=" photo google-logo_zpspkcztsjo.png"/></a>
      </div>
      <div class="form">  
        <form>
          <label for="form-search"></label>
          <input type="text" id="form-search" placeholder="Press START!">
        </form>
      </div>  
      <div class= "buttons">  
      <button type="button" id = "google">Start!</button>
      <input type="submit" value="Dinosaur Collection" id="im_feeling_lucky">
    </div>
    <footer>
        <ul class="footer-left">
          <li><a href="#">Advertising</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">About</a></li> 
        </ul>
        <ul class="footer-right">    
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Settings</a></li>
        </ul>       
    </footer>  
        
        `);

        document.body.appendChild(splashScreen);

        var startButton = splashScreen.querySelector('.buttons #google');

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
        <nav>
        <ul id="nav_bar">
          <li class="nav-links" id="gmail"><a href="#">Dinosaur Mail</a></li>
          <li class="nav-links"><a href="#">Images</a></li>
          <li id="sign_in"><a href="#">Sign In</a></li>
        </ul>  
      </nav>  
        <div class="google">
        <a href="#" id="google_logo"><div><img src="./images/output-onlinestringtools (1).png"/><span class="sco"> ${game.score}</span></div></a>
      </div>
      <div class="form">  
        <form>
          <label for="form-search"></label>
          <input type="text" id="form-search" placeholder="Good Luck next time">
        </form>
      </div>  
      <div class= "buttons">  
      <button type="button" id = "google">Restart !? </button>
      <input type="submit" value="Dinosaur Collection" id="im_feeling_lucky">
    </div>
    <footer>
        <ul class="footer-left">
          <li><a href="#">Advertising</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">About</a></li> 
        </ul>
        <ul class="footer-right">    
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Settings</a></li>
        </ul>       
    </footer> 
        `);

        

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