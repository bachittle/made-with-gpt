#!/bin/bash

# Create necessary directories
mkdir assets assets/fonts assets/sounds css games js

# Initialize empty files
touch css/main.css
touch games/breakout.js
touch js/main.js js/game_framework.js
touch index.html

# Insert basic structure into index.html
echo '<!DOCTYPE html>
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
</html>' > index.html

# Create games_config.json and add initial content
echo '[
    {
        "name": "Breakout",
        "file": "breakout.js"
    },
    {
        "name": "Pong",
        "file": "pong.js"
    }
]' > js/games_config.json

echo "Arcade Cabinet folder structure and empty files have been initialized."