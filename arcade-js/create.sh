# define a simpler folder structure
# filegpt -f docs/create.md -m gpt-4 >> docs/create.md

# initial folder structure
# filegpt -f docs/create.md touch.sh -m gpt-4 >> touch.sh

# generate explanations
# filegpt -f docs/create.md docs/explanation.md -m gpt-4 >> docs/explanation.md

# generate a main.css
# filegpt -f docs/create.md index.html css/main.css -m gpt-4 >> css/main.css

# implement the game menu for breakout
# filegpt -f docs/*.md index.html js/main.js >> js/main.js

# fix div issue
# filegpt -f index.html css/main.css js/main.js docs/issues/001.md -m gpt-4 >> docs/issues/001.md
# filegpt -f index.html css/main.css js/main.js docs/issues/002.md -m gpt-4 >> docs/issues/002.md

### breakout

# implement breakout
# filegpt -f index.html js/main.js docs/*.md games/breakout.js -m gpt-4 >> games/breakout.js

# fix canvas stretching issue
# filegpt -f index.html css/main.css js/main.js games/breakout.js docs/issues/003.md -m gpt-4 >> docs/issues/003.md

# remove scroll bars
# filegpt -f index.html css/main.css docs/issues/004.md -m gpt-4 >> docs/issues/004.md

# get more features to implement for breakout
# filegpt -f docs/games/breakout.md -m gpt-4 >> docs/games/breakout.md

# add keyboard controls to breakout
# filegpt -f docs/*.md games/breakout.js -m gpt-4 >> games/breakout.js

# perform upgrades on breakout.js
# filegpt -f games/breakout.js -m gpt-4 >> games/breakout.js

# get some power up ideas 
# filegpt -f docs/games/breakout.md -m gpt-4 >> docs/games/breakout.md

# fix bug it created
# filegpt -f games/breakout.js docs/issues/005.md -m gpt-4 >> docs/issues/005.md

### pong

# implement pong 
# filegpt -f index.html js/main.js docs/*.md games/breakout.js games/pong.js -m gpt-4 >> games/pong.js
# filegpt -f games/breakout.js games/pong.js -m gpt-4 >> games/pong.js

# update the main.js to include pong
# filegpt -f games/pong.js js/main.js -m gpt-4 >> js/main.js

# fix bug
# filegpt -f games/breakout.js games/pong.js js/main.js docs/issues/006.md -m gpt-4 >> docs/issues/006.md

# get more features to implement for pong 
# filegpt -f games/shared/*.js games/pong.js docs/games/pong.md -m gpt-4 >> docs/games/pong.md

# add features to pong
# filegpt -f games/pong.js -m gpt-4 >> games/pong.js

# fix paddles not moving
# filegpt -f games/shared/*.js games/pong.js docs/issues/007.md -m gpt-4 >> docs/issues/007.md

# space invaders

# implement space invaders
# filegpt -f index.html js/main.js games/breakout.js games/space_invaders.js -m gpt-4 >> games/space_invaders.js

# implement the shared objects
# filegpt -f games/space_invaders.js games/shared/ship.js -m gpt-4 >> games/shared/ship.js
# sleep 10
# filegpt -f games/space_invaders.js games/shared/invader.js -m gpt-4 >> games/shared/invader.js
# sleep 10
# filegpt -f games/space_invaders.js games/shared/bullet.js -m gpt-4 >> games/shared/bullet.js

# fix bugs
# filegpt -f games/space_invaders.js games/shared/ship.js games/shared/invader.js games/shared/bullet.js docs/issues/008.md -m gpt-4 >> docs/issues/008.md


# Qix

# implement qix
# filegpt -f index.html js/main.js games/breakout.js games/qix.js -m gpt-4 >> games/qix.js

# implement the shared objects
# filegpt -f games/qix.js games/shared/player.js -m gpt-4 >> games/shared/player.js

# other shared objects were made by default

# get more features to add
# filegpt -f games/qix.js games/shared/qix.js games/shared/line.js games/shared/player.js docs/games/qix.md -m gpt-4 >> docs/games/qix.md

# update qix.js
filegpt -f games/shared/line.js games/shared/player.js games/shared/qix.js games/qix.js -m gpt-4 >> games/qix.js