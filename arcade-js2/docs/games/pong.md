Document some updates I should do to the code to make the pong game more enjoyable.
Currently the ball does not bounce off the walls, and I'm not even sure if the score works.

- [X] 1. Add bouncing off walls: To make the game more enjoyable, you should make the ball bounce off the walls. Update the `update` method of the Ball class to check for collisions with the walls and change the `vy` direction accordingly.

```javascript
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
```

- [ ] 2. Ball speed increase: Add a feature to increase the speed of the ball as the game progresses, making the game more challenging over time. You could add a constant speed increase or increase it after certain events such as a goal scored.

- [ ] 3. Improve scoring: Ensure the scoring mechanism works correctly by testing and debugging the code. You may consider displaying a message when a player scores and/or pausing the game briefly.

4. Ball paddle angle: Make the game more dynamic by changing the angle of the ball when it hits the paddle, depending on where it hits. Calculate the angle based on the position of the ball relative to the paddle it collides with.

5. Add sounds: Add sound effects to the game, such as ball bouncing off the walls, paddles, and when a player scores.

6. Better controls: Provide the option for different types of controls (keyboard, touch screen) or additional control options (e.g., using different key configurations).

- [ ] 7. Add game-over condition: Implement a game-over condition such as a maximum score to make the game more competitive.

8. Polish the visuals: Improve the game aesthetics with better fonts, colors, and additional graphics.

- [ ] 9. Implement power-ups: To enhance gameplay, you could add power-ups that the players can collect to give them an advantage (e.g., temporary speed boost, bigger paddle, etc.)

- [ ] 10. Customization options: Allow players to customize certain aspects of the game, such as ball and paddle color, game speed, and other settings.