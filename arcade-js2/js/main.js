// main.js

// Implement basic game selection with Pong added to the list of games.

// Define the list of available games.
const gamesConfig = [
    {
        name: "Breakout",
        file: "../games/breakout.js",
    },
    {
        name: "Pong",
        file: "../games/pong.js",
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
async function loadGame(gameFilePath) {
    const gameModule = await import(gameFilePath);
    const gameClass = gameModule.default;
    const canvas = document.getElementById("gameCanvas");

    canvas.width = 800;
    canvas.height = 600;

    const game = new gameClass(canvas);
    game.start();
}

// Call the generateMenu function to populate the menu with games.
generateButtons();