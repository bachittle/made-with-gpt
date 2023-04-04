// implement player.js

// player.js

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.speed = 2;
    this.movingLeft = false;
    this.movingRight = false;
    this.movingUp = false;
    this.movingDown = false;
  }

  update(canvas) {
    if (this.movingLeft && this.x > 0) {
      this.x -= this.speed;
    }

    if (this.movingRight && this.x < canvas.width) {
      this.x += this.speed;
    }

    if (this.movingUp && this.y > 0) {
      this.y -= this.speed;
    }

    if (this.movingDown && this.y < canvas.height) {
      this.y += this.speed;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "rgb(255, 255, 0)";
    ctx.fill();
    ctx.closePath();
  }
}

export default Player;