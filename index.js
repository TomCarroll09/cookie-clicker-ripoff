let scoreText = document.getElementById("scoreText");
let biscuitButton = document.querySelector("#biscuitButton");
let resetButton = document.getElementById("resetButton");
let buyAutoClicker = document.getElementById("buyAutoClicker");
let score = 0;
let amountOfAutoClickers = 0;
let canClick = true;
biscuitButton.onclick = function() {
  if (canClick) {
    score++;
    scoreText.innerText = score;
    canClick = false;
  
    setTimeout( function() {
        canClick = true;
    }, 300);
    }
  }


resetButton.onclick = function() {
    score = 0;
    amountOfAutoClickers = 0;
    scoreText.innerText = score;
}
buyAutoClicker.onclick = function() {
    if (score < 100) {
        console.log("no mony");
    } else {
        score -= 100;
        amountOfAutoClickers++;
        setInterval(autoClick, 1000);
    }

    
    function autoClick() {

        scoreText.innerText = score;    
        score += amountOfAutoClickers;
        scoreText.innerText = score;
        
    }
}
/**function incrementScore() {
  score++;
  scoreText.innerText = score;
}**/ 