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
    },
    {
        name: "SpaceInvaders",
        file: "../games/space_invaders.js",
    },
    {
        name: "Qix",
        file: "../games/qix.js",
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

let game;

// The loadGame function dynamically loads the selected game file and starts the game.
async function loadGame(gameFilePath) {
    if (game) {
        game.stop();
    }
    const gameModule = await import(gameFilePath);
    const gameClass = gameModule.default;
    const canvas = document.getElementById("gameCanvas");

    canvas.width = 800;
    canvas.height = 600;

    game = new gameClass(canvas);
    game.start();
}

// Call the generateMenu function to populate the menu with games.
generateButtons();