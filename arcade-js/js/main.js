// implement main.js, which will implement the startGame functions and start the game loop
// main.js

let currentGame;
let gameLoop;
let inputHandler;

// Function to initialize the game engine and start the selected game
function startGame(gameName) {
  // Clear any existing game objects or game state
  if (currentGame) {
    currentGame.destroy();
    currentGame = null;
  }

  // Set up the game engine, input handler, and game-specific objects/logic
  switch (gameName) {
    case "pong":
      currentGame = new Pong();
      break;
    case "breakout":
      currentGame = new Breakout();
      break;
    // Add more cases as necessary for additional games
    default:
      console.error(`Invalid game name provided: ${gameName}`);
      return;
  }

  inputHandler = new InputHandler(currentGame);

  // Start the game loop
  if (!gameLoop) {
    gameLoop = new GameLoop();
  }
  gameLoop.start(currentGame.update, currentGame.draw);
}

// Event listener for when the window has loaded
window.addEventListener("load", () => {
  // Set up initial game state, UI listeners, etc. as needed
});