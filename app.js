const computerDisplayChoice = document.querySelector('#computer-choice');
const userDisplayChoice = document.querySelector('#your-choice');
const resultDisplay = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('.btn');
const gameDisplay = document.querySelector('.game');
const roundDisplay = document.querySelector('.rounds');
const computerResultDisplay = document.getElementById('computer-result');
const userResultDisplay = document.querySelector('#player-result');
const drawResultDisplay = document.querySelector('#draw-result');
const resultResultDisplay = document.querySelector('#team-result');
const popUp = document.querySelector('.popup');
const popupResult = document.querySelector('.resultTeam');
let userChoice;
let computerChoice;
let result;
let output;
let score = [0, 0, 0];
let [score0, score1, score2] = score;
let noOfLive = 5;
const roundLives = () => {
  if (noOfLive <= 0) {
    possibleChoices.forEach(possibleChoice => {
      possibleChoice.style.pointerEvents = 'none';
    });
    popUp.classList.remove('hidden');
  }
  roundDisplay.textContent = `Live ${noOfLive}`;
};

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  if (randomNumber === 1) {
    computerChoice = 'rock';
  } else if (randomNumber === 2) {
    computerChoice = 'scissors';
  } else if (randomNumber === 3) {
    computerChoice = 'paper';
  } else {
    computerChoice = '';
  }
  if (computerDisplayChoice) {
    computerDisplayChoice.textContent = computerChoice;
  }
};

const generateResultDisplay = () => {
  if ((score0 > score1
  || score0 > score1)) {
    output = 'Player won!';
  } else if ((score1 > score0)) {
    output = 'Computer won!';
  } else if ((score1 === score0
    || score0 === score1)) {
    output = 'Draw!';
  } else {
    output = 'No win';
  }
  resultResultDisplay.textContent = output;
  popupResult.textContent = output;
};

const computerwin = () => {
  if ((computerChoice === 'paper' && userChoice === 'rock')
    || (computerChoice === 'rock' && userChoice === 'scissors')
    || (computerChoice === 'scissors' && userChoice === 'paper')
    || (computerChoice === 'scissors' && userChoice === 'rock')) {
    result = 'computer win!';
    score1 += 1;
    noOfLive -= 1;
  } else {
    result = 'player lose!';
  }
  computerResultDisplay.textContent = score1;
  if (resultDisplay) {
    resultDisplay.textContent = result;
  }
};

const playwin = () => {
  if ((userChoice === 'paper' && computerChoice === 'rock')
    || (userChoice === 'rock' && computerChoice === 'scissors')
    || (userChoice === 'scissors' && computerChoice === 'paper')) {
    result = 'player win!';
    score0 += 1;
  } else {
    result = 'computer lose!';
  }
  userResultDisplay.textContent = score0;
  if (resultDisplay) {
    resultDisplay.textContent = result;
  }
};

const draw = () => {
  if ((userChoice === 'paper' && computerChoice === 'paper')
  || (userChoice === 'rock' && computerChoice === 'rock')
  || (userChoice === 'scissors' && computerChoice === 'scissors')) {
    result = 'Draw!';
    score2 += 1;
  } else {
    result = 'not supported';
  }
  drawResultDisplay.textContent = score2;
  if (resultDisplay) {
    resultDisplay.textContent = result;
  }
};
const generateWinnerDisplay = () => {
  computerwin();
  playwin();
  draw();
};

gameDisplay.addEventListener('click', () => {
  if (noOfLive === 0) {
    noOfLive = 5;
    possibleChoices.forEach(possibleChoice => {
      possibleChoice.style.pointerEvents = 'auto';
    });
    popUp.classList.add('hidden');
    score = [0, 0, 0];
    const [score0, score1, score2] = score;
    resultDisplay.textContent = '';
    roundDisplay.textContent = `${noOfLive} Live`;
    computerDisplayChoice.textContent = '';
    userDisplayChoice.textContent = '';
    resultResultDisplay.textContent = '';
    userResultDisplay.textContent = score0;
    computerResultDisplay.textContent = score1;
    drawResultDisplay.textContent = score2;
  }
});

const generateUserChoice = () => {
  possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    generateComputerChoice();
    generateWinnerDisplay();
    generateResultDisplay();
    roundLives();
    if (userDisplayChoice) {
      userDisplayChoice.textContent = userChoice;
    }
  }));
};
generateUserChoice();