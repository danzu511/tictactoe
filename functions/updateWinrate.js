export function updateWinrate(gameArray){
    const winrateContainer = document.getElementById('timeGame-display');
    // get the second span element (the one with points)
    let greenWins = 0;
    let blueWins = 0;
    for(let i = 0; i < gameArray.length; i++){
        if(gameArray[i].winner === 'Green'){
            greenWins++
        }
        else if(gameArray[i].winner === 'Blue'){
            blueWins++
        }
    }
    const greenText = winrateContainer.querySelector("p:nth-of-type(1)");
    const blueText = winrateContainer.querySelector("p:nth-of-type(3)");

    greenText.textContent = greenWins;
    blueText.textContent = blueWins;
}