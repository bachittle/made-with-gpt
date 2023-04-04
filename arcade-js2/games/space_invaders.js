// based on the code structure provided, write space_invaders.js and implement space invaders game logic
// do not use images, draw shapes instead

// space_invaders.js

import Ship from "./shared/ship.js";
import Bullet from "./shared/bullet.js";
import Invader from "./shared/invader.js";

// Game class
class SpaceInvaders {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.ship = new Ship(canvas.width / 2, canvas.height - 40);
    this.bullets = [];
    this.invaders = this.createInvaders(5, 11);
    this.gameOver = false;
    this.score = 0;
    this.lives = 3;
    this.loop = null;
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
    window.addEventListener("keydown", this.handleKeydown);
    window.addEventListener("keyup", this.handleKeyup);
  }

  start() {
    console.log("Starting space invaders...");
    this.loop = setInterval(() => {
      this.update();
      this.draw();
    }, 1000 / 60);
  }

  createInvaders(rows, cols) {
    let invaders = [];
    for (let row = 0; row < rows; row++) {
      invaders[row] = [];
      for (let col = 0; col < cols; col++) {
        const invaderX = col * (40 + 20) + 40;
        const invaderY = row * (40 + 20) + 60;
        invaders[row][col] = new Invader(invaderX, invaderY);
      }
    }
    return invaders;
  }

  update() {
    this.ship.update(this.canvas);
    this.updateBullets();
    this.updateInvaders();

    if (this.checkInvadersHitBottom()) {
      this.gameOver = true;
    }

    if (this.gameOver) {
      clearInterval(this.loop);
      alert(`Game Over! Your final score is ${this.score}.`);
      document.location.reload();
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ship.draw(this.ctx);
    this.drawBullets();
    this.drawInvaders();
    this.drawScore();
    this.drawLives();
  }

  handleKeydown(event) {
    if (event.key === "ArrowLeft") {
      this.ship.movingLeft = true;
    } else if (event.key === "ArrowRight") {
      this.ship.movingRight = true;
    } else if (event.key === " ") {
      this.ship.shooting = true;
    }
  }

  handleKeyup(event) {
    if (event.key === "ArrowLeft") {
      this.ship.movingLeft = false;
    } else if (event.key === "ArrowRight") {
      this.ship.movingRight = false;
    } else if (event.key === " ") {
      this.ship.shooting = false;
    }
  }

  updateBullets() {
    if (this.ship.shooting && this.bullets.length < 1) {
      this.bullets.push(new Bullet(this.ship.x + this.ship.width / 2, this.ship.y));
    }

    this.bullets.forEach((bullet, bulletIndex) => {
      bullet.update();

      if (bullet.y + bullet.height < 0) {
        this.bullets.splice(bulletIndex, 1);
      }

      this.invaders.forEach((invaderRow, rowIndex) => {
        invaderRow.forEach((invader, colIndex) => {
          if (bullet.collidesWith(invader)) {
            this.bullets.splice(bulletIndex, 1);
            this.invaders[rowIndex].splice(colIndex, 1);
            this.score++;
          }
        });
      });
    });
  }

  updateInvaders() {
    this.invaders.forEach((invaderRow) => {
      invaderRow.forEach((invader) => {
        invader.update(this.canvas);
      });
    });
  }

  drawBullets() {
    this.bullets.forEach((bullet) => {
      bullet.draw(this.ctx);
    });
  }

  drawInvaders() {
    this.invaders.forEach((invaderRow) => {
      invaderRow.forEach((invader) => {
        invader.draw(this.ctx);
      });
    });
  }

  drawScore() {
    this.ctx.font = "20px Arial";
    this.ctx.fillText(`Score: ${this.score}`, 8, 20);
  }

  drawLives() {
    this.ctx.font = "20px Arial";
    this.ctx.fillText(`Lives: ${this.lives}`, this.canvas.width - 82, 20);
  }

  checkInvadersHitBottom() {
    let hitBottom = false;
    this.invaders.forEach((invaderRow) => {
      invaderRow.forEach((invader) => {
        if (invader.y + invader.height >= this.canvas.height - this.ship.height - 10) {
          hitBottom = true;
        }
      });
    });
    return hitBottom;
  }
}

// Export the SpaceInvaders class
export default SpaceInvaders;