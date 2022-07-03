const computerDisplayChoice = document.getElementById('computer-choice');
const userDisplayChoice = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * possibleChoice.length) + 1;
  if (randomNumber === 1) {
    computerChoice = 'rock';
  } else if (randomNumber === 2) {
    computerChoice = 'scissors';
  } else if (randomNumber === 3) {
    computerChoice = 'paper';
  } else {
    computerChoice = false;
  }
  computerDisplayChoice.innerHTML = computerChoice;
};

const getResult = () => {
  if (computerChoice === userChoice) {
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
    result = 'you win!';
  }
  resultDisplay.innerHTML = result;
};

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userDisplayChoice.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}));
