// Capturando elementos importantes

const black = document.querySelector('#black');
const gray = document.querySelector('#gray');
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');

// Selecionando o preto como cor inicial
black.classList.add('selected');

// Escolhendo a cor
black.addEventListener('click', () => {
  black.classList.add('selected');
  gray.classList.remove('selected');
  red.classList.remove('selected');
  yellow.classList.remove('selected');
});

gray.addEventListener('click', () => {
  black.classList.remove('selected');
  gray.classList.add('selected');
  red.classList.remove('selected');
  yellow.classList.remove('selected');
});

red.addEventListener('click', () => {
  black.classList.remove('selected');
  gray.classList.remove('selected');
  red.classList.add('selected');
  yellow.classList.remove('selected');
});

yellow.addEventListener('click', () => {
  black.classList.remove('selected');
  gray.classList.remove('selected');
  red.classList.remove('selected');
  yellow.classList.add('selected');
});

// Pintando os pixels
const pixels = document.querySelectorAll('.pixel');

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', (event) => {
    const pixel = event.target;
    const selectedColor = document.querySelector('.selected');
    if (black.id === selectedColor.id) {
      pixel.setAttribute('id', 'black');
    } else if (gray.id === selectedColor.id) {
      pixel.setAttribute('id', 'gray');
    } else if (red.id === selectedColor.id) {
      pixel.setAttribute('id', 'red');
    } else if (yellow.id === selectedColor.id) {
      pixel.setAttribute('id', 'yellow');
    }
  });
}

// Botão de limpar
const button = document.getElementById('clear-board');
button.addEventListener('click', () => {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].setAttribute('id', 'clearPixel');
  }
});
