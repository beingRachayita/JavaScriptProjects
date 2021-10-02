'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number!!!✨🎉🎊 ';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
//document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;

//to check highscore
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//In Case of click event on guess button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //check if the input is empty
  if (!guess) {
    //when no input
    displayMessage('⛔ No Number');
  } else if (guess === secretNumber) {
    //When Player wins
    displayMessage('🎉 Correct number!!!✨🎊 ');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? '📈 Too high!!' : '📉 Too Low!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😣 You lost the game! Try Again');
    }
  }
});

//In case of click event for Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
});
