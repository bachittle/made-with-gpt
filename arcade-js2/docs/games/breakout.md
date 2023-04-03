write the implementation code for breakout.js
comment if any of the other files need to be updated accordingly

```javascript
// breakout.js

// Game class
class BreakoutGame {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.ball = new Ball(50, 50, 5);
    this.paddle = new Paddle(canvas.width / 2, canvas.height - 10, 80, 10);
    this.isGameOver = false;
    this.loop = null;
  }

  start() {
    this.loop = setInterval(() => {
      this.update();
      this.draw();
    }, 1000 / 60);
  }

  update() {
    this.ball.update(this.canvas);
    // TODO: Add paddle update and collision detection between ball, paddle, and bricks.

    if (this.isGameOver) {
      clearInterval(this.loop);
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.draw(this.ctx);
    this.paddle.draw(this.ctx);
  }
}

// Ball class
class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = 2;
    this.vy = 2;
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
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
  }
}

// Export the BreakoutGame class
export default BreakoutGame;
```

With the above implementation for `breakout.js`, you will need to update the `main.js` file to load the game using the ES6 imports. Update the `loadGame` function as follows:

```javascript
// main.js

// The loadGame function dynamically loads the selected game file and starts the game.
async function loadGame(gameFilePath) {
  const gameModule = await import(gameFilePath);
  const gameClass = gameModule.default;
  const canvas = document.getElementById("gameCanvas");
  const game = new gameClass(canvas);
  game.start();
}
```

Finally, update the `gamesConfig` object in `main.js` to include the `importPath` for the Breakout game:

```javascript
// main.js

const gamesConfig = [
  {
    name: "Breakout",
    file: "games/breakout.js",
    importPath: "./games/breakout.js"
  }
];
```

Don't forget to include the `type="module"` attribute in the script tag for `main.js` in the `index.html` file:

```html
<script src="js/main.js" type="module"></script>
```


what other fixes and features should be added to this breakout clone?

1. Keyboard controls: Add the ability for users to control the paddle using the left and right arrow keys, or alternative keys like "A" and "D".

2. Brick objects and layout: Create a Brick class and generate an array of bricks to form a grid at the top of the canvas. Implement collision detection between the ball and bricks so that the bricks are removed upon collision.

3. Scoring: Add scoring functionality to the game, so that users get points for each brick they break, and display the current score on the canvas.

4. Game over and victory conditions: Add conditions for game over (e.g., if the ball falls below the paddle) and victory (e.g., if all the bricks are broken) with corresponding messages displayed on the canvas.

5. Multiple levels: Implement multiple levels with different brick layout designs and increasing difficulty.

6. Power-ups: Add power-up items like a wider paddle, slower ball, or multi-ball feature that drop from broken bricks and can be caught by the user's paddle to activate the bonus.

7. Sound effects and background music: Add sound effects for ball bounces, brick breaks, and paddle collisions. Include background music for a more engaging gaming experience.

8. Pause and restart: Implement the ability for users to pause the game and restart from the current level or the beginning of the game.

9. High scores and local storage: Track high scores and save them in the browser's local storage so users can track their progress over time.

10. Responsive design: Make the game fully responsive, adapting to different devices and screen sizes.

11. Customization options: Allow users to customize the game elements, such as ball and paddle colors, brick patterns, or background image.


---


rewrite this code and add the ability to use the arrow keys to move the paddle left and right.
