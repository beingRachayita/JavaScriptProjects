'use strict';

//selecting all the elements
const dice = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new'); //class
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score0 = document.querySelector('#score--0'); //id
const score1 = document.getElementById('score--1'); //id
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let currentScore;
let activePlayer;
let scores;
let playing;

const startFunction = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  score0.textContent = '0';
  score1.textContent = '0';
  current0.textContent = '0';
  current1.textContent = '0';
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  dice.classList.add('hidden');
};

//starting condition:
startFunction();

btnNewGame.addEventListener('click', startFunction);

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//btn hold: switch active player, update the score with current score
btnHold.addEventListener('click', function () {
  //activePlayer's currentscore will be updated to score
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      //active player wins
      playing = false;
      dice.classList.add('hidden');
      //(activePlayer ? player1 : player0).classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //then call switch
      switchPlayer();
    }
  }
});

//btn roll: roll the dice, if 1 current =0, else add to current
btnRollDice.addEventListener('click', function () {
  if (playing) {
    //generate a random number
    const diceNo = Math.trunc(Math.random() * 6) + 1;
    //display the dice
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNo}.png`;
    //if roll ==1, current =0, switch to other player
    if (diceNo === 1) {
      switchPlayer();
    } else {
      currentScore += diceNo;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});
