// Validators for user input

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Password strength validation function
function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber;
}

// Documento validation function
function validateDocumento(documento) {
    // Implement your documento validation logic here
    // Placeholder for demonstration purposes
    return documento.length === 11; // Example: checks if documento has 11 characters
}

module.exports = { validateEmail, validatePassword, validateDocumento };