write a step-by-step process for developing this code to achieve a MVP.

1. Set up the development environment:
   - Create a new folder for the project.
   - Initialize a local Git repository to track changes.
   - Install any necessary tools, libraries, or frameworks that will be used.

2. Create the basic file structure:
   - Create the folders and files as described in the "simplified structure" above.
   - Add an initial .gitignore file with typical exclusions for a JavaScript project (e.g., node_modules, *.log, etc.).

3. Develop the core game engine:
   - In game_loop.js, create a basic game loop that will handle updating and rendering the game.
   - In game_objects.js, create basic game objects (such as a ball, paddle, bricks, etc.) and their respective methods (e.g., update, draw).
   - In input_handler.js, create an input handler that will monitor user inputs (e.g., keyboard, touch) and update the game state accordingly.

4. Develop Pong:
   - In pong.js, create the Pong-specific game logic (e.g., ball bouncing off paddles, resetting the ball, scoring, etc.).
   - Update main.css and pong.css to properly style the Pong game elements.

5. Develop Breakout:
   - In breakout.js, create the Breakout-specific game logic (e.g., ball bouncing off bricks, paddle movement, game progression, etc.).
   - Update main.css and breakout.css to properly style the Breakout game elements.

6. Create the user interface:
   - In index.html, create the necessary buttons, menus, or other UI elements to allow users to interact with the game (e.g., starting, pausing, switching between games, etc.).
   - Update main.css to style the UI elements and overall page layout.

7. Integrate the game engine with the games:
   - In main.js, develop the logic to switch between the two games, managing the game state and updating the UI as appropriate (e.g., showing game over messages, updating scores, etc.).
   - Ensure the game engine updates and renders the appropriate game objects based on the user's selection (Pong or Breakout).

8. Test the game thoroughly:
   - Playtest each game to ensure the mechanics, game logic, and user experience work correctly and as expected.
   - Debug and resolve any issues identified during testing.

9. Optimize the code:
   - Review the codebase and refactor any areas of the code to improve readability, maintainability, and performance.

10. Prepare the project for deployment:
    - Test the responsiveness and compatibility of the game on various devices (including desktop, mobile, and tablet) and browsers.
    - Optimize the assets (e.g., minify JavaScript files, optimize images, etc.) to improve loading times and performance.
    - Set up any necessary hosting, domain, or certificates.

11. Deploy the MVP, track user feedback, and iterate on the project:
    - Release the MVP to users and gather feedback on usability, performance, and other important factors.
    - Use feedback to prioritize future updates, bug fixes, or new features for the arcade cabinet.

12. As you continue to develop and add more games to the cabinet, continue to follow the steps above to create new game-specific scripts and assets, integrate them into the main.js file, and update the UI in index.html to accommodate the new games.