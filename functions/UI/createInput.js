export function createInput() {
  // create a div element for the container
  const slidecontainer = document.createElement("div");
  slidecontainer.classList.add('slidecontainer');
  slidecontainer.style.display = 'flex';
  slidecontainer.style.alignItems = 'center';
  slidecontainer.style.justifyContent = 'center';

  const customSlider = document.createElement('input');
  customSlider.type = 'range';
  customSlider.min = '3';
  customSlider.max = '10';
  customSlider.value = '3';
  customSlider.classList.add('slider');
  customSlider.id = 'myRange';
  customSlider.style.width = '12em';
  customSlider.style.height = '5em';
  customSlider.style.transform = 'rotate(-90deg)';

  const valueDisplay = document.createElement('span');
  valueDisplay.textContent = customSlider.value;
  valueDisplay.style.fontSize = '3em';
  valueDisplay.style.fontWeight = 'bold';
  valueDisplay.style.color = '#ffffff';
  valueDisplay.style.fontFamily = 'helvetica';
  valueDisplay.style.textShadow = '0 0 0.2em #000000';
  valueDisplay.style.marginTop = '1em';

  customSlider.addEventListener('input', () => {
    valueDisplay.textContent = customSlider.value;
  });

  slidecontainer.appendChild(customSlider);
  slidecontainer.appendChild(valueDisplay);

  slidecontainer.style.position = "absolute";
  slidecontainer.style.top = "10%";
  slidecontainer.id = "slider-container"

  //slidecontainer.style.transform = "translate(-50%, -50%)";

  return slidecontainer;
}
