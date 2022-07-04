/* eslint-disable no-alert */
const choices = ['rock', 'paper', 'scissors'];
const computerDisplayChoice = document.getElementById('computer-choice');
const userDisplayChoice = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
let computerChoice;
let result;
let userChoice;

function validateInput(choice) {
  return choices.includes(choice);
}

const generateUserChoice = () => {
  let userChoice = prompt('Type rock, paper, or scissors');
  while (userChoice === null) {
    userChoice = prompt('Type rock, paper, or scissors');
  }
  userChoice = userChoice.toLowerCase();
  let check = validateInput(userChoice);
  while (check === false) {
    userChoice = prompt(
      'Type rock, paper, or scissor.spelling needs to be exact, but capitalise doesnot matter',
    );
    while (userChoice == null) {
      userChoice = prompt('Type rock, paper, or scissors');
    }
    userChoice = userChoice.toLowerCase();
    check = validateInput(userChoice);
  }
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
  if (computerChoice === 'rock' && userChoice === 'rock') {
    result = 'It\'s a draw!';
  } else if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'you win!';
  } else if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'you lost!';
  } else if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'you win!';
  } else if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'you lose!';
  } else if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'you lose!';
  } else {
    result = 'not supported';
  }
  resultDisplay.innerHTML = result;
};
function playRound() {
  generateUserChoice();
  generateComputerChoice();
  getResult();
}

function button() {
  playRound();
}
button();