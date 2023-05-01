export function updateGameCount(gameArray, index) {
  const gameContainer = document.getElementById('game-count');
  const gameText = gameContainer.querySelector('p:nth-of-type(1)');
  const updatedText = `Game ${index + 1}/${gameArray.length}`;
  gameText.textContent = updatedText;
}
