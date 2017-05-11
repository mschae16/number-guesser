// Global Variables

var guessRange = document.querySelectorAll('.range');
var userGuess = document.getElementById('user-guess');
var guessBtn = document.getElementById('guess-btn');
var clearBtn = document.getElementById('clear-btn');
var resetBtn = document.getElementById('reset-btn');
var recentGuess = document.getElementById('recent-guess');
var recentGuessValue = document.getElementById('recent-guess-value');
var lowHigh = document.getElementById('low-high');
var minInput = parseInt(document.getElementById('min').value);
var maxInput = parseInt(document.getElementById('max').value);
var randomNumber = Math.floor(Math.random() * (Math.floor(maxInput) - Math.ceil(minInput))) + minInput;

// Events

guessBtn.addEventListener('click', manageGuess);
clearBtn.addEventListener('click', clearUserGuess);
userGuess.addEventListener('input', toggleBtns);
resetBtn.addEventListener('click', resetNumberGuesser);

// For Loop to engage min/max inputs

for(i = 0; i < guessRange.length; i++) {

  guessRange[i].addEventListener('input', function() {
    resetBtn.disabled = false;
    minInput = parseInt(document.getElementById('min').value);
    maxInput = parseInt(document.getElementById('max').value);
    randomNumber = Math.floor(Math.random() * (Math.floor(maxInput) - Math.ceil(minInput))) + minInput;
  });
}

// Umbrella Function

function manageGuess() {
  compareNumbers();
  clearUserGuess();
  toggleBtns();
  resetBtn.disabled = false;
}

// Secondary Functions

function compareNumbers() {
  var userGuessValue = parseInt(userGuess.value);

  if((userGuessValue < minInput) || (userGuessValue > maxInput)) {
      alert('Stay within range, dude!');

  } else if(isNaN(userGuessValue)) {
      alert('Your hair looks great today!  ...oh, and you need to enter a number.');

  } else if(userGuessValue === randomNumber) {
      recentGuess.innerText = 'BOOM!';
      recentGuessValue.innerText = randomNumber;
      lowHigh.innerText = '';

  } else if(userGuessValue < randomNumber) {
      recentGuess.innerText = 'Your last guess was';
      recentGuessValue.innerText = userGuessValue;
      lowHigh.innerText = 'That is too low';

  } else if(userGuessValue > randomNumber) {
      recentGuess.innerText = 'Your last guess was';
      recentGuessValue.innerText = userGuessValue;
      lowHigh.innerText = 'That is too high';
  }
}

function clearUserGuess() {
  userGuess.value = '';
  toggleBtns();
}

function toggleBtns() {
  if(userGuess.value === '') {
      clearBtn.disabled = true;
      guessBtn.disabled = true;
  } else {
      clearBtn.disabled = false;
      guessBtn.disabled = false;
  }
}

function resetNumberGuesser() {
  recentGuess.innerText = 'Set your range';
  recentGuessValue.innerText = '#';
  lowHigh.innerText = 'Guess a number';
  guessBtn.disabled = true;
  clearBtn.disabled = true;
  resetBtn.disabled = true;
  document.getElementById('min').value = '';
  document.getElementById('max').value = '';
  clearUserGuess();
}
