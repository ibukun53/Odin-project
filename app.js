/* eslint-disable no-plusplus */
const computerDisplayChoice = document.getElementById('computer-choice');
const userDisplayChoice = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('.btn');
const gameDisplay = document.getElementById('game');
const roundDisplay = document.getElementById('rounds');
const computerResultDisplay = document.getElementById('computer-result');
const userResultDisplay = document.getElementById('player-result');
const drawResultDisplay = document.getElementById('draw-result');
const resultResultDisplay = document.getElementById('team-result');
const popUp = document.querySelector('.popup');

let userChoice;
let computerChoice;
let result;
let output;

let score = [0, 0, 0];
let noOfLive = 5;
const roundLives = () => {
  if (noOfLive <= 0) {
    for (let i = 0; i < possibleChoice.length; i++) {
      possibleChoice[i].disabled = true;
      popUp.classList.add('show');
    }
  }
  roundDisplay.innerHTML = `${noOfLive} Live`;
};

gameDisplay.addEventListener('click', () => {
  if (noOfLive === 0) {
    noOfLive = 5;
    for (let i = 0; i < possibleChoice.length; i++) {
      possibleChoice[i].disabled = false;
      popUp.classList.add('hide');
    }

    // eslint-disable-next-line no-sequences
    score = [0];
    score = [0, 0, 0];
    resultDisplay.innerHTML = '';
    roundDisplay.innerHTML = `${noOfLive} Live`;
    computerDisplayChoice.innerHTML = '';
    userDisplayChoice.innerHTML = '';
    resultResultDisplay.innerHTML = '';
    userResultDisplay.innerHTML = score;
    computerResultDisplay.innerHTML = score;
    drawResultDisplay.innerHTML = score;
  }
});

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * possibleChoice.length) + 1;
  if (randomNumber === 1) {
    computerChoice = 'rock';
  } else if (randomNumber === 2) {
    computerChoice = 'scissors';
  } else if (randomNumber === 3) {
    computerChoice = 'paper';
  } else {
    computerChoice = '';
  }
  computerDisplayChoice.innerHTML = computerChoice;
};

const generateWinnerDisplay = () => {
  if ((userChoice === 'paper' && computerChoice === 'rock')
 || (userChoice === 'rock' && computerChoice === 'scissors')
 || (userChoice === 'scissors' && computerChoice === 'paper')) {
    result = 'player win!';
    score[0] += 1;
  } else if ((userChoice === 'paper' && computerChoice === 'paper')
  || (userChoice === 'rock' && computerChoice === 'rock')
  || (userChoice === 'scissors' && computerChoice === 'scissors')) {
    result = 'draw!';
    score[2] += 1;
  } else if ((computerChoice === 'paper' && userChoice === 'rock')
     || (computerChoice === 'rock' && userChoice === 'scissors')
     || (computerChoice === 'scissors' && userChoice === 'paper')) {
    result = 'computer win!';
    score[1] += 1;
    noOfLive -= 1;
  } else {
    result = 'not supported';
  }
  userResultDisplay.innerHTML = `${score[0]}`;
  computerResultDisplay.innerHTML = `${score[1]}`;
  drawResultDisplay.innerHTML = `${score[2]}`;
  resultDisplay.innerHTML = result;
};
const generateResultDisplay = () => {
  if ((score[0] > score[1]
  || score[0] > score[1])) {
    output = 'Player win';
  } else if ((score[1] > score[0])) {
    output = 'Computer win';
  } else if ((score[1] === score[0]
    || score[0] === score[1])) {
    output = 'Draw';
  } else {
    output = 'No win';
  }
  resultResultDisplay.innerHTML = output;
};

const generateUserChoice = () => {
  possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    generateComputerChoice();
    generateWinnerDisplay();
    generateResultDisplay();
    roundLives();
    userDisplayChoice.innerHTML = userChoice;
  }));
};

const playRound = () => {
  generateUserChoice();
};
playRound();
