// rewrite the code and random colored bricks that give a power-up. Implement the following power-ups: 
// 1a. wider paddle, blue 
// 1b. narrower paddle, blue 
// 2a. faster ball, red
// 2b. slower ball, red
// 3. extra life, green 
// 4. multi-ball, yellow
// make the colored powerups appear randomly, and most of the time the bricks are just normal bricks (black)
// show text that tells the user what powerup they got

// breakout.js

// Game class
class BreakoutGame {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.ball = new Ball(50, 50, 5);
    this.paddle = new Paddle(canvas.width / 2, canvas.height - 10, 80, 10);
    this.widerPaddle = this.widerPaddle.bind(this);
    this.narrowerPaddle = this.narrowerPaddle.bind(this);
    this.fasterBall = this.fasterBall.bind(this);
    this.slowerBall = this.slowerBall.bind(this);
    this.extraLife = this.extraLife.bind(this);
    this.multiBall = this.multiBall.bind(this);
    this.powerUps = [
      {color: "blue", action: this.widerPaddle},
      {color: "blue", action: this.narrowerPaddle},
      {color: "red", action: this.fasterBall},
      {color: "red", action: this.slowerBall},
      {color: "green", action: this.extraLife},
      {color: "yellow", action: this.multiBall},
    ];
    this.bricks = this.createBricks(5, 7);
    this.isGameOver = false;
    this.score = 0;
    this.lives = 3;
    this.loop = null;
    this.totalBricks = 5 * 7;
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
    window.addEventListener("keydown", this.handleKeydown);
    window.addEventListener("keyup", this.handleKeyup);
  }

  start() {
    console.log("Starting breakout...");
    this.loop = setInterval(() => {
      this.update();
      this.draw();
    }, 1000 / 60);
  }

  createBricks(rows, cols) {
    let bricks = [];
    for (let row = 0; row < rows; row++) {
      bricks[row] = [];
      for (let col = 0; col < cols; col++) {
        const brickX = col * (80 + 10) + 40;
        const brickY = row * (20 + 10) + 60;
        const powerUpChance = Math.random() * 100;
        let brickPowerUp = null;
        if (powerUpChance < 20) {
          brickPowerUp = this.powerUps[Math.floor(Math.random() * this.powerUps.length)];
        }
        bricks[row][col] = new Brick(brickX, brickY, 80, 20, true, brickPowerUp);
      }
    }
    return bricks;
  }

  update() {
    this.ball.update(this.canvas);
    this.paddle.update(this.canvas);

    if (this.ballCollidesWithPaddle()) {
      this.ball.vy = -Math.abs(this.ball.vy);
    }

    this.checkBrickCollisions();

    if (this.ball.y + this.ball.radius > this.canvas.height) {
      this.lives--;
      if (this.lives === 0) {
        this.isGameOver = true;
      } else {
        this.ball.reset(this.canvas.width / 2, this.canvas.height / 2);
      }
    }

    if (this.isGameOver || this.score === this.totalBricks) {
      clearInterval(this.loop);
      this.gameOver(this.score === this.totalBricks);
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.draw(this.ctx);
    this.paddle.draw(this.ctx);
    this.drawBricks(this.ctx);
    this.drawScore(this.ctx);
    this.drawLives(this.ctx);
  }

  handleKeydown(event) {
    if (event.key === "ArrowLeft") {
      this.paddle.movingLeft = true;
    } else if (event.key === "ArrowRight") {
      this.paddle.movingRight = true;
    }
  }

  handleKeyup(event) {
    if (event.key === "ArrowLeft") {
      this.paddle.movingLeft = false;
    } else if (event.key === "ArrowRight") {
      this.paddle.movingRight = false;
    }
  }

  ballCollidesWithPaddle() {
    return (
      this.ball.x + this.ball.radius > this.paddle.x &&
      this.ball.x - this.ball.radius < this.paddle.x + this.paddle.width &&
      this.ball.y + this.ball.radius > this.paddle.y &&
      this.ball.y - this.ball.radius < this.paddle.y + this.paddle.height
    );
  }

  checkBrickCollisions() {
    for (let row = 0; row < this.bricks.length; row++) {
      for (let col = 0; col < this.bricks[row].length; col++) {
        const brick = this.bricks[row][col];
        if (brick.visible && this.ballCollidesWithBrick(brick)) {
          brick.visible = false;
          this.ball.vy = -this.ball.vy;
          this.score++;
          if (brick.powerUp) {
            brick.powerUp.action();
            this.displayPowerUpText(brick.powerUp.color);
          }
        }
      }
    }
  }

  ballCollidesWithBrick(brick) {
    return (
      this.ball.x + this.ball.radius > brick.x &&
      this.ball.x - this.ball.radius < brick.x + brick.width &&
      this.ball.y + this.ball.radius > brick.y &&
      this.ball.y - this.ball.radius < brick.y + brick.height
    );
  }

  drawBricks(ctx) {
    for (let row = 0; row < this.bricks.length; row++) {
      for (let col = 0; col < this.bricks[row].length; col++) {
        this.bricks[row][col].draw(ctx);
      }
    }
  }

  drawScore(ctx) {
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${this.score}`, 8, 20);
  }

  drawLives(ctx) {
    ctx.font = "20px Arial";
    ctx.fillText(`Lives: ${this.lives}`, this.canvas.width - 82, 20);
  }

  gameOver(isVictory) {
    if (isVictory) {
      alert(`Congratulations! You won with a score of ${this.score}!`);
    } else {
      alert(`Game Over! Your final score is ${this.score}.`);
    }
    document.location.reload();
  }

  displayPowerUpText(color) {
    let message = "";
    switch (color) {
      case "blue":
        message = "Paddle size changed!";
        break;
      case "red":
        message = "Ball speed changed!";
        break;
      case "green":
        message = "Extra life!";
        break;
      case "yellow":
        message = "Multi-ball!";
        break;
    }
    alert(message);
  }

  widerPaddle() {
    this.paddle.width *= 1.5;
  }

  narrowerPaddle() {
    this.paddle.width *= 0.75;
  }

  fasterBall() {
    this.ball.vx *= 1.5;
    this.ball.vy *= 1.5;
  }

  slowerBall() {
    this.ball.vx *= 0.75;
    this.ball.vy *= 0.75;
  }

  extraLife() {
    this.lives++;
  }

  multiBall() {
    // TODO: Implement multi-ball functionality
  }
}

// Ball class
class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = 4;
    this.vy = 4;
  }

  update(canvas) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.vx = -this.vx;
    }

    if (this.y - this.radius < 0) {
      this.vy = -this.vy;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
  }

  reset(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 4;
    this.vy = 4;
  }
}

// Paddle class
class Paddle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 5;
    this.movingLeft = false;
    this.movingRight = false;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  update(canvas) {
    if (this.movingLeft) {
      this.moveLeft();
    }
    if (this.movingRight) {
      this.moveRight();
    }

    if (this.x < 0) {
      this.x = 0;
    } else if (this.x + this.width > canvas.width) {
      this.x = canvas.width - this.width;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
  }
}

// Brick class
class Brick {
  constructor(x, y, width, height, visible, powerUp) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.visible = visible;
    this.powerUp = powerUp;
  }

  draw(ctx) {
    if (this.visible) {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = this.powerUp ? this.powerUp.color : "black";
      ctx.fill();
      ctx.closePath();
    }
  }
}

// Export the BreakoutGame class
export default BreakoutGame;

// rewrite the code and ...