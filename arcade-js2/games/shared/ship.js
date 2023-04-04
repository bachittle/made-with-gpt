// implement the Ship class for shared/ship.js// shared/ship.js

class Ship {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 20;
    this.speed = 7;
    this.movingLeft = false;
    this.movingRight = false;
    this.shooting = false;
  }

  update(canvas) {
    if (this.movingLeft && this.x > 0) {
      this.x -= this.speed;
    } else if (this.movingRight && this.x + this.width < canvas.width) {
      this.x += this.speed;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Ship;