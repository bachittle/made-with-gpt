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
filegpt -f games/breakout.js docs/issues/005.md -m gpt-4 >> docs/issues/005.md