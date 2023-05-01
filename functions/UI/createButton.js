export function createButton(callback, id, text) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', callback);
  if (id) {
    button.id = id;
  }
  return button;
}
