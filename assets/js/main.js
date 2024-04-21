//game choices
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const choiceImage = ["✊", "🖐️", "✌️", "🦎", "🖖"];

//score tracking
let userScore = 0;
let opponentScore = 0;

// function for generating a random integer number (not connected yet to choices)
const randomInt = (max) => {
  return Math.floor(Math.random() * max);
};

// a function to update the display of the user and opponant.
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

//function to play game
let playGame = (userChoice) => {
  const randomOponantChoiceInt = randomInt(choices.length);
  const opponentChoice = choices[randomOponantChoiceInt];

  if (!choices.includes(userChoice)) {
    console.log("unrecognised choice!");
    return; //Exits function early if userChoice isn't recognised
  }
  /*
  rock beats = scissors and lizard
  paper beats = rock and spock
  scissors beats = lizard and paper
  lizard beats = paper and spock
  spock beat = rock and scissors
  */

  switch (userChoice) {
    case "rock":
      if (opponentChoice === "scissors" || opponentChoice === "lizard") {
        updateImage(userChoice, opponentChoice);
        console.log("You win!");
      } else if (userChoice === opponentChoice) {
        updateImage(userChoice, opponentChoice);
        console.log("Draw!");
      } else {
        updateImage(userChoice, opponentChoice);
        console.log("You lose!");
      }
      break;
    case "paper":
      if (opponentChoice === "rock" || opponentChoice === "spock") {
        updateImage(userChoice, opponentChoice);
        console.log("You win!");
      } else if (userChoice === opponentChoice) {
        updateImage(userChoice, opponentChoice);
        console.log("Draw!");
      } else {
        updateImage(userChoice, opponentChoice);
        console.log("You lose!");
      }
      break;
    case "scissors":
      if (opponentChoice === "lizard" || opponentChoice === "paper") {
        updateImage(userChoice, opponentChoice);
        console.log("You win!");
      } else if (userChoice === opponentChoice) {
        updateImage(userChoice, opponentChoice);
        console.log("Draw!");
      } else {
        updateImage(userChoice, opponentChoice);
        console.log("You lose!");
      }
      break;
    case "lizard":
      if (opponentChoice === "paper" || opponentChoice === "spock") {
        updateImage(userChoice, opponentChoice);
        console.log("You win!");
      } else if (userChoice === opponentChoice) {
        updateImage(userChoice, opponentChoice);
        console.log("Draw!");
      } else {
        updateImage(userChoice, opponentChoice);
        console.log("You lose!");
      }
      break;
    case "spock":
      if (opponentChoice === "rock" || opponentChoice === "scissors") {
        console.log(`Oponant: ${opponentChoice}`);
        console.log("You win!");
      } else if (userChoice === opponentChoice) {
        updateImage(userChoice, opponentChoice);
        console.log("Draw!");
      } else {
        updateImage(userChoice, opponentChoice);
        console.log("You lose!");
      }
      break;
  }
};
