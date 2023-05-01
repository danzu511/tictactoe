Overview of the project:
- Three.js for creating the visuals of the game. It is responsible for camera, game grid and background
- Html elements are created with JavaScript on top of the Three.js scene
- Node.js environment handles back end. Back end communicates with MongoDB Atlas with Mongoose library.
- Games are stored with user's IP address, so that older games will be loaded for user with matching IP address.
- Tested on safari and chrome browsers
- Project is hosted with Render. 
    1. Front end at: https://tictactoe-fmwd.onrender.com/
    2. Back end at: https://tictactoe-back.onrender.com/ 
- No mobile support. On narrow screens html elements can start to stack up, looking clunky.


Gameplay Tutorial:
- https://tictactoe-fmwd.onrender.com/
- Create grid with different dimensions using slider
- Start creates the grid
- Color the grid with clicks
- Columns, rows, and diagonal lines count for points
- In a 3x3 grid point comes from 3 in row, in 4x4 or larger get point for 4 in row
- After scoring, the cells of the scoring line are cleared
- Points are shown on screen next to colored boxes 
- Turn count is scaled with the dimensions of the grid
- After game is over, it's formatted and stored in a database 

Viewing old games:
- Pressing old games loads the last played game
- With arrow left and right cycle through turns, starting from the last turn
- With arrow up and down cycle through games
- On top of the grid are displayed which game and which turn the grid represents
- Below is shown a timestamp of each turn when it was recorded and the total wins of each color

Known bugs:
1. When viewing old games and scrolling past the last or first game, event listeners which control turns, are removed. They are created back by switching games again. I suppose try to fix the part "else if (event.key === 'ArrowUp'|| event.key === 'ArrowDown')" inside renderGrid, as it deletes the event listeners.
2. Old eventlisteners for scrolling through games are not removed, atleast when pressing oldGames again
3. Changing screen sizes without refresh messes up the UI
4. Outside API used for getting user's IP doesn't always work

Set up guide for local hosting/development:
1. "npm install" to install node_modules
2. "npx vite" for dev or "npm run serve" to run the current build version
3. It will by default connect to outside live server and from there to live database. 
To host backend with localhost: 
31. in main.js "const URL=..." has to be commented// out
32. in server/app.js comment existing app.get and app.post and about 15 lines of mongoose code in the beginning. Remove comments from other get and post functions
33. in functions/ loadGames.js and storeGame.js switch comments between "const url..." declarations
34. Open second terminal and run "npm run server" which will start the backend
35. Games are now stored in and loaded from db.json file. It can contain my old games with my own IP

