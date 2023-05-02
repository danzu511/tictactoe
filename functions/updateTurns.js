export function updateTurns(turnCount, index) {
    const turnCountContainer = document.getElementById('turn-count');
    const turnText = turnCountContainer.querySelector('p');
    const updatedText = `Turns left: ${turnCount - index}`;
    turnText.textContent = updatedText;

    const pointsContainer = document.getElementById('points-container');
    const blueBox = pointsContainer.querySelector('span:nth-of-type(3)');
    const greenBox = pointsContainer.querySelector('span:nth-of-type(1)');
    if(index === 0 || index % 2 === 0){
        greenBox.style.opacity = '1';
        blueBox.style.opacity = '0.5';
    }
    else{
        greenBox.style.opacity = '0.5';
        blueBox.style.opacity = '1';
    }
    if (turnCount - index === 0) {
        greenBox.style.opacity = '0.5';
        blueBox.style.opacity = '0.5';
    }
}