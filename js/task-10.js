const refs = {
  divBoxesEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("#controls input"),
  buttonCreateEl: document.querySelector("[data-create]"),
  buttonDestroyEl: document.querySelector("[data-destroy]"),
};


refs.buttonCreateEl.addEventListener('click', () => createBoxes(refs.inputEl.value));
refs.buttonDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const array = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      array.push(box);
      boxSize += 10;
  } 
  refs.divBoxesEl.append(...array)
}


function  destroyBoxes() {
    refs.divBoxesEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
