'use strict';
var audio = new Audio('./Game Reward.mp3');

const jsConfetti = new JSConfetti();

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const againBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

const diceIMG = document.getElementsByClassName('dice');

const score00 = document.getElementById('score--0');
const score01 = document.getElementById('score--1');

const currentScore00 = document.getElementById('current--0');
const currentScore01 = document.getElementById('current--1');

// starting conditions
let scorePlayer0 = 0;
let scorePlayer1 = 0;

score00.textContent = 0;
score01.textContent = 0;

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

let gameRunning = true;

const dice = document.querySelector('.dice');
dice.classList.add('hidden');

// rolling dice functionality
const diceRoll = () => {
    return Math.trunc(Math.random() * 6) + 1;
};
const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};

rollBtn.addEventListener('click', function () {
    if (gameRunning) {
        let diceNum = diceRoll();
        console.log(diceNum);
        dice.classList.remove('hidden');
        dice.src = `dice-${diceNum}.png`;

        if (diceNum !== 1) {
            currentScore += diceNum;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            switchPlayer();
        }
    }
});

// Hold functionality
holdBtn.addEventListener('click', function () {
    if (gameRunning) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            audio.play();
            jsConfetti.addConfetti();
            document.querySelector(`#name--${activePlayer}`).textContent =
                'Winner!';
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');

            console.log('finished!');
            gameRunning = false;
        } else {
            switchPlayer();
        }
    }
});

// Resetting the game

againBtn.addEventListener('click', function () {
    console.log('again');

    // scores = [0, 0];
    document.querySelector(`#name--${activePlayer}`).textContent = `player ${
        activePlayer + 1
    }`;
    if (activePlayer) {
        console.log('in');

        document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
        document
            .querySelector(`.player--${activePlayer - 1}`)
            .classList.add('player--active');
    } else {
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--active');
    }

    document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--winner');
    scores = [0, 0];
    score00.textContent = 0;
    score01.textContent = 0;
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    gameRunning = true;
    activePlayer = 0;
});
