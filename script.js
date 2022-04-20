// Capturando elementos importantes
let colors = document.querySelectorAll('.color');
let black = document.querySelector('#black');
let gray = document.querySelector('#gray');
let red = document.querySelector('#red');
let yellow = document.querySelector('#yellow');

// Selecionando o preto como cor inicial
black.classList.add('selected');

// Escolhendo a cor
black.addEventListener('click', function() {
  black.classList.add('selected');
  gray.classList.remove('selected');
  red.classList.remove('selected');
  yellow.classList.remove('selected');
});

gray.addEventListener('click', function() {
  black.classList.remove('selected');
  gray.classList.add('selected');
  red.classList.remove('selected');
  yellow.classList.remove('selected');
});

red.addEventListener('click', function() {
  black.classList.remove('selected');
  gray.classList.remove('selected');
  red.classList.add('selected');
  yellow.classList.remove('selected');
});

yellow.addEventListener('click', function() {
  black.classList.remove('selected');
  gray.classList.remove('selected');
  red.classList.remove('selected');
  yellow.classList.add('selected');
});

// Pintando os pixels
let pixels = document.querySelectorAll('.pixel')

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', function(event) {
    let pixel = event.target
    let selectedColor = document.querySelector('.selected')
    if (black.id === selectedColor.id) {
      pixel.setAttribute('id', 'black');
    }
    else if (gray.id === selectedColor.id) {
      pixel.setAttribute('id', 'gray');
    }
    else if (red.id === selectedColor.id) {
      pixel.setAttribute('id', 'red');
    }
    else if (yellow.id === selectedColor.id) {
      pixel.setAttribute('id', 'yellow');
    }
  });
}

// Botão de limpar
let button = document.getElementById('clear-board')
button.addEventListener('click', function() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].setAttribute('id', 'clearPixel');
  };
});
