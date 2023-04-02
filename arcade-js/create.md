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
- root
    - assets
        - audio
        - images
        - fonts
    - css
        - main.css
        - game_specific_styles
            - pong.css
            - breakout.css
            - space_invaders.css
            - pacman.css
            - asteroids.css
            - snake.css
            - tetris.css
            - frogger.css
            - reaction_racer.css
            - alien_lander.css
            - heroic_hopper.css
            - laser_defense.css
            - jump_n_dash.css
            - shape_shifter.css
    - js
        - main.js
        - game_specific_scripts
            - pong.js
            - breakout.js
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
        - game_engine
            - game_loop.js
            - game_objects.js
            - input_handler.js
    - index.html

simplify the structure for a starter project that only has pong and breakout. 

- root
    - assets
        - audio
        - images
        - fonts
    - css
        - main.css
        - game_specific_styles
            - pong.css
            - breakout.css
    - js
        - main.js
        - game_specific_scripts
            - pong.js
            - breakout.js
        - game_engine
            - game_loop.js
            - game_objects.js
            - input_handler.js
    - index.html