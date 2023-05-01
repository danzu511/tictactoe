export function createDateandGame(id) {
  const timeContainer = document.createElement('div');
  timeContainer.setAttribute('id', id);

  const timeText = document.createElement('span');
  timeText.innerText = '00:00';
  timeText.style.fontSize = '2em';
  timeText.style.color = '#ffffff';
  timeText.style.fontWeight = 'bold';
  timeText.style.fontFamily = 'helvetica';
  timeText.style.position = 'absolute';
  timeText.style.top = '50%';
  timeText.style.left = '50%';
  timeText.style.transform = 'translate(-50%, -50%)';

  const greenWins = document.createElement('p');
  greenWins.innerText = '0';
  greenWins.style.fontSize = '3em';
  greenWins.style.color = '#96be25';
  greenWins.style.fontWeight = 'bold';
  greenWins.style.fontFamily = 'helvetica';
  greenWins.style.position = 'absolute';
  greenWins.style.left = '50%';
  greenWins.style.margin = 'auto';
  greenWins.style.transform = 'translate(-300%, 40%)';

  const blueWins = document.createElement('p');
  blueWins.innerText = '0';
  blueWins.style.fontSize = '3em';
  blueWins.style.color = '#2596be';
  blueWins.style.fontWeight = 'bold';
  blueWins.style.fontFamily = 'helvetica';
  blueWins.style.position = 'absolute';
  blueWins.style.left = '50%';
  blueWins.style.margin = 'auto';
  blueWins.style.transform = 'translate(200%, 40%)';

  const textBetween = document.createElement('p');
  textBetween.innerText = 'vs';
  textBetween.style.fontSize = '3em';
  textBetween.style.color = '#ffffff';
  textBetween.style.fontWeight = 'bold';
  textBetween.style.fontFamily = 'helvetica';
  textBetween.style.position = 'absolute';
  textBetween.style.left = '50%';
  textBetween.style.margin = 'auto';
  textBetween.style.transform = 'translate(-50%, 40%)';

  const spacing = document.createElement('br');
  const spacing2 = document.createElement('br');

  timeContainer.appendChild(timeText);
  timeContainer.appendChild(spacing);
  timeContainer.appendChild(spacing2);
  timeContainer.appendChild(greenWins);
  timeContainer.appendChild(textBetween);
  timeContainer.appendChild(blueWins);
  timeContainer.style.position = 'absolute';
  timeContainer.style.top = '80%';
  timeContainer.style.left = '0';
  timeContainer.style.right = '0';
  timeContainer.style.margin = 'auto';
  timeContainer.style.width = '50%';
  timeContainer.style.textAlign = 'center';
  timeContainer.style.borderRadius = '2em';
  timeContainer.style.visibility = 'hidden';

  return timeContainer;
}
