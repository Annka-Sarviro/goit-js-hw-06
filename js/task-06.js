const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
    
       if (textInput.value.length.toString() !== textInput.dataset.length) {
        textInput.classList.add("invalid")
        return
    }

    textInput.classList.add("valid")   
    textInput.classList.remove("invalid")
       
  });