/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const choices = ['rock', 'paper', 'scissors'];
const computerDisplayChoice = document.getElementById('computer-choice');
const userDisplayChoice = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const winnerDisplay = document.getElementById('winner');
let userChoice;
let computerChoice;
let result;
const winners = [];
let output;
const score = [0, 0, 0];

const logRound = () => {
  console.log('Round');
  console.log('Player Choice', userChoice);
  console.log('Computer Choice', computerChoice);
  console.log(result, 'won the round');
  console.log('........................');
};

function validateInput(choice) {
  return choices.includes(choice);
}

const generateUserChoice = () => {
  let input = prompt('Type rock, paper, or scissors');
  while (input === null) {
    input = prompt('Type rock, paper, or scissors');
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check === false) {
    input = prompt(
      'Type rock, paper, or scissor.spelling needs to be exact, but capitalise doesnot matter',
    );
    while (input == null) {
      input = prompt('Type rock, paper, or scissors');
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  userChoice = input;
  userDisplayChoice.innerHTML = userChoice;
};
const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * choices.length) + 1;
  if (randomNumber === 1) {
    computerChoice = 'rock';
  } else if (randomNumber === 2) {
    computerChoice = 'scissors';
  } else if (randomNumber === 3) {
    computerChoice = 'paper';
  } else {
    computerChoice = null;
  }
  computerDisplayChoice.innerHTML = computerChoice;
};

const getResult = () => {
  if ((userChoice === 'paper' && computerChoice === 'rock')
  || (userChoice === 'rock' && computerChoice === 'scissors')
  || (userChoice === 'scissors' && computerChoice === 'paper')) {
    result = 'player win!';
  } else if ((computerChoice === 'paper' && userChoice === 'rock')
  || (computerChoice === 'rock' && userChoice === 'scissors')
  || (computerChoice === 'scissors' && userChoice === 'paper')) {
    result = 'computer win!';
  } else if ((computerChoice === 'paper' && userChoice === 'paper')
  || (computerChoice === 'rock' && userChoice === 'rock')
  || (computerChoice === 'scissors' && userChoice === 'cissors')) {
    result = 'draw!';
  } else {
    result = 'not supported';
  }
  resultDisplay.innerHTML = result;

  if ((userChoice === 'paper' && computerChoice === 'rock')
 || (userChoice === 'rock' && computerChoice === 'scissors')
 || (userChoice === 'scissors' && computerChoice === 'paper')) {
    result = 'player win!';
    output = 'player win';
    score[0]++;
  } else if ((userChoice === 'paper' && computerChoice === 'paper')
  || (userChoice === 'rock' && computerChoice === 'rock')
  || (userChoice === 'scissors' && computerChoice === 'scissors')) {
    result = 'draw!';
    output = 'Draw';
    score[1]++;
  } else if ((computerChoice === 'paper' && userChoice === 'rock')
     || (computerChoice === 'rock' && userChoice === 'scissors')
     || (computerChoice === 'scissors' && userChoice === 'paper')) {
    result = 'computer win';
    output = 'computer win';
    score[2]++;
  } else {
    result = 'not supported';
  }
  winnerDisplay.innerHTML = output;
  console.log(output);
  console.log('Player :', `${score[0]}`);
  console.log('Computer :', `${score[2]}`);
  console.log('Draw :', `${score[1]}`);
};

const playRound = () => {
  const userSelection = generateUserChoice();
  const computerSelection = generateComputerChoice();
  const winner = getResult(userSelection, computerSelection);
  winners.push(winner);
  logRound(userSelection, computerSelection, winner);
};

const button = () => {
  for (let i = 1; i <= 5; i++) {
    playRound();
  }
};
button();