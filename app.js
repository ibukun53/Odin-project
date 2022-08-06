const computerDisplayChoice = document.getElementById('computer-choice');
const userDisplayChoice = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('.btn');
const gameDisplay = document.querySelector('.game');
const roundDisplay = document.querySelector('.rounds');
const computerResultDisplay = document.getElementById('computer-result');
const userResultDisplay = document.getElementById('player-result');
const drawResultDisplay = document.getElementById('draw-result');
const resultResultDisplay = document.getElementById('team-result');
const popUp = document.querySelector('.popup');
const popupResult = document.querySelector('.resultTeam');
let userChoice;
let computerChoice;
let result;
let output;
let score = [0, 0, 0];

let noOfLive = 5;
const roundLives = () => {
  if (noOfLive <= 0) {
    for (let i = 0; i < possibleChoice.length; i += 1) {
      possibleChoice[i].style.pointerEvents = 'none';
    }
    popUp.classList.remove('hidden');
  }
  roundDisplay.innerHTML = `Live ${noOfLive}`;
};

gameDisplay.addEventListener('click', () => {
  if (noOfLive === 0) {
    noOfLive = 5;
    for (let i = 0; i < possibleChoice.length; i += 1) {
      possibleChoice[i].style.pointerEvents = 'auto';
    }
    popUp.classList.add('hidden');
    score = [0, 0, 0];
    resultDisplay.innerHTML = '';
    roundDisplay.innerHTML = `${noOfLive} Live`;
    computerDisplayChoice.innerHTML = '';
    userDisplayChoice.innerHTML = '';
    resultResultDisplay.innerHTML = '';
    userResultDisplay.innerHTML = `${score[0]}`;
    computerResultDisplay.innerHTML = `${score[1]}`;
    drawResultDisplay.innerHTML = `${score[2]}`;
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
    output = 'Player won!';
  } else if ((score[1] > score[0])) {
    output = 'Computer won!';
  } else if ((score[1] === score[0]
    || score[0] === score[1])) {
    output = 'Draw!';
  } else {
    output = 'No win';
  }
  resultResultDisplay.innerHTML = output;
  popupResult.innerHTML = output;
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
