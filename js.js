"use strict";

const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
let scorePlayer1 = document.querySelector(".score-player-1");
let scorePlayer2 = document.querySelector(".score-player-2");
const diceImage = document.querySelector(".dice-value");
const btnRoll = document.querySelector(".btn-roll");
const btnReset = document.querySelector(".reset");
const winnerDisplay = document.querySelector(".winner-display");

let currentScore,
  currentScorePlayer1,
  currentScorePlayer2,
  playing,
  activePlayer;

const initialConditions = function () {
  winnerDisplay.classList.add("hidden");
  diceImage.classList.add("hidden");
  btnReset.classList.add("hidden");

  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  winnerDisplay.textContent = "";

  currentScorePlayer1 = 0;
  currentScorePlayer2 = 0;
  currentScore = 0;
  playing = true;
  activePlayer = 1;
};

initialConditions();
const winnerConditions = function () {
  winnerDisplay.classList.remove("hidden");
  btnReset.classList.remove("hidden");
  winnerDisplay.classList.add("blinking");
  playing = false;
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    // generating a random dice
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // displaying the dice
    diceImage.classList.remove("hidden");
    diceImage.src = `dice-${diceNumber}.png`;

    // adding score to players

    if (activePlayer === 1) {
      currentScorePlayer1 = currentScorePlayer1 + diceNumber;
      scorePlayer1.textContent = currentScorePlayer1;
      activePlayer = 2;
    } else if (activePlayer === 2) {
      currentScorePlayer2 = currentScorePlayer2 + diceNumber;
      scorePlayer2.textContent = currentScorePlayer2;
      activePlayer = 1;
    }
    //  winner conditions
    if (
      currentScorePlayer1 > currentScorePlayer2 &&
      currentScorePlayer1 >= 31
    ) {
      winnerDisplay.textContent = "Player 1 wins!";
      winnerConditions();
    } else if (
      currentScorePlayer2 > currentScorePlayer1 &&
      currentScorePlayer2 >= 31
    ) {
      winnerDisplay.textContent = "Player 2 wins!";
      winnerConditions();
    } else if (
      currentScorePlayer1 === currentScorePlayer2 &&
      currentScorePlayer2 >= 31
    ) {
      winnerDisplay.textContent = "It's a tie!";
      winnerConditions();
    }
  }
});

btnReset.addEventListener("click", initialConditions);
