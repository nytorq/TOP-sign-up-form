const inputValidation = (function () {
    
    // const updateValue = () => {
    //     let value = event.target.value;
        
    // }
    // passwordInput.addEventListener('click', updateValue);
    // confirmPasswordInput.addEventListener('click', updateValue);
    // let passwordValue = document.getElementById('');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordFieldSet = document.getElementById('passwordFields');
    const errorMessage = document.getElementById('errorMessage');
    const compareValues = () => {
        console.log("Input 1's value is: " + passwordInput.value)
        console.log("Input 2's value is: " + confirmPasswordInput.value)
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordInput.classList.add('error')
            confirmPasswordInput.classList.add('error')
            errorMessage.classList.remove('hidden');
        } else if (passwordInput.value === confirmPasswordInput.value) {
            passwordInput.classList.remove('error')
            confirmPasswordInput.classList.remove('error')
            errorMessage.classList.add('hidden');
        }
    }
    passwordFieldSet.addEventListener('focusout', compareValues);
})(); 