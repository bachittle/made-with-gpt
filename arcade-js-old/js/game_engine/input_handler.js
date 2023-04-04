// begin writing the input handler, monitor user inputs (e.g., keyboard, touch) and update the game state accordingly.

// input_handler.js

class InputHandler {
  constructor() {
    this.left = false;
    this.right = false;
    this.start = false;

    // Attach event listeners for keydown and keyup events
    document.addEventListener('keydown', this.keyDownHandler.bind(this));
    document.addEventListener('keyup', this.keyUpHandler.bind(this));

    // Attach event listeners for touch events (for mobile devices)
    document.addEventListener('touchstart', this.touchStartHandler.bind(this));
    document.addEventListener('touchend', this.touchEndHandler.bind(this));
  }

  // Keydown event handler
  keyDownHandler(e) {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
      this.left = true;
    }

    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
      this.right = true;
    }

    if (e.key === 'Enter') {
      this.start = true;
    }
  }

  // Keyup event handler
  keyUpHandler(e) {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
      this.left = false;
    }

    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
      this.right = false;
    }

    if (e.key === 'Enter') {
      this.start = false;
    }
  }

  // Touchstart event handler
  touchStartHandler(e) {
    if (e.touches.length > 0) {
      const touchX = e.touches[0].clientX;

      if (touchX < canvas.width / 2) {
        this.left = true;
      } else {
        this.right = true;
      }

      this.start = true;
    }
  }

  // Touchend event handler
  touchEndHandler(e) {
    this.left = false;
    this.right = false;
    this.start = false;
  }
}

export default InputHandler;