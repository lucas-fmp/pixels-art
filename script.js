/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
// Capturando elementos importantes

const black = document.querySelector('#black');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const color4 = document.querySelector('#color4');

// Gerando as cores aleatoriamente
function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
black.style.backgroundColor = 'black';
color2.style.backgroundColor = generateColor();
color3.style.backgroundColor = generateColor();
color4.style.backgroundColor = generateColor();

// Selecionando o preto como cor inicial
black.classList.add('selected');

// Escolhendo a cor
black.addEventListener('click', () => {
  black.classList.add('selected');
  color2.classList.remove('selected');
  color3.classList.remove('selected');
  color4.classList.remove('selected');
});

color2.addEventListener('click', () => {
  black.classList.remove('selected');
  color2.classList.add('selected');
  color3.classList.remove('selected');
  color4.classList.remove('selected');
});

color3.addEventListener('click', () => {
  black.classList.remove('selected');
  color2.classList.remove('selected');
  color3.classList.add('selected');
  color4.classList.remove('selected');
});

color4.addEventListener('click', () => {
  black.classList.remove('selected');
  color2.classList.remove('selected');
  color3.classList.remove('selected');
  color4.classList.add('selected');
});

// Pintando os pixels iniciais
let pixels = document.querySelectorAll('.pixel');
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', (event) => {
    const pixel = event.target;
    const selectedColor = document.querySelector('.selected');
    if (black.id === selectedColor.id) {
      pixel.style.backgroundColor = black.style.backgroundColor;
    } else if (color2.id === selectedColor.id) {
      pixel.style.backgroundColor = color2.style.backgroundColor;
    } else if (color3.id === selectedColor.id) {
      pixel.style.backgroundColor = color3.style.backgroundColor;
    } else if (color4.id === selectedColor.id) {
      pixel.style.backgroundColor = color4.style.backgroundColor;
    }
  });
}

// Criando o board e pintando
// eslint-disable-next-line max-lines-per-function
document.querySelector('#generate-board').addEventListener('click', () => {
  const mainDiv = document.querySelector('#pixel-board');
  while (mainDiv.hasChildNodes()) {
    mainDiv.removeChild(mainDiv.firstChild);
  }
  const inputValue = document.querySelector('#board-size').value;
  if (inputValue === '' || inputValue < 1) {
    alert('Board inválido!');
  } else if (inputValue < 5 && inputValue > 0) {
    for (let i = 0; i < 5; i += 1) {
      const newDivLine = document.createElement('div');
      newDivLine.classList.add('line');
      document.querySelector('#pixel-board').appendChild(newDivLine);
    }
    for (let i = 0; i < 5; i += 1) {
      for (let i2 = 0; i2 < 5; i2 += 1) {
        const newDivColumn = document.createElement('div');
        newDivColumn.classList.add('pixel');
        document.querySelectorAll('.line')[i].appendChild(newDivColumn);
      }
    }
    pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].addEventListener('click', (event) => {
        const pixel = event.target;
        const selectedColor = document.querySelector('.selected');
        if (black.id === selectedColor.id) {
          pixel.style.backgroundColor = black.style.backgroundColor;
        } else if (color2.id === selectedColor.id) {
          pixel.style.backgroundColor = color2.style.backgroundColor;
        } else if (color3.id === selectedColor.id) {
          pixel.style.backgroundColor = color3.style.backgroundColor;
        } else if (color4.id === selectedColor.id) {
          pixel.style.backgroundColor = color4.style.backgroundColor;
        }
      });
    }
    const button = document.getElementById('clear-board');
    button.addEventListener('click', () => {
      for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].setAttribute('id', 'clearPixel');
      }
    });
  } else if (inputValue > 50) {
    for (let i = 0; i < 50; i += 1) {
      const newDivLine = document.createElement('div');
      newDivLine.classList.add('line');
      document.querySelector('#pixel-board').appendChild(newDivLine);
    }
    for (let i = 0; i < 50; i += 1) {
      for (let i2 = 0; i2 < 50; i2 += 1) {
        const newDivColumn = document.createElement('div');
        newDivColumn.classList.add('pixel');
        document.querySelectorAll('.line')[i].appendChild(newDivColumn);
      }
    }
    pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].addEventListener('click', (event) => {
        const pixel = event.target;
        const selectedColor = document.querySelector('.selected');
        if (black.id === selectedColor.id) {
          pixel.style.backgroundColor = black.style.backgroundColor;
        } else if (color2.id === selectedColor.id) {
          pixel.style.backgroundColor = color2.style.backgroundColor;
        } else if (color3.id === selectedColor.id) {
          pixel.style.backgroundColor = color3.style.backgroundColor;
        } else if (color4.id === selectedColor.id) {
          pixel.style.backgroundColor = color4.style.backgroundColor;
        }
      });
    }
    const button = document.getElementById('clear-board');
    button.addEventListener('click', () => {
      for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].setAttribute('id', 'clearPixel');
      }
    });
  } else {
    for (let i = 0; i < inputValue; i += 1) {
      const newDivLine = document.createElement('div');
      newDivLine.classList.add('line');
      document.querySelector('#pixel-board').appendChild(newDivLine);
    }

    for (let i = 0; i < inputValue; i += 1) {
      for (let i2 = 0; i2 < inputValue; i2 += 1) {
        const newDivColumn = document.createElement('div');
        newDivColumn.classList.add('pixel');
        document.querySelectorAll('.line')[i].appendChild(newDivColumn);
      }
    }
    pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].addEventListener('click', (event) => {
        const pixel = event.target;
        const selectedColor = document.querySelector('.selected');
        if (black.id === selectedColor.id) {
          pixel.style.backgroundColor = black.style.backgroundColor;
        } else if (color2.id === selectedColor.id) {
          pixel.style.backgroundColor = color2.style.backgroundColor;
        } else if (color3.id === selectedColor.id) {
          pixel.style.backgroundColor = color3.style.backgroundColor;
        } else if (color4.id === selectedColor.id) {
          pixel.style.backgroundColor = color4.style.backgroundColor;
        }
      });
    }
    const button = document.getElementById('clear-board');
    button.addEventListener('click', () => {
      for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].setAttribute('id', 'clearPixel');
      }
    });
  }
});

// Botão de limpar
const button = document.getElementById('clear-board');
button.addEventListener('click', () => {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});
