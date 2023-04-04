// implement the Invader class for shared/invader.js// shared/invader.js

class Invader {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.moveX = 3;
    this.moveY = 0;
  }

  update(canvas) {
    this.x += this.moveX;

    // When it hits the wall, it goes down and changes direction
    if (this.x + this.width > canvas.width || this.x < 0) {
      this.moveX = -this.moveX;
      this.y += this.height;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}

// Export the Invader class
export default Invader;