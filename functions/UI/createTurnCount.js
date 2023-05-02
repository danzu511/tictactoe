export function createTurnCount(id){
    const turnCountContainer = document.createElement('div');
    turnCountContainer.setAttribute('id', id);
    
    const turnNum = document.createElement('p');
    turnNum.innerText = 'Turns left: 0';
    turnNum.style.fontSize = '2em';
    turnNum.style.color = '#ffffff';
    turnNum.style.fontWeight = 'bold';
    turnNum.style.fontFamily = 'helvetica';
    turnNum.style.position = 'absolute';
    turnNum.style.top = '20%';
    turnNum.style.left = '50%';
    //turnNum.style.transform = 'translateX(80%)';
    
    turnCountContainer.appendChild(turnNum);
    //turnCountContainer.style.visibility = 'hidden';
    return turnCountContainer;
}