document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;

    // First Name Validation
    const firstNameInput = document.getElementById('firstName');
    const errorFirstName = document.getElementById('error-firstname');
    const firstName = firstNameInput.value.trim();
    const firstNameRegex = /^[A-Z][a-zA-Z]{2,}$/;
    if (firstNameRegex.test(firstName)) {
        errorFirstName.textContent = '';
    } else {
        errorFirstName.textContent = 'First name must start with a capital and have at least 3 letters.';
        isValid = false;
    }

    // Email Validation
    const emailInput = document.getElementById('email');
    const errorEmail = document.getElementById('error-email');
    const email = emailInput.value.trim();
    const mandatoryParts = /^([a-zA-Z0-9]+)(\.[a-zA-Z0-9]+)?@([a-zA-Z0-9]+)\.co(\.in)?$/;
    let emailPartsOK = false;
    if (mandatoryParts.test(email)) {
        const domainMatch = email.match(/@([a-zA-Z0-9]+)\.co/);
        if (domainMatch && domainMatch[1] === 'bl') {
            emailPartsOK = true;
        }
    }
    if (emailPartsOK) {
        errorEmail.textContent = '';
    } else {
        errorEmail.textContent = 'Email must be in format abc[.xyz]@bl.co[.in]';
        isValid = false;
    }

    // Mobile Validation
    const mobileInput = document.getElementById('mobile');
    const errorMobile = document.getElementById('error-mobile');
    const mobile = mobileInput.value.trim();
    const mobileRegex = /^[0-9]{2} [0-9]{10}$/;
    if (mobileRegex.test(mobile)) {
        errorMobile.textContent = '';
    } else {
        errorMobile.textContent = 'Mobile must be in format CC NNNNNNNNNN (2 digits, space, 10 digits)';
        isValid = false;
    }

    // Password Validation
    const passwordInput = document.getElementById('password');
    const errorPassword = document.getElementById('error-password');
    const password = passwordInput.value;
    // Minimum 8 characters
    const minLength = password.length >= 8;
    // At least 1 uppercase
    const hasUpper = /[A-Z]/.test(password);
    // At least 1 digit
    const hasDigit = /[0-9]/.test(password);
    // Exactly 1 special character
    const specialChars = password.replace(/[a-zA-Z0-9]/g, '');
    const exactlyOneSpecial = specialChars.length === 1;
    if (minLength && hasUpper && hasDigit && exactlyOneSpecial) {
        errorPassword.textContent = '';
    } else {
        let messages = [];
        if (!minLength) messages.push('at least 8 characters');
        if (!hasUpper) messages.push('at least 1 uppercase letter');
        if (!hasDigit) messages.push('at least 1 numeric digit');
        if (!exactlyOneSpecial) messages.push('exactly 1 special character');
        errorPassword.textContent = 'Password must have ' + messages.join(', ') + '.';
        isValid = false;
    }

    // Final Validation Check
    if (isValid) {
        alert('All fields are valid!');
    }
});