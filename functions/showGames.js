import { renderGrid } from './renderGrid';
import { updateWinrate } from './updateWinrate';
import { hideGameInfo } from './hideGameInfo';
import { updateGameCount } from './updateGameCount';

export function showGames(gameArray, scene, renderer, camera) {
  let gameIndex = gameArray.length - 1;
  let currentGame = gameArray[gameIndex];
  console.log('gameArray: ', gameArray);
  hideGameInfo('visible');
  updateWinrate(gameArray);

  renderGrid(currentGame, scene, renderer, camera);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
      if (gameIndex === 0) {
        console.log('No more games to show');
      } else {
        gameIndex--;
        currentGame = gameArray[gameIndex];
        renderGrid(currentGame, scene, renderer, camera);
      }
    }
    if (event.key === 'ArrowDown') {
      if (gameIndex === gameArray.length - 1) {
        console.log('This is the latest game');
      } else {
        gameIndex++;
        currentGame = gameArray[gameIndex];
        renderGrid(currentGame, scene, renderer, camera);
      }
    }
    showGameNumber(gameIndex);
    updateGameCount(gameArray, gameIndex);
  });
  updateGameCount(gameArray, gameIndex);
  showGameNumber(gameIndex);
}

function showGameNumber(gameIndex) {
  // console.log('currentGame number: ', gameIndex + 1)
}
