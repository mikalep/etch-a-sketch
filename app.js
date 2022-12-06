const grid        = document.getElementById('grid-container');
const colorPicker = document.getElementById('colorpicker');

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);

    cell.addEventListener('mouseover', () => {
      cell.style.background = colorPicker.value
    });
  }
}

const initResetBtn = () => {
  const btn = document.getElementById('reset-btn');
  const cells = document.querySelectorAll('.cell');
  btn.addEventListener('click', () => {
    for (const cell of cells) {
      cell.style.background = "";
    }
  });
}

initResetBtn();

// - Add buttons to choose grid size - Buttons added but they dont work yet
// - Add color picker to choose paint color
// - BONUS: Darken color when cursor stays on one cell
// - BONUS: Make stuff look nice
