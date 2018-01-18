var minInput;
var maxInput;
var randomNumber = Math.floor(Math.random() * (Math.floor(maxInput) - Math.ceil(minInput))) + minInput;

document.getElementById('guess-btn').addEventListener('click', manageGuess);
document.getElementById('clear-btn').addEventListener('click', clearUserGuess);
document.getElementById('user-guess').addEventListener('input', toggleBtns);
document.getElementById('reset-btn').addEventListener('click', resetNumberGuesser);

for(i = 0; i < document.querySelectorAll('.range').length; i++) {

  document.querySelectorAll('.range')[i].addEventListener('input', function() {
    document.getElementById('reset-btn').disabled = false;
    minInput = parseInt(document.getElementById('min').value);
    maxInput = parseInt(document.getElementById('max').value);
    randomNumber = Math.floor(Math.random() * (Math.floor(maxInput) - Math.ceil(minInput))) + minInput;
  });
}

function manageGuess() {
  compareNumbers();
  clearUserGuess();
  toggleBtns();
  document.getElementById('reset-btn').disabled = false;
}

function compareNumbers() {
  var userGuessValue = parseInt(document.getElementById('user-guess').value);

  if((userGuessValue < minInput) || (userGuessValue > maxInput)) {
      alert('Stay within range, dude!');

  } else if(isNaN(userGuessValue)) {
      alert('Your hair looks great today!  ...oh, and you need to enter a number.');

  } else if(userGuessValue === randomNumber) {
      document.getElementById('recent-guess').innerText = 'BOOM!';
      document.getElementById('recent-guess-value').innerText = randomNumber;
      document.getElementById('low-high').innerText = '';

  } else if(userGuessValue < randomNumber) {
      document.getElementById('recent-guess').innerText = 'Your last guess was';
      document.getElementById('recent-guess-value').innerText = userGuessValue;
      document.getElementById('low-high').innerText = 'That is too low';

  } else if(userGuessValue > randomNumber) {
      document.getElementById('recent-guess').innerText = 'Your last guess was';
      document.getElementById('recent-guess-value').innerText = userGuessValue;
      document.getElementById('low-high').innerText = 'That is too high';
  }
}

function clearUserGuess() {
  document.getElementById('user-guess').value = '';
  toggleBtns();
}

function toggleBtns() {
  if(document.getElementById('user-guess').value === '') {
      document.getElementById('clear-btn').disabled = true;
      document.getElementById('guess-btn').disabled = true;
  } else {
      document.getElementById('clear-btn').disabled = false;
      document.getElementById('guess-btn').disabled = false;
  }
}

function resetNumberGuesser() {
  document.getElementById('recent-guess').innerText = 'Set your range';
  document.getElementById('recent-guess-value').innerText = '#';
  document.getElementById('low-high').innerText = 'Guess a number';
  document.getElementById('min').value = '';
  document.getElementById('max').value = '';
  document.getElementById('reset-btn').disabled = true;
  clearUserGuess();
}
