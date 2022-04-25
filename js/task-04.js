let counterValue = 0;

const counterEl = document.querySelector("#counter");
const buttonDecrement = document.querySelector("[data-action = decrement]");
const buttonIncrement = document.querySelector("[data-action = increment]");
const valueEl = document.querySelector("#value");

const onHandlerActionDecrement = () => 
        valueEl.textContent = `${counterValue -= 1}`;

const onHandlerActionIncrement = () => 
        valueEl.textContent = `${counterValue += 1}`;



buttonDecrement.addEventListener('click', onHandlerActionDecrement);
buttonIncrement.addEventListener('click', onHandlerActionIncrement);




