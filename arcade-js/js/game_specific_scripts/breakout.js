// begin implementing breakout.js
// breakout.js

// Define the Breakout-specific logic and variables
let lives = 3;
let score = 0;
let level = 1;

// Handle Breakout-specific logic
function handleBreakoutLogic() {
  // Update the game objects
  gameObjects.ball.update();
  gameObjects.paddle.update(inputHandler);
  gameObjects.bricks.update(gameObjects.ball);

  // Check for paddle-ball collision
  handlePaddleBallCollision(gameObjects.paddle, gameObjects.ball);

  // Check for brick-ball collision
  handleBrickBallCollision(gameObjects.bricks, gameObjects.ball);

  // Check for losing a life or game over
  if (gameObjects.ball.isOutOfBound()) {
    lives -= 1;

    if (lives > 0) {
      // Reset the ball and paddle positions
      gameObjects.ball.reset();
      gameObjects.paddle.reset();
    } else {
      // Game over, reset the game variables, and display a game over message
      resetBreakoutGameState();
      alert("Game Over! Press OK to start a new game.");
    }
  }

  // Check for level completion
  if (bricksCleared(gameObjects.bricks)) {
    level += 1;

    // Reset the game objects and increase the difficulty
    gameObjects.ball.increaseSpeed();
    gameObjects.paddle.reset();
    gameObjects.bricks.reset();

    // Display level completion message
    alert(`Level ${level - 1} completed. Press OK to continue.`);
  }

  // Render the game objects
  gameObjects.ball.render(ctx);
  gameObjects.paddle.render(ctx);
  gameObjects.bricks.render(ctx);

  // Render score, lives, and level on the canvas
  drawText(ctx, 'Score: ' + score, 8, 20);
  drawText(ctx, 'Lives: ' + lives, canvas.width - 60, 20);
  drawText(ctx, 'Level: ' + level, canvas.width / 2 - 20, 20);
}

// Handle brick-ball collision in Breakout
function handleBrickBallCollision(bricks, ball) {
  for (let i = 0; i < bricks.rows; i++) {
    for (let j = 0; j < bricks.columns; j++) {
      let brick = bricks.bricksArray[i][j];
      if (brick.status === 1) {
        if (ball.x + ball.radius > brick.x && ball.x - ball.radius < brick.x + bricks.width &&
            ball.y + ball.radius > brick.y && ball.y - ball.radius < brick.y + bricks.height) {
          ball.dy = -ball.dy;
          brick.status = 0;
          score += 10;
        }
      }
    }
  }
}

// Reset Breakout game state
function resetBreakoutGameState() {
  lives = 3;
  score = 0;
  level = 1;

  gameObjects.ball.reset();
  gameObjects.paddle.reset();
  gameObjects.bricks.reset();
}

// Check if all bricks have been cleared
function bricksCleared(bricks) {
  for (let i = 0; i < bricks.rows; i++) {
    for (let j = 0; j < bricks.columns; j++) {
      if (bricks.bricksArray[i][j].status === 1) {
        return false;
      }
    }
  }
  return true;
}

// Draw text on the canvas
function drawText(ctx, text, x, y) {
  ctx.font = '16px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText(text, x, y);
}

export default handleBreakoutLogic;