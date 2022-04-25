const rangeEl = document.querySelector(["#font-size-control"]);

rangeEl.addEventListener('input', onFontSizeControl);

function onFontSizeControl  (event) {

 
    const spanEl = document.querySelector(["#text"]);
   
    spanEl.style.fontSize =`${event.currentTarget.value}px`

}
