const formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const {
        elements: { email, password }
      } = event.currentTarget;
      
    if (email.value === '' || password.value === ''){
        alert(" you must fill out all the fields of the form");
        return
    }

    const FormSubmitValue = {email: email.value, password: password.value}
    console.log(FormSubmitValue);
    event.currentTarget.reset();
}

