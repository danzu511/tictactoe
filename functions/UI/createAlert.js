export function createAlert(text) {
  const alertContainer = document.createElement('div');
  alertContainer.setAttribute('id', 'alert-container');
  alertContainer.style.position = 'absolute';
  alertContainer.style.top = '50%';
  alertContainer.style.left = '50%';
  alertContainer.style.transform = 'translate(-50%, -50%)';
  alertContainer.style.width = '100%';
  alertContainer.style.height = '100%';
  alertContainer.style.zIndex = '2';
  alertContainer.style.backgroundColor = 'rgba(0,0,0,0.5)';

  const alertText = document.createElement('p');
  alertText.innerText = text;
  alertText.style.color = '#ffffff';
  alertText.style.fontSize = '3em';
  alertText.style.fontWeight = 'bold';
  alertText.style.fontFamily = 'helvetica';
  alertText.style.position = 'absolute';
  alertText.style.top = '50%';
  alertText.style.left = '50%';
  alertText.style.transform = 'translate(-50%, -50%)';

  alertContainer.appendChild(alertText);

  return alertContainer;
}
