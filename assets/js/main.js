//game choices
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const choiceImage = ["✊", "🖐️", "✌️", "🦎", "🖖"];

//score tracking
let wins = 0;
let losses = 0;
let draws = 0;

//score Updating functions
function updateWin() {
  let userScore = document.getElementById("wins");
  wins++;
  userScore.textContent = wins;
}

function updatelosses() {
  let userLosses = document.getElementById("losses");
  losses++;
  userLosses.textContent = losses;
}

function updatedraws() {
  let userDraws = document.getElementById("draws");
  draws++;
  userDraws.textContent = draws;
}

// function for generating a random integer number (not connected yet to choices)
const randomInt = (max) => {
  return Math.floor(Math.random() * max);
};

// a function to update the display image of the user and opponant.
const updateImage = (userChoice, opponentChoice) => {
  //makes html id into variable to use
  const userDisplay = document.getElementById("user-display");
  const opponentDisplay = document.getElementById("opponent-display");

  //gets index of choices user selects
  const userIndex = choices.indexOf(userChoice);
  const opponentIndex = choices.indexOf(opponentChoice);

  //connects index of choice selected to choice images
  userDisplay.textContent = choiceImage[userIndex];
  opponentDisplay.textContent = choiceImage[opponentIndex];
};

// display result of, You win!, you Lose! or Draw!.
let winResult = "You Win!";
let loseResult = "You Lose";
let drawResult = "It's a Draw!";

let result = document.getElementById("result");

//function to play game
let playGame = (userChoice) => {
  const randomOponantChoiceInt = randomInt(choices.length);
  const opponentChoice = choices[randomOponantChoiceInt];

  if (!choices.includes(userChoice)) {
    console.log("unrecognised choice!");
    return; //Exits function early if userChoice isn't recognised
  }

  /*
  Game rules:

  rock beats = scissors and lizard
  paper beats = rock and spock
  scissors beats = lizard and paper
  lizard beats = paper and spock
  spock beat = rock and scissors
  */

  switch (userChoice) {
    case "rock":
      if (opponentChoice === "scissors" || opponentChoice === "lizard") {
        //win
        updateImage(userChoice, opponentChoice);
        updateWin();
        result.textContent = winResult;
      } else if (userChoice === opponentChoice) {
        //Draw
        updateImage(userChoice, opponentChoice);
        updatedraws();
        result.textContent = drawResult;
      } else {
        updateImage(userChoice, opponentChoice);
        //lose
        updatelosses();
        result.textContent = loseResult;
      }
      break;
    case "paper":
      if (opponentChoice === "rock" || opponentChoice === "spock") {
        //win
        updateImage(userChoice, opponentChoice);
        updateWin();
        result.textContent = winResult;
      } else if (userChoice === opponentChoice) {
        //draw
        updateImage(userChoice, opponentChoice);
        updatedraws();
        result.textContent = drawResult;
      } else {
        //lose
        updateImage(userChoice, opponentChoice);
        updatelosses();
        result.textContent = loseResult;
      }
      break;
    case "scissors":
      if (opponentChoice === "lizard" || opponentChoice === "paper") {
        //Win
        updateImage(userChoice, opponentChoice);
        updateWin();
        result.textContent = winResult;
      } else if (userChoice === opponentChoice) {
        //Draw
        updateImage(userChoice, opponentChoice);
        updatedraws();
        result.textContent = drawResult;
      } else {
        //Lose
        updateImage(userChoice, opponentChoice);
        updatelosses();
        result.textContent = loseResult;
      }
      break;
    case "lizard":
      if (opponentChoice === "paper" || opponentChoice === "spock") {
        //Win
        updateImage(userChoice, opponentChoice);
        updateWin();
        result.textContent = winResult;
      } else if (userChoice === opponentChoice) {
        //Draw
        updateImage(userChoice, opponentChoice);
        updatedraws();
        result.textContent = drawResult;
      } else {
        //Lose
        updateImage(userChoice, opponentChoice);
        updatelosses();
        result.textContent = loseResult;
      }
      break;
    case "spock":
      if (opponentChoice === "rock" || opponentChoice === "scissors") {
        //Win
        console.log(`Oponant: ${opponentChoice}`);
        updateImage(userChoice, opponentChoice);
        updateWin();
        result.textContent = winResult;
      } else if (userChoice === opponentChoice) {
        //Draw
        updateImage(userChoice, opponentChoice);
        updatedraws();
        result.textContent = drawResult;
      } else {
        //Lose
        updateImage(userChoice, opponentChoice);
        updatelosses();
        result.textContent = loseResult;
      }
      break;
  }
};
