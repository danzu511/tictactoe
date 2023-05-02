export function hideGameInfo(value, antivalue) {
  const gameInfo = document.getElementById('timeGame-display');
  const gameCount = document.getElementById('game-count');
  const turnCount = document.getElementById('turn-count');
  gameInfo.style.visibility = value;
  gameCount.style.visibility = value;
  turnCount.style.visibility = antivalue;
}
