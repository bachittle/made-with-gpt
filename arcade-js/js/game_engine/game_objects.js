// begin writing basic game objects, such as a ball, paddle, bricks, etc. 
// and their respective methods (update, draw, etc.)

// game_objects.js

import { canvas } from "./game_loop.js";

// Ball class
export class Ball {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.radius = 10;
    this.speed = 5;
    this.dx = this.speed;
    this.dy = -this.speed;
  }

  // Update the ball position and check for collisions with the canvas
  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
      this.dx = -this.dx;
    }

    if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
      this.dy = -this.dy;
    }
  }

  // Render the ball on the canvas
  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  // Check if the ball is out of bounds
  isOutOfBound() {
    return this.y - this.radius < 0 || this.y + this.radius > canvas.height;
  }

  // reset
  reset() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.dx = this.speed;
    this.dy = -this.speed;
  }
}

// Paddle class
export class Paddle {
  constructor(isPlayer = false) {
    this.width = 100;
    this.height = 20;
    this.speed = 5;
    this.x = (canvas.width - this.width) / 2;
    this.y = isPlayer ? canvas.height - this.height * 2 : this.height;
  }

  // Update the paddle position based on input
  update(inputHandler) {
    if (inputHandler.left && this.x > 0) {
      this.x -= this.speed;
    }

    if (inputHandler.right && this.x + this.width < canvas.width) {
      this.x += this.speed;
    }
  }

  // Render the paddle on the canvas
  render(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// Bricks class
export class Bricks {
  constructor() {
    this.rows = 4;
    this.columns = 10;
    this.width = 50;
    this.height = 20;
    this.padding = 10;
    this.offsetTop = 40;
    this.offsetLeft = 30;
    this.bricksArray = [];

    // Initialize the bricks array
    for (let i = 0; i < this.rows; i++) {
      this.bricksArray[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.bricksArray[i][j] = { x: 0, y: 0, status: 1 };
      }
    }
  }

  // Update the bricks status
  update() {
    // Check for collisions with the ball, and if so, update the brick status
  }

  // Render the bricks on the canvas
  render(ctx) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.bricksArray[i][j].status === 1) {
          const brickX = j * (this.width + this.padding) + this.offsetLeft;
          const brickY = i * (this.height + this.padding) + this.offsetTop;
          this.bricksArray[i][j].x = brickX;
          this.bricksArray[i][j].y = brickY;

          ctx.beginPath();
          ctx.rect(brickX, brickY, this.width, this.height);
          ctx.closePath();
          ctx.fill();
        }
      }
    }
  }
}

export default Ball;