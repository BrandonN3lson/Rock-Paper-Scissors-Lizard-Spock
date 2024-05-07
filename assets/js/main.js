document.addEventListener("DOMContentLoaded", function () {
  //rules and username container

  startButton.addEventListener("click", function () {
    let rulesContainer = document.getElementById("rules-container");
    let usernameInput = document.getElementById("username");
    username = usernameInput.value;

    if (username === "") {
      alert("Please enter a username!");
    } else {
      rulesContainer.style.display = "none";
    }
  });

  // collectiong all buttons with class of ".btn" and saving their values in an array called userChoice.

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
      userChoice = event.target.value;
      playGame(userChoice);
    });
  }
});

//game choices
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const choiceImage = ["✊", "🖐️", "✌️", "🦎", "🖖"];

//username
let username = "";

//users choice
let userChoice;

//users choice buttons
let buttons = document.querySelectorAll(".btn");

//start game button on rules container
let startButton = document.getElementById("start-button");

//Lives counter.
let livesRemaining = 5;

//score tracking
let wins = 0;
let losses = 0;
let draws = 0;

// display result of, You win!, you Lose! or Draw!.
let winResult = "You Win!";
let loseResult = "You Lose";
let drawResult = "It's a Draw!";

let result = document.getElementById("result");

function updateHeartDisplay() {
  let heartDisplay = document.getElementById("heart-display");

  if (livesRemaining === 0) {
    endgame();
    resetGame();
  } else {
    livesRemaining--;
    heartDisplay.textContent = "❤️".repeat(livesRemaining);
    updatelosses();
  }
}

/**increases score by increments of 1 */
function updateWin() {
  let userScore = document.getElementById("wins");
  wins++;
  userScore.textContent = wins;
}

/**increases losses by increments of 1 */
function updatelosses() {
  let userLosses = document.getElementById("losses");
  losses++;
  userLosses.textContent = losses;
}

/**increases Draws by increments of 1 */
function updatedraws() {
  let userDraws = document.getElementById("draws");
  draws++;
  userDraws.textContent = draws;
}

/** function for generating a random integer number (not connected yet to choices)*/
function randomInt(max) {
  return Math.floor(Math.random() * max);
}

/**a function to update the display image of the user and opponant. */
function updateImage(userChoice, opponentChoice) {
  //makes html id into variable to use
  const userDisplay = document.getElementById("user-display");
  const opponentDisplay = document.getElementById("opponent-display");

  //gets index of choices user selects
  const userIndex = choices.indexOf(userChoice);
  const opponentIndex = choices.indexOf(opponentChoice);

  //connects index of choice selected to choice images
  userDisplay.textContent = choiceImage[userIndex];
  opponentDisplay.textContent = choiceImage[opponentIndex];
}

/**
 * function to change user display border to green if you win
 */
function winBorder() {
  let userDisplay = document.getElementById("user-display");
  let opponentDisplay = document.getElementById("opponent-display");

  userDisplay.style.borderColor = "green";
  userDisplay.style.backgroundColor = "#4ab147";

  opponentDisplay.style.borderColor = "red";
  opponentDisplay.style.backgroundColor = "#ce3a0c";
}

/**
 * function to change user display border to red if you lose
 */
function loseBorder() {
  let userDisplay = document.getElementById("user-display");
  let opponentDisplay = document.getElementById("opponent-display");

  userDisplay.style.borderColor = "red";
  userDisplay.style.backgroundColor = "#ce3a0c";

  opponentDisplay.style.borderColor = "green";
  opponentDisplay.style.backgroundColor = "#4ab147";
}

/**
 * function to change user display border to gray if you Draw
 */
function drawBorder() {
  let userDisplay = document.getElementById("user-display");
  let opponentDisplay = document.getElementById("opponent-display");

  userDisplay.style.borderColor = "#d3dde4";
  userDisplay.style.backgroundColor = "#777da4";

  opponentDisplay.style.borderColor = "#d3dde4";
  opponentDisplay.style.backgroundColor = "#777da4";
}

function win(userChoice, opponentChoice) {
  updateImage(userChoice, opponentChoice);
  updateWin();
  winBorder();
  result.textContent = winResult;
}

function lose(userChoice, opponentChoice) {
  updateImage(userChoice, opponentChoice);
  loseBorder();
  updateHeartDisplay();
  result.textContent = loseResult;
}

function draw(userChoice, opponentChoice) {
  updateImage(userChoice, opponentChoice);
  updatedraws();
  drawBorder();
  result.textContent = drawResult;
}

//function to play game
function playGame(userChoice) {
  const randomOponantChoiceInt = randomInt(choices.length);
  const opponentChoice = choices[randomOponantChoiceInt];
  console.log(opponentChoice);
  console.log(userChoice);

  if (!choices.includes(userChoice)) {
    console.log("unrecognised choice!");
    return; //Exits function early if userChoice isn't recognised
  }

  switch (userChoice) {
    case "rock":
      if (opponentChoice === "scissors" || opponentChoice === "lizard") {
        //win
        win(userChoice, opponentChoice);
      } else if (userChoice === opponentChoice) {
        //Draw
        draw(userChoice, opponentChoice);
      } else {
        //lose
        lose(userChoice, opponentChoice);
      }
      break;
    case "paper":
      if (opponentChoice === "rock" || opponentChoice === "spock") {
        //win
        win(userChoice, opponentChoice);
      } else if (userChoice === opponentChoice) {
        //Draw
        draw(userChoice, opponentChoice);
      } else {
        //lose
        lose(userChoice, opponentChoice);
      }
      break;
    case "scissors":
      if (opponentChoice === "lizard" || opponentChoice === "paper") {
        //win
        win(userChoice, opponentChoice);
      } else if (userChoice === opponentChoice) {
        //Draw
        draw(userChoice, opponentChoice);
      } else {
        //lose
        lose(userChoice, opponentChoice);
      }
      break;
    case "lizard":
      if (opponentChoice === "paper" || opponentChoice === "spock") {
        //win
        win(userChoice, opponentChoice);
      } else if (userChoice === opponentChoice) {
        //Draw
        draw(userChoice, opponentChoice);
      } else {
        //lose
        lose(userChoice, opponentChoice);
      }
      break;
    case "spock":
      if (opponentChoice === "rock" || opponentChoice === "scissors") {
        //win
        win(userChoice, opponentChoice);
      } else if (userChoice === opponentChoice) {
        //Draw
        draw(userChoice, opponentChoice);
      } else {
        //lose
        lose(userChoice, opponentChoice);
      }
      break;
  }
}

function resetGame() {
  //reset lives and wins, losses and draws.
  livesRemaining = 5;
  wins = 0;
  losses = 0;
  draws = 0;

  //updating scores.
  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  document.getElementById("draws").textContent = draws;

  //reset lives.
  document.getElementById("heart-display").textContent = "❤️".repeat(
    livesRemaining
  );

  //reset user and opponent displays.
  document.getElementById("user-display").style.borderColor = "";
  document.getElementById("user-display").style.backgroundColor = "";
  document.getElementById("user-display").textContent = "";

  document.getElementById("opponent-display").style.borderColor = "";
  document.getElementById("opponent-display").style.backgroundColor = "";
  document.getElementById("opponent-display").textContent = "";
}

//function at end of game to show username and score when lives run out.
function endgame() {
  let winResult = document.getElementById("win-result");
  let loseResult = document.getElementById("lose-result");
  let drawResult = document.getElementById("draw-result");
  let playAgain = document.getElementById("play-again");
  let resultText = document.getElementById("result-text");
  let endgameScoreContainer = document.getElementById(
    "endgame-score-container"
  );

  endgameScoreContainer.style.display = "flex";
  winResult.textContent = wins;
  loseResult.textContent = losses;
  drawResult.textContent = draws;
  resultText.textContent = `Awh sorry ${username}, you ran out of lives! Your score was:`;

  playAgain.addEventListener("click", function (event) {
    endgameScoreContainer.style.display = "none";
  });
}
