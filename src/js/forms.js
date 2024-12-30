const formsHandler = () => {
    registerFormHandler();
}

function registerFormHandler() {
    const registerForm = document.querySelector('[name=register_form]');
    const nameInput = registerForm.querySelector('[name=register_name]');
    const phoneInput = registerForm.querySelector('[name=register_phone]');
    const emailInput = registerForm.querySelector('[name=register_email]');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(`name: ${nameInput.value}, phone: ${phoneInput.value}, email: ${emailInput.value}`);

        nameInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
    })
}

export default formsHandler;