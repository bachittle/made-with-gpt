// implement the Bullet class for shared/bullet.js// shared/bullet.js

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 2;
    this.height = 10;
    this.speed = 5;
  }

  update() {
    this.y -= this.speed;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
  }

  collidesWith(obj) {
    return (
      this.x < obj.x + obj.width &&
      this.x + this.width > obj.x &&
      this.y < obj.y + obj.height &&
      this.y + this.height > obj.y
    );
  }
}

export default Bullet;