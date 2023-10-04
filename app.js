const computerDisplayChoice = document.getElementById('computer-choice');
const userDisplayChoice = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.items');
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
let computerSelect;
let innerCircle;
const triangle = document.querySelector('.bg-triangle')
let userSelect;
let randomNumber;

let computerResult;

let score = [0, 0, 0];
const objects = document.querySelectorAll('.object');
const ROCK = document.querySelector('.rock-container');
const PAPER = document.querySelector('.paper-container');
const SCISSORS = document.querySelector('.scissors-container');
let noOfLive = 5;
const roundLives = () => {
  if (noOfLive <= 0) {
    for (let i = 0; i < possibleChoices.length; i += 1) {
      possibleChoices[i].style.pointerEvents = 'none';
    }
    popUp.classList.remove('hidden');
  }
  roundDisplay.innerHTML = `Live ${noOfLive}`;
};

gameDisplay.addEventListener('click', () => {
  if (noOfLive === 0) {
    noOfLive = 5;
    for (let i = 0; i < possibleChoices.length; i += 1) {
      possibleChoices[i].style.pointerEvents = 'auto';
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
  randomNumber = Math.floor(Math.random() * possibleChoices.length);
 if (randomNumber === 1) {
    computerChoice = 'Paper';
  } else if (randomNumber === 2) {
    computerChoice = 'Scissors';
  } else if (randomNumber === 3) {
    computerChoice = 'Rock'; 
  } else {
    computerChoice = 'Rock';
  }
 computerDisplayChoice.textContent =`computer choose ${computerChoice}`;
 computerSelect=possibleChoices[randomNumber];
 console.log(computerSelect);
};

const generateWinnerDisplay = () => {
  if ((userChoice === PAPER && computerChoice === ROCK)
 || (userChoice === ROCK && computerChoice === SCISSORS)
 || (userChoice === SCISSORS && computerChoice === PAPER)) {
    result = 'player win!';
    score[0] += 1;
  } else if ((userChoice === PAPER && computerChoice === PAPER)
  || (userChoice === ROCK && computerChoice === ROCK)
  || (userChoice === ROCK && computerChoice === ROCK)) {
    result = 'draw!';
    score[2] += 1;
  } else if ((computerChoice === PAPER && userChoice === ROCK)
     || (computerChoice === ROCK && userChoice === SCISSORS)
     || (computerChoice === SCISSORS && userChoice === PAPER)) {
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



const playGame = () =>{
  // computerChoice to display block if other options have been removed
  innerCircle.style.display = 'block';
 if(userChoice === 'Rock'){
  PAPER.remove();
  SCISSORS.remove();
  triangle.remove(); 
  // disabling th userChoice option
  ROCK.disabled = false;
 } else if (userChoice === 'Scissors'){
  PAPER.remove();
  ROCK.remove();
  triangle.remove();
  } else if (userChoice === 'Paper'){
  ROCK.remove();
  SCISSORS.remove();
  triangle.remove();
  } 
}

// computer random object
const computerGame= () =>{
  const computerImage = document.createElement('img');
computerImage.src = 'image/' + computerChoice + '.svg';
innerCircle = document.querySelector('.inner-computer-circle');
 innerCircle.appendChild(computerImage);
 // the computerchoice to display none here
 innerCircle.style.display = 'none';
}

computerGame();



const generateUserChoice = () => {
  possibleChoices.forEach(possibleChoice => 
    possibleChoice.addEventListener('click', (e) => {
      userChoice = e.target.id;
      userDisplayChoice.textContent = `You clicked : ${userChoice}`;
    generateComputerChoice();
    generateWinnerDisplay();
    playGame();
    generateResultDisplay(); 
      roundLives();
       }))};
  
 
     
   

const playRound = () => {
  generateUserChoice();
 
};
playRound();
