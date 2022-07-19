/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const computerDisplayChoice = document.getElementById('computer-choice');
const userDisplayChoice = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
const gameDisplay = document.querySelector('.game');
const roundDisplay = document.getElementById('rounds');
const computerResultDisplay = document.getElementById('computer-result');
const userResultDisplay = document.getElementById('player-result');
const drawResultDisplay = document.getElementById('draw-result');
const resultResultDisplay = document.getElementById('team-result');
let userChoice;
let computerChoice;
let result;
let output;
const winners = [];
const score = [0, 0, 0];

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * possibleChoice.length) + 1;
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
  || (computerChoice === 'scissors' && userChoice === 'scissors')) {
    result = 'draw!';
  } else {
    result = '';
  }
  resultDisplay.innerHTML = result;
};
const generateWinnerDisplay = () => {
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
    output = '';
  }
  userResultDisplay.innerHTML = `${score[0]}`;
  computerResultDisplay.innerHTML = `${score[2]}`;
  drawResultDisplay.innerHTML = `${score[1]}`;
  resultResultDisplay.innerHTML = output;
};
function generateUserChoice() {
  possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userDisplayChoice.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  }));
}

const playRound = () => {
  generateUserChoice();
  generateWinnerDisplay();
  const winner = getResult();
  winners.push(winner);
};
let count = 5;
const games = () => {
  for (let count = 1; count <= 5; count++) {
    playRound();
  }
};

const game = () => {
  gameDisplay.onclick = () => {
    for (let count = 1; count <= 5; count++) {
      playRound();
    }
    count -= 1;
    roundDisplay.innerHTML = `${count}: rounds left`;
  };
};

games();
game();
