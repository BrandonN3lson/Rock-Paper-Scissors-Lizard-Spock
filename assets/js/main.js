//game choices
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

//score tracking
let userScore = 0;
let opponentScore = 0;

// function for generating a random integer number (not connected yet to choices)
const randomInt = (max) => {
  return Math.floor(Math.random() * max);
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
        console.log(`opponent: ${opponentChoice}`);
        console.log("You win!");
      } else if (userChoice === opponentChoice) {
        console.log(`opponent: ${opponentChoice}`);
        console.log("Draw!");
      } else {
        console.log(`opponent: ${opponentChoice}`);
        console.log("You lose!");
      }
      break;
    case "paper":
      if (opponentChoice === "rock" || opponentChoice === "spock") {
        console.log(`opponent: ${opponentChoice}`);
        console.log("You win!");
      } else if (userChoice === opponentChoice) {
        console.log(`opponent: ${opponentChoice}`);
        console.log("Draw!");
      } else {
        console.log(`opponent: ${opponentChoice}`);
        console.log("You lose!");
      }
      break;
    case "scissors":
      if (opponentChoice === "lizard" || opponentChoice === "paper") {
        console.log(`opponent: ${opponentChoice}`);
        console.log("You win!");
      } else if (userChoice === opponentChoice) {
        console.log(`opponent: ${opponentChoice}`);
        console.log("Draw!");
      } else {
        console.log(`opponent: ${opponentChoice}`);
        console.log("You lose!");
      }
      break;
    case "lizard":
      if (opponentChoice === "paper" || opponentChoice === "spock") {
        console.log(`opponent: ${opponentChoice}`);
        console.log("You win!");
      } else if (userChoice === opponentChoice) {
        console.log(`opponent: ${opponentChoice}`);
        console.log("Draw!");
      } else {
        console.log(`opponent: ${opponentChoice}`);
        console.log("You lose!");
      }
      break;
    case "spock":
      if (opponentChoice === "rock" || opponentChoice === "scissors") {
        console.log(`Oponant: ${opponentChoice}`);
        console.log("You win!");
      } else if (userChoice === opponentChoice) {
        console.log(`opponent: ${opponentChoice}`);
        console.log("Draw!");
      } else {
        console.log(`opponent: ${opponentChoice}`);
        console.log("You lose!");
      }
      break;
  }
};
