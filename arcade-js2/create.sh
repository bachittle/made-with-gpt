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
filegpt -f index.html css/main.css js/main.js docs/issues/002.md -m gpt-4 >> docs/issues/002.md