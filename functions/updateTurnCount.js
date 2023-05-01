export function updateTurnCount(turnCount, index){
    const gameContainer = document.getElementById('game-count');
    const turnText = gameContainer.querySelector("p:nth-of-type(2)");
    let updatedText = `Turn ${index + 1}/${turnCount}`
    turnText.textContent = updatedText;
}