const refs = {
  divControlsEl: document.querySelector("#controls"),
  inputEl: document.querySelector("#controls input"),
  buttonCreateEl: document.querySelector("[data-create]"),
  buttonDestroyEl: document.querySelector("[data-destroy]"),
};




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
