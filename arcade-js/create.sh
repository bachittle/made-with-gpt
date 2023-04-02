# get list of arcade games to make, and start building a folder hierarchy
# filegpt -f create.md -m gpt-4 >> create.md

# create stub files for hierarchy
# filegpt -f create.md touch.sh -m gpt-4 >> touch.sh

# write steps
# filegpt -f docs/create.md docs/steps.md -m gpt-4 >> docs/steps.md

# begin writing game loop
# filegpt -f docs/create.md js/game_engine/game_loop.js -m gpt-4 >> js/game_engine/game_loop.js

# begin writing game objects
filegpt -f docs/create.md js/game_engine/game_loop.js js/game_engine/game_objects.js -m gpt-4 >> js/game_engine/game_objects.js