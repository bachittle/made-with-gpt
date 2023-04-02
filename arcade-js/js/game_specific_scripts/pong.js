// begin implementing pong.js
// pong.js

// Define the Pong game-specific logic
function handlePongLogic() {
  // Update game objects
  gameObjects.ball.update();
  gameObjects.playerPaddle.update(inputHandler);
  gameObjects.aiPaddle.update(gameObjects.ball);

  // Check for collisions
  handlePaddleBallCollision(gameObjects.playerPaddle, gameObjects.ball);
  handlePaddleBallCollision(gameObjects.aiPaddle, gameObjects.ball);

  // Check for scoring situations
  if (gameObjects.ball.isOutOfBound()) {
    // Determine which player scored based on the ball's y-direction
    const scoringPlayer = gameObjects.ball.dy < 0 ? "player" : "ai";

    // Increment the appropriate player's score
    if (scoringPlayer === "player") {
      playerScore++;
    } else {
      aiScore++;
    }

    // Reset the ball to the center of the screen
    gameObjects.ball.reset();

    // Check for a winning condition (e.g., reaching a certain score), and if needed, show a winning message, pause the game, and/or reset the scores
    if (playerScore === WINNING_SCORE || aiScore === WINNING_SCORE) {
      // Display a winning message
      showWinningMessage(`${scoringPlayer.toUpperCase()} WINS!`);

      // Pause the game
      gamePaused = true;

      // (Optional) Reset scores
      playerScore = 0;
      aiScore = 0;
    }
  }

  // Render game objects and scores
  gameObjects.ball.render(ctx);
  gameObjects.playerPaddle.render(ctx);
  gameObjects.aiPaddle.render(ctx);
  renderScore(ctx, playerScore, aiScore);
}

// Handle paddle-ball collision
function handlePaddleBallCollision(paddle, ball) {
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

// Function to render the scores on screen
function renderScore(ctx, playerScore, aiScore) {
  ctx.font = "24px Arial";
  ctx.textAlign = "center";
  ctx.fillText(`Player: ${playerScore}`, canvas.width / 4, 50);
  ctx.fillText(`AI: ${aiScore}`, (canvas.width * 3) / 4, 50);
}

// Function to show the winning message
function showWinningMessage(message) {
  ctx.font = "48px Arial";
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}