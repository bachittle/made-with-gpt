// implement main.js
// start implementing step 2

// Step 2: Implement basic game selection.

// Define the list of available games.
const gamesConfig = [
    {
        name: "Breakout",
        file: "games/breakout.js"
    }
];

// The generateMenu function generates menu items for each game in the list.
function generateButtons() {
    const buttonsContainer = document.getElementById("gameButtons");

    gamesConfig.forEach((game) => {
        const gameButton = document.createElement("button");
        gameButton.innerHTML = game.name;
        gameButton.classList.add("button");
        gameButton.addEventListener("click", () => gameMenuItemClicked(game.file));
        buttonsContainer.appendChild(gameButton);
    });
}

// The gameMenuItemClicked function is called when a game menu item is clicked.
function gameMenuItemClicked(gameFilePath) {
    loadGame(gameFilePath);
}

// The loadGame function dynamically loads the selected game file and starts the game.
function loadGame(gameFilePath) {
    // TODO: Implement this function.
}

// Call the generateMenu function to populate the menu with games.
generateButtons();