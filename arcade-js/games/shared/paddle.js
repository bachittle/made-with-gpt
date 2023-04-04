// Paddle class
class Paddle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 5;

    // for breakout
    this.movingLeft = false;
    this.movingRight = false;

    // for pong
    this.movingUp = false;
    this.movingDown = false;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveUp() {
    this.y -= this.speed;
  }

  moveDown() {
    this.y += this.speed;
  }

  update(canvas) {
    if (this.movingLeft) {
      this.moveLeft();
    }
    if (this.movingRight) {
      this.moveRight();
    }

    if (this.movingUp) {
      this.moveUp();
    }
    if (this.movingDown) {
      this.moveDown();
    }


    if (this.x < 0) {
      this.x = 0;
    } else if (this.x + this.width > canvas.width) {
      this.x = canvas.width - this.width;
    }

    if (this.y < 0) {
      this.y = 0;
    } else if (this.y + this.height > canvas.height) {
      this.y = canvas.height - this.height;
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

export default Paddle;