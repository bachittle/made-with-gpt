#!/bin/bash

# Create directories
mkdir -p assets/audio assets/images assets/fonts
mkdir -p css/game_specific_styles
mkdir -p js/game_specific_scripts js/game_engine

# Create root files
touch index.html

# Create CSS files
touch css/main.css
touch css/game_specific_styles/pong.css
touch css/game_specific_styles/breakout.css

# Create main JavaScript file
touch js/main.js

# Create game-specific JavaScript files
touch js/game_specific_scripts/pong.js
touch js/game_specific_scripts/breakout.js

# Create game engine files
touch js/game_engine/game_loop.js
touch js/game_engine/game_objects.js
touch js/game_engine/input_handler.js

echo "Initial file structure created."
