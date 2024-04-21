//game choices
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

//score tracking
let userScore = 0;
let opponantScore = 0;

// function for generating a random integer number (not connected yet to choices)
const randomInt = (max) => {
  return Math.floor(Math.random() * max);
};

//function to play game
let playGame = () => {
  const randomOpponantChoiceInt = randomInt(choices.length);
  const opponantChoice = choices[randomOpponantChoiceInt];
};
