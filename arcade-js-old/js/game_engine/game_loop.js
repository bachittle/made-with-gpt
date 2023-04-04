// create game_loop.js: a basic game loop that will handle the game logic
// game_loop.js

import InputHandler from './input_handler.js';
import { Ball, Paddle, Bricks } from './game_objects.js';

import { handleBreakoutLogic } from '../game_specific_scripts/breakout.js';
import { handlePongLogic } from '../game_specific_scripts/pong.js';

// Set up the canvas and context for the game loop
export const canvas = document.getElementById('gameCanvas');
export const ctx = canvas.getContext('2d');

// Set up the game objects, initialized to empty object
export let gameObjects = {};

// Set up the input handler
export const inputHandler = new InputHandler();

// Set up the current game status
let currentGame;
export function setCurrentGame(game) {
  currentGame = game;
}

const MAX_BOUNCE_ANGLE = Math.PI / 3; // 60 degrees

// Initialize the game
export function initGame() {
  // Clear gameObjects
  gameObjects = {};

  // Set the current game
  // currentGame = 'pong'; // Can be changed to breakout for testing

  // Load the assets and initialize game objects for the selected game
  if (currentGame === 'pong') {
    gameObjects = {
      ball: new Ball(),
      playerPaddle: new Paddle(true),
      aiPaddle: new Paddle(false)
    };
  } else if (currentGame === 'breakout') {
    gameObjects = {
      ball: new Ball(),
      paddle: new Paddle(true),
      bricks: new Bricks()
    };
  }

  // Start the game loop
  setInterval(gameLoop, 1000 / 60); // 60 frames per second
}

// Game loop function
function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update game logic based on the current game
  if (currentGame === 'pong') {
    handlePongLogic();
  } else if (currentGame === 'breakout') {
    handleBreakoutLogic();
  }
}

// Handle paddle-ball collision
export function handlePaddleBallCollision(paddle, ball) {
  const paddleTop = paddle.y;
  const paddleBottom = paddle.y + paddle.height;
  const paddleLeft = paddle.x;
  const paddleRight = paddle.x + paddle.width;
  const ballTop = ball.y - ball.radius;
  const ballBottom = ball.y + ball.radius;
  const ballLeft = ball.x - ball.radius;
  const ballRight = ball.x + ball.radius;

  if (
    ballBottom >= paddleTop &&
    ballTop <= paddleBottom &&
    ballRight >= paddleLeft &&
    ballLeft <= paddleRight
  ) {
    // Calculate the angle of the bounce based on where the ball impacts the paddle
    const collidePoint = ball.x - (paddle.x + paddle.width / 2);

    // Normalize the collide point to a number between -1 and 1
    const normalizedCollidePoint = collidePoint / (paddle.width / 2);

    // Calculate the bounce angle in radians
    const bounceAngle = normalizedCollidePoint * MAX_BOUNCE_ANGLE;

    // Update the ball's velocity based on the bounce angle
    ball.dy = -1 * ball.speed * Math.sin(bounceAngle);
    ball.dx = ball.speed * Math.cos(bounceAngle);
  }
}


// Initialize the game
// initGame();
