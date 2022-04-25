const refs = {
  bodyEl: document.querySelector("body"),
  buttonEl: document.querySelector(".change-color"),
  spanEl: document.querySelector(".color"),
};

refs.buttonEl.addEventListener('click', event => {
 
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.spanEl.textContent = getRandomHexColor();
  
});




function getRandomHexColor() {  
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
