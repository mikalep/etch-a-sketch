const grid        = document.getElementById('grid-container');
const colorPicker = document.getElementById('colorpicker');

const smallBtn   = document.getElementById('btn-small');
const mediumBtn  = document.getElementById('btn-medium');
const largeBtn   = document.getElementById('btn-large');
const defaultBtn = document.getElementById('btn-default');
const resetBtn   = document.getElementById('btn-reset');

const SIZE_SMALL   = 8;
const SIZE_DEFAULT = 16;
const SIZE_MEDIUM  = 32;
const SIZE_LARGE   = 64;

smallBtn.addEventListener('click', () => {
  renderGrid(SIZE_SMALL);
});

defaultBtn.addEventListener('click', () => {
  renderGrid(SIZE_DEFAULT);
});

mediumBtn.addEventListener('click', () => {
  renderGrid(SIZE_MEDIUM);
});

largeBtn.addEventListener('click', () => {
  renderGrid(SIZE_LARGE);
});

resetBtn.addEventListener('click', () => {
  resetGrid();
});

const renderGrid = (size) => {
  grid.innerHTML = "";

  grid.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div');

      cell.classList.add('cell');
      cell.style.setProperty('height', `calc(50rem / ${size})`);
      cell.style.setProperty('width', `calc(50rem / ${size})`);
      grid.appendChild(cell);

      cell.addEventListener('mouseover', (event) => {
        event.target.style.background = colorPicker.value;
      });
    }
  }
}

const resetGrid = () => {
  const cells = document.querySelectorAll('.cell');

  for (const cell of cells) {
    cell.style.background = "";
  }
}

window.onload = () => {
  renderGrid(SIZE_DEFAULT);
}
