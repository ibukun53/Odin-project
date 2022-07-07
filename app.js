const choices = ['rock', 'paper', 'scissors'];
const computerDisplayChoice = document.getElementById('computer-choice');
const userDisplayChoice = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
let userChoice; 
let computerChoice;
let result; 
const winners = [];

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
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'you win!';
  } else if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'you lose!';
  } else if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'you win!'; 
  } else if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'you lose!';
  } else if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'you lose!';
  } else if (computerChoice && userChoice) {
    result = 'draw';
  } else if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'you win!';
  } else {
    result = 'not supported';
  }
  resultDisplay.innerHTML = result;
};

const playRound = () => {
  const userSelection = generateUserChoice();
  const computerSelection = generateComputerChoice();
  const winner = getResult(userSelection, computerSelection);
  winners.push(winner); 
};

const button = () => {
  for(i =1; i<= 2; i++){
    playRound();
  }
};


button;

