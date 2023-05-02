import { createInput } from './UI/createInput';
import { createPoints } from './UI/createPoints';
import { createButton } from './UI/createButton';
import { createDateandGame } from './UI/createDate';
import { createGameCount } from './UI/createGameCount';
import { createTurnCount } from './UI/createTurnCount';

export function createUI(callback, viewOldGames) {
  const uiContainer = document.createElement('div');
  const input = createInput();
  const points = createPoints();
  const startButton = createButton(callback, 'start-button', 'Start');
  const oldGamesButton = createButton(viewOldGames, 'old-games-button', 'Old Games');
  const date = createDateandGame('timeGame-display');
  const gameCount = createGameCount('game-count');
  const turnCount = createTurnCount('turn-count');

  uiContainer.appendChild(input);
  uiContainer.appendChild(points);
  uiContainer.appendChild(startButton);
  uiContainer.appendChild(oldGamesButton);
  uiContainer.appendChild(date);
  uiContainer.appendChild(gameCount);
  uiContainer.appendChild(turnCount);
  return uiContainer;
}
