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
# filegpt -f games/pong.js docs/games/pong.md -m gpt-4 >> docs/games/pong.md

# add features to pong
# filegpt -f games/pong.js -m gpt-4 >> games/pong.js

# fix paddles not moving
filegpt -f games/shared/*.js games/pong.js docs/issues/007.md -m gpt-4 >> docs/issues/007.md