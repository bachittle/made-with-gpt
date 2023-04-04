// pong.js

import Ball from "./shared/ball.js";
import Paddle from "./shared/paddle.js";

// Game class
class PongGame {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.ball = new Ball(canvas.width / 2, canvas.height / 2, 5);
    this.leftPaddle = new Paddle(10, canvas.height / 2 - 40, 10, 80);
    this.rightPaddle = new Paddle(canvas.width - 20, canvas.height / 2 - 40, 10, 80);
    this.scoreLeft = 0;
    this.scoreRight = 0;
    this.loop = null;
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
    document.addEventListener("keydown", this.handleKeydown);
    document.addEventListener("keyup", this.handleKeyup);
  }

  start() {
    console.log("Starting pong...");
    this.loop = setInterval(() => {
      this.update();
      this.draw();
    }, 1000 / 60);
  }

  update() {
    this.ball.update(this.canvas);
    this.leftPaddle.update(this.canvas);
    this.rightPaddle.update(this.canvas);

    if (this.ball.x - this.ball.radius < 0) {
      this.scoreRight++;
      this.ball.reset(this.canvas.width / 2, this.canvas.height / 2);
    }

    if (this.ball.x + this.ball.radius > this.canvas.width) {
      this.scoreLeft++;
      this.ball.reset(this.canvas.width / 2, this.canvas.height / 2);
    }

    this.checkBallCollision();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.draw(this.ctx);
    this.leftPaddle.draw(this.ctx);
    this.rightPaddle.draw(this.ctx);
    this.drawScores(this.ctx);
  }

  handleKeydown(event) {
    if (event.key === "ArrowUp") {
      this.rightPaddle.movingUp = true;
    } else if (event.key === "ArrowDown") {
      this.rightPaddle.movingDown = true;
    } else if (event.key === "w") {
      this.leftPaddle.movingUp = true;
    } else if (event.key === "s") {
      this.leftPaddle.movingDown = true;
    }
  }

  handleKeyup(event) {
    if (event.key === "ArrowUp") {
      this.rightPaddle.movingUp = false;
    } else if (event.key === "ArrowDown") {
      this.rightPaddle.movingDown = false;
    } else if (event.key === "w") {
      this.leftPaddle.movingUp = false;
    } else if (event.key === "s") {
      this.leftPaddle.movingDown = false;
    }
  }

  ballCollidesWithPaddle(paddle) {
    return (
      this.ball.x + this.ball.radius > paddle.x &&
      this.ball.x - this.ball.radius < paddle.x + paddle.width &&
      this.ball.y + this.ball.radius > paddle.y &&
      this.ball.y - this.ball.radius < paddle.y + paddle.height
    );
  }

  checkBallCollision() {
    if (this.ballCollidesWithPaddle(this.leftPaddle)) {
      this.ball.vx = Math.abs(this.ball.vx);
    } else if (this.ballCollidesWithPaddle(this.rightPaddle)) {
      this.ball.vx = -Math.abs(this.ball.vx);
    }
  }

  drawScores(ctx) {
    ctx.font = "20px Arial";
    ctx.fillText(`${this.scoreLeft}`, this.canvas.width / 2 - 40, 20);
    ctx.fillText(`${this.scoreRight}`, this.canvas.width / 2 + 20, 20);
  }
}

// Export the PongGame class
export default PongGame;

// rewrite the code and ...