const formsHandler = () => {
    registerFormHandler();
    footerFormHandler();
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

function footerFormHandler() {
    const footerForm = document.querySelector('[name=footer_form]');
    const emailInput = footerForm.querySelector('[name=footer_email]');
    const questionInput = footerForm.querySelector('[name=footer_question]');

    footerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(`email: ${emailInput.value}, question: ${questionInput.value}`);
        
        emailInput.value = '';
        questionInput.value = '';
    })
}

export default formsHandler;