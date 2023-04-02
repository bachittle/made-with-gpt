# get list of arcade games to make, and start building a folder hierarchy
# filegpt -f create.md -m gpt-4 >> create.md

# create stub files for hierarchy
# filegpt -f create.md touch.sh -m gpt-4 >> touch.sh

# write steps
# filegpt -f docs/create.md docs/steps.md -m gpt-4 >> docs/steps.md

# begin writing game loop
# filegpt -f docs/create.md js/game_engine/game_loop.js -m gpt-4 >> js/game_engine/game_loop.js

# begin writing game objects
# filegpt -f docs/create.md js/game_engine/game_loop.js js/game_engine/game_objects.js -m gpt-4 >> js/game_engine/game_objects.js

# begin writing input handlers
# filegpt -f docs/create.md js/game_engine/game_loop.js js/game_engine/game_objects.js js/game_engine/input_handler.js -m gpt-4 >> js/game_engine/input_handler.js

# write index.html stub
# filegpt -f docs/create.md docs/steps.md index.html -m gpt-4 >> index.html

# implement pong.js
# filegpt -f docs/*.md js/game_engine/*.js js/game_specific_scripts/pong.js -m gpt-4 >> js/game_specific_scripts/pong.js

# implement breakout.js
# filegpt -f docs/*.md js/game_engine/*.js js/game_specific_scripts/breakout.js -m gpt-4 >> js/game_specific_scripts/breakout.js

# implement css
# filegpt -f docs/*.md index.html css/main.css -m gpt-4 >> css/main.css

# implement main.js
# filegpt -f docs/*.md index.html js/main.js -m gpt-4 >> js/main.js

# fix bounce angle
filegpt -f js/game_engine/game_loop.js -m gpt-4 >> js/game_engine/game_loop.js