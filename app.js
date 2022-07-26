/* eslint-disable no-plusplus */
const computerDisplayChoice = document.getElementById('computer-choice');
const userDisplayChoice = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
const gameDisplay = document.querySelector('#game');
const roundDisplay = document.getElementById('rounds');
const computerResultDisplay = document.getElementById('computer-result');
const userResultDisplay = document.getElementById('player-result');
const drawResultDisplay = document.getElementById('draw-result');
const resultResultDisplay = document.getElementById('team-result');
let userChoice;
let computerChoice;
let result;
let output;
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
    computerChoice = '';
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
    score[0]++;
  } else if ((userChoice === 'paper' && computerChoice === 'paper')
  || (userChoice === 'rock' && computerChoice === 'rock')
  || (userChoice === 'scissors' && computerChoice === 'scissors')) {
    result = 'draw!';
    score[1]++;
  } else if ((computerChoice === 'paper' && userChoice === 'rock')
     || (computerChoice === 'rock' && userChoice === 'scissors')
     || (computerChoice === 'scissors' && userChoice === 'paper')) {
    result = 'computer win';
    score[2]++;
  } else {
    result = 'not supported';
  }
  userResultDisplay.innerHTML = `${score[0]}`;
  computerResultDisplay.innerHTML = `${score[2]}`;
  drawResultDisplay.innerHTML = `${score[1]}`;
};
const generateResultDisplay = () => {
  if ((score[0] > score[2]
  || score[0] > score[2])) {
    output = 'Player win';
  } else if ((score[2] > score[0])) {
    output = 'Computer win';
  } else if ((score[2] === score[0]
    || score[0] === score[2])) {
    output = 'draw';
  } else {
    output = 'no win';
  }
  resultResultDisplay.innerHTML = output;
};
const generateUserChoice = () => {
  possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    generateComputerChoice();
    getResult();
    generateWinnerDisplay();
    generateResultDisplay();
    userDisplayChoice.innerHTML = userChoice;
  }));
};

const playRound = () => {
  generateUserChoice();
};
playRound();
let count = 5;
const game = () => {
  gameDisplay.onclick = () => {
    count -= 1;
    if (count < 0) {
      count = 0;
    }
    const choices = document.querySelectorAll('.choice');
    for (let i = 0; i < choices.length; i += 1) {
      if (choices[i].style.display === 'none') {
        choices[i].style.display = 'block';
      } else {
        choices[i].style.display = 'none';
      }
    }
    roundDisplay.innerHTML = `${count} Live`;
  };
};
game();
