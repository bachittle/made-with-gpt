the canvas does not fit in the box, write some code to fix this

You can fix this by setting the canvas to fit within the game-container div by updating the CSS in the main.css file as follows:

```css
/* main.css */

/* ... other styles above ... */

#game-container {
    width: 640px;
    height: 480px;
    border: 2px solid #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
#gameCanvas {
    max-width: 100%;
    max-height: 100%;
}

/* ... other styles below ... */
```

This update adds display: flex, align-items: center, and justify-content: center to the #game-container style to center the canvas within the container. It also sets max-width and max-height for the #gameCanvas to 100% to ensure the canvas doesn't overflow its container.