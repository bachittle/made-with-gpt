// breakout.js

// Game class
class BreakoutGame {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.ball = new Ball(50, 50, 5);
    this.paddle = new Paddle(canvas.width / 2, canvas.height - 10, 80, 10);
    this.bricks = this.createBricks(5, 7);
    this.isGameOver = false;
    this.loop = null;

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
        bricks[row][col] = new Brick(brickX, brickY, 80, 20, true);
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

    if (this.isGameOver) {
      clearInterval(this.loop);
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.draw(this.ctx);
    this.paddle.draw(this.ctx);
    this.drawBricks(this.ctx);
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

    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
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
  constructor(x, y, width, height, visible) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.visible = visible;
  }

  draw(ctx) {
    if (this.visible) {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
    }
  }
}

// Export the BreakoutGame class
export default BreakoutGame;