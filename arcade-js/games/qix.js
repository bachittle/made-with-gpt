// qix.js

import Line from "./shared/line.js";
import Player from "./shared/player.js";
import Qix from "./shared/qix.js";

// Game class
class QixGame {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.player = new Player(canvas.width / 2, canvas.height - 20);
    this.qix = new Qix(60, 60);
    this.lines = [];
    this.currentLine = null;
    this.isGameOver = false;
    this.loop = null;
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
    window.addEventListener("keydown", this.handleKeydown);
    window.addEventListener("keyup", this.handleKeyup);
  }

  start() {
    console.log("Starting Qix...");

    this.loop = setInterval(() => {
      this.update();
      this.draw();
    }, 1000 / 60);
  }

  stop() {
    clearInterval(this.loop);
  }

  update() {
    this.player.update(this.canvas);
    this.qix.update(this.canvas);
    this.updateCurrentLine();
    this.checkCollision();

    if (this.isGameOver) {
      clearInterval(this.loop);
      this.gameOver();
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (!this.isGameOver) {
      this.player.draw(this.ctx);
      this.qix.draw(this.ctx);
      for (const line of this.lines) {
        line.draw(this.ctx);
      }
      if (this.currentLine) {
        this.currentLine.draw(this.ctx);
      }
    }
  }

  handleKeydown(event) {
    if (event.key === "ArrowLeft") {
      this.player.movingLeft = true;
    } else if (event.key === "ArrowRight") {
      this.player.movingRight = true;
    } else if (event.key === "ArrowUp") {
      this.player.movingUp = true;
    } else if (event.key === "ArrowDown") {
      this.player.movingDown = true;
    } else if (event.key === " ") {
      this.startCurrentLine();
    }
  }

  handleKeyup(event) {
    if (event.key === "ArrowLeft") {
      this.player.movingLeft = false;
    } else if (event.key === "ArrowRight") {
      this.player.movingRight = false;
    } else if (event.key === "ArrowUp") {
      this.player.movingUp = false;
    } else if (event.key === "ArrowDown") {
      this.player.movingDown = false;
    } else if (event.key === " ") {
      this.endCurrentLine();
    }
  }

  startCurrentLine() {
    if (!this.currentLine) {
      this.currentLine = new Line(
        this.player.x,
        this.player.y,
        this.player.x,
        this.player.y
      );
    }
  }

  endCurrentLine() {
    if (this.currentLine) {
      this.lines.push(this.currentLine);
      this.currentLine = null;
    }
  }

  updateCurrentLine() {
    if (this.currentLine) {
      this.currentLine.x2 = this.player.x;
      this.currentLine.y2 = this.player.y;
    }
  }

  checkCollision() {
    if (this.playerCollidesWithQix()) {
      this.isGameOver = true;
    }
  }

  playerCollidesWithQix() {
    const distance = Math.sqrt(
      (this.player.x - this.qix.x) * (this.player.x - this.qix.x) +
        (this.player.y - this.qix.y) * (this.player.y - this.qix.y)
    );
    return distance <= this.player.radius + this.qix.radius;
  }

  gameOver() {
    alert("Game Over! The Qix has caught you.");
    document.location.reload();
  }
}

// Export the QixGame class
export default QixGame;

// rewrite the code and ...