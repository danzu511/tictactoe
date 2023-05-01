Gameplay Tutorial:
    - Create grid with different dimesions using slider
    - Start creates the grid
    - Color the grid with clicks
    - Columns, rows, and diagonal lines count for points
    - In a 3x3 grid point comes from 3 in row, in 4x4 or larger get point for 4 in row
    - After scoring, the cells of the scoring line are cleared
    - Points are shown on screen next to colored boxes 
    - Turn count is scaled with the dimensions of the grid
    - After game is over it's stored in a database

Viewing old games:
    - Pressing old games loads the last played game
    - With arrow left and right cycle through turns, starting from the last turn
    - With arrow up and down cycle through games
    - Below is shown a timestamp of each turn when it was recorded

Known bugs:
1. When viewing old games and scrolling past the last or first game, event listeners which control turns, are removed. They are created back by switching games again. I suppose try to fix the part "else if (event.key === 'ArrowUp'|| event.key === 'ArrowDown')" inside renderGrid, as it deletes the event listeners.
2. Old eventlisteners for scrolling through games are not removed, atleast when pressing oldGames again
3. Changing screen sizes without refresh messes up the UI

Next:
    - show text of winrates of colors
    - store id address of players so that only they can view their old games
    - host this