// implement main.js, which will implement the event listeners to press the buttons to switch the game between pong and breakout

// main.js

import { initGame, canvas, gameObjects, setCurrentGame } from './game_engine/game_loop.js';
import handlePongLogic from './game_specific_scripts/pong.js';
import handleBreakoutLogic from './game_specific_scripts/breakout.js';

// Set up event listeners for game-selection buttons
document.getElementById('pong').addEventListener('click', () => {
  switchGame('pong');
});

document.getElementById('breakout').addEventListener('click', () => {
  switchGame('breakout');
});

// Switch the game to the selected game
function switchGame(selectedGame) {
  if (selectedGame === 'pong') {
    // Clear previous game's logic and switch to Pong
    gameObjects.ball.reset();
    canvas.removeEventListener('click', handleBreakoutLogic);
    canvas.addEventListener('click', handlePongLogic);
  } else if (selectedGame === 'breakout') {
    // Clear previous game's logic and switch to Breakout
    gameObjects.ball.reset();
    canvas.removeEventListener('click', handlePongLogic);
    canvas.addEventListener('click', handleBreakoutLogic);
  }

  // Update the game state in game_loop.js
  updateGameState(selectedGame);
}

// Function to update the game state in game_loop.js
function updateGameState(selectedGame) {
  // Update the game state
  setCurrentGame(selectedGame);

  // Reset the game objects
  initGame();
}

// Initialize the game with the first game
initGame();