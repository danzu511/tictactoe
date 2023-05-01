export function hideGameInfo(value) {
  const gameInfo = document.getElementById('timeGame-display');
  const gameCount = document.getElementById('game-count');
  gameInfo.style.visibility = value;
  gameCount.style.visibility = value;
}
