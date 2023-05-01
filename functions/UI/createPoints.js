export function createPoints() {
  const pointsContainer = document.createElement('div');
  pointsContainer.setAttribute('id', 'points-container');

  const player1Box = document.createElement('span');
  player1Box.innerText = ' ';
  player1Box.style.display = 'inline-block';
  player1Box.style.width = '5em';
  player1Box.style.height = '5em';
  player1Box.style.marginRight = '2em';
  player1Box.style.backgroundColor = '#96be25';

  const player2Box = document.createElement('span');
  player2Box.innerText = ' ';
  player2Box.style.display = 'inline-block';
  player2Box.style.width = '5em';
  player2Box.style.height = '5em';
  player2Box.style.backgroundColor = '#2596be';
  player2Box.style.float = 'right, bottom';
  player2Box.style.marginLeft = '2em';

  const pointsText = document.createElement('span');
  pointsText.innerText = '0 : 0';
  pointsText.style.fontSize = '6em';
  pointsText.style.color = '#ffffff';
  pointsText.style.fontWeight = 'bold';
  pointsText.style.fontFamily = 'helvetica';
  pointsText.style.textShadow = '0 0 0.2em #000000';

  pointsContainer.appendChild(player1Box);
  pointsContainer.appendChild(pointsText);
  pointsContainer.appendChild(player2Box);

  // set its dimensions and position using CSS
  pointsContainer.style.position = 'absolute';
  pointsContainer.style.top = '5%';
  pointsContainer.style.left = '0';
  pointsContainer.style.right = '0';
  pointsContainer.style.margin = 'auto';
  pointsContainer.style.width = 'fit-content';
  pointsContainer.style.textAlign = 'center';
  pointsContainer.style.borderRadius = '2em';

  return pointsContainer;
}
