I want to make an arcade cabinet in javascript. It contains a bunch of simple arcade games that do not have any texture. 

Some examples of games that I will start with:
- pong.js
- breakout.js

Come up with some more arcade games for this cabinet. Invent your own as well as including clones of other games. Here are some classic arcade games and some original ideas for your arcade cabinet:

Classic games:
1. space_invaders.js - a Space Invaders clone
2. pacman.js - a Pac-Man clone
3. asteroids.js - an Asteroids clone
4. snake.js - a Snake clone
5. tetris.js - a Tetris clone
6. frogger.js - a Frogger clone

Original games:
1. reaction_racer.js - a simple racing game where players must quickly steer the car to avoid obstacles 
2. alien_lander.js - control a spaceship and land it smoothly on a platform by adjusting its position and velocity
3. heroic_hopper.js - a one-button game where the player must time their jumps to navigate platforms and avoid enemies
4. laser_defense.js - defend a base by shooting down descending enemy ships and projectiles
5. jump_n_dash.js - an endless runner where the player jumps, slides, and dashes to avoid obstacles and collect power-ups
6. shape_shifter.js - a puzzle game where players must rotate and match shapes to clear lines and advance levels

These games should provide a diverse selection for your arcade cabinet while maintaining the theme of simple graphics and gameplay.

Define a hierarchal folder structure that would be good for this project. Use markdown bullet lists (dashes) for the hierarchy.
Make the code structure only include breakout.js for now, but add the ability to add other games later.
each js file will not include imports from other modules: they will be their own isolated games that interact with a canvas.

```
- arcade_cabinet
    - assets
        - fonts
        - sounds
    - css
        - main.css
    - games
        - breakout.js
        - pong.js
        - space_invaders.js
        - pacman.js
        - asteroids.js
        - snake.js
        - tetris.js
        - frogger.js
        - reaction_racer.js
        - alien_lander.js
        - heroic_hopper.js
        - laser_defense.js
        - jump_n_dash.js
        - shape_shifter.js
    - js
        - main.js
        - game_framework.js
    - index.html
```

In this folder structure, the assets folder will contain any fonts and sounds that the games might need. The css folder will have the main stylesheet for the entire project. The games folder will hold all the individual game files including breakout.js and the others you plan to add later. The js folder will have the main.js file responsible for loading and managing the games, as well as a game_framework.js file which will have common utilities and functions that will be useful across different games. Finally, there will be an index.html file which serves as the main entry point for the project.

To make it easy to add games later, you can create a simple JSON configuration file in the js folder, like "games_config.json", that contains the metadata for each game.

```json
[
    {
        "name": "Breakout",
        "file": "breakout.js"
    },
    {
        "name": "Pong",
        "file": "pong.js"
    }
]
```

In the main.js file, you can write code to load the list of games from the JSON file and dynamically create menu items for each game in the index.html file. When a user selects a game from the menu, main.js would load the corresponding JS file, create a new instance of the game class, and start the game loop.

Remember to include the following structure in your index.html:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <title>Arcade Cabinet</title>
</head>
<body>
    <div id="gameContainer">
        <canvas id="gameCanvas"></canvas>
    </div>
    <div id="gameMenu">
        <!-- Dynamically populated menu items -->
    </div>
    <script src="js/main.js"></script>
</body>
</html>
```

This way, it will be easy to add new games in the future. Just add their .js files to the games folder, and include their metadata in the games_config.json file.