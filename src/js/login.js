/**
 * Set the form control element to valid
 * @param {object} element - The DOM element
 */
function setValid(element) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
}

/**
 * Set the form control element to invalid with the error message
 * @param {object} element - The DOM element
 */
function setInvalid(element) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
}

/**
 * Remove validation information from the element
 * @param {object} element - The DOM element
 */
function removeValidation(element) {
    element.classList.remove('is-valid');
    element.classList.remove('is-invalid');
}

/**
 * Validate the login form and try to log the user in
 * @param {object} event - The DOM event
 */
function login(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;
    var errorList = document.getElementById('login-error-list');
    errorList.innerHTML = '';
    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
        email.nextElementSibling.innerHTML = '';
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        email.nextElementSibling.innerHTML = 'Email cannot be empty.';
        errorList.innerHTML += `<li><a href="#login-email-control">Email cannot be empty.</a></li>`
        hasError = true;
    } else {
        setInvalid(email);
        email.nextElementSibling.innerHTML = 'Invalid email.';
        errorList.innerHTML += `<li><a href="#login-email-control">Invalid email.</a></li>`
        hasError = true;
    }

    var password = document.getElementById('login-password-control');
    if (password.value.trim().length === 0) {
        setInvalid(password);
        password.nextElementSibling.innerHTML = 'Password cannot be empty.';
        errorList.innerHTML += `<li><a href="#login-password-control">Password cannot be empty.</a></li>`
        hasError = true;
    } else {
        setValid(password);
        password.nextElementSibling.innerHTML = '';
    }

    console.log(errorList.innerHTML);
    setGeneralErrorMessage('login-error', hasError);
    location.href = "#login-error";
}

/**
 * Validate the login form and try to retrieve the password
 * @param {object} event - The DOM event
 */
function forgot(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;
    var errorList = document.getElementById('login-error-list');
    errorList.innerHTML = '';

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
        email.nextElementSibling.innerHTML = '';
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        email.nextElementSibling.innerHTML = 'Email cannot be empty.';
        errorList.innerHTML += `<li><a href="#login-email-control">Email cannot be empty.</a></li>`
        hasError = true;
    } else {
        setInvalid(email);
        email.nextElementSibling.innerHTML = 'Invalid email.';
        errorList.innerHTML += `<li><a href="#login-email-control">Invalid email.</a></li>`
        hasError = true;
    }

    var password = document.getElementById('login-password-control');
    removeValidation(password);

    setGeneralErrorMessage('login-error', hasError);
    location.href = "#login-error";
}

/**
 * Validate the login form and try to register the new user
 * @param {object} event - The DOM event
 */
function register(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;
    var errorList = document.getElementById('register-error-list');
    errorList.innerHTML = '';


    var firstName = document.getElementById('register-first-name-control');
    if (firstName.value.trim().length === 0) {
        setInvalid(firstName);
        firstName.nextElementSibling.innerHTML = 'First name cannot be empty.';
        errorList.innerHTML += `<li><a href="#register-first-name-control">First name cannot be empty.</a></li>`;
        hasError = true;
    } else if (firstName.validity.valid) {
        setValid(firstName);
        firstName.nextElementSibling.innerHTML = ''
    }

    var lastName = document.getElementById('register-last-name-control');
    if (lastName.value.trim().length === 0) {
        setInvalid(lastName);
        lastName.nextElementSibling.innerHTML = 'Last name cannot be empty.';
        errorList.innerHTML += `<li><a href="#register-last-name-control">Last name cannot be empty.</a></li>`;
        hasError = true;
    } else if (lastName.validity.valid) {
        setValid(lastName);
        lastName.nextElementSibling.innerHTML = '';
    }

    var email = document.getElementById('register-email-control');
    if (email.validity.valid) {
        setValid(email);
        email.nextElementSibling.innerHTML = ''
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        email.nextElementSibling.innerHTML = 'Email cannot be empty.';
        errorList.innerHTML += `<li><a href="#register-email-control">Email cannot be empty.</a></li>`;
        hasError = true;
    } else {
        setInvalid(email);
        email.nextElementSibling.innerHTML = 'Invalid email.'
        errorList.innerHTML += `<li><a href="#register-email-control">Invalid email.</a></li>`;
        hasError = true;
    }

    var password = document.getElementById('register-password-control');
    var passwordValue = password.value.trim();
    if (passwordValue.length < 8) {
        setInvalid(password);
        password.nextElementSibling.innerHTML = 'Password must be at least 8 characters.'
        errorList.innerHTML += `<li><a href="#register-password-control">Password must be at least 8 characters.</a></li>`;
        hasError = true;
    } else if (passwordValue.length > 16) {
        setInvalid(password);
        password.nextElementSibling.innerHTML = 'Password must be less than 16 characters.'
        errorList.innerHTML += `<li><a href="#register-password-control">Password must be less than 16 characters.</a></li>`;
        hasError = true;
    } else if (passwordValue.match(/[a-zA-Z]+/) == null) {
        setInvalid(password);
        password.nextElementSibling.innerHTML = 'Password must contain at least one letter.'
        errorList.innerHTML += `<li><a href="#register-password-control">Password must contain at least one letter.</a></li>`;
        hasError = true;
    } else if (passwordValue.match(/[0-9]+/) == null) {
        setInvalid(password);
        password.nextElementSibling.innerHTML = 'Password must contain at least one number.'
        errorList.innerHTML += `<li><a href="#register-password-control">Password must contain at least one number.</a></li>`;
        hasError = true;
    } else {
        setValid(password);
        password.nextElementSibling.innerHTML = ''
    }

    var programme = document.getElementById('register-programme-control');
    if (programme.validity.valueMissing) {
        setInvalid(programme);
        programme.nextElementSibling.innerHTML = 'Programme cannot be empty.'
        errorList.innerHTML += `<li><a href="#register-programme-control">Programme cannot be empty.</a></li>`;
        hasError = true;
    } else if (!programme.validity.valid) {
        setInvalid(programme);
        programme.nextElementSibling.innerHTML = 'Invalid programme.'
        errorList.innerHTML += `<li><a href="#register-programme-control">Invalid programme.</a></li>`;
        hasError = true;
    } else {
        setValid(programme);
        programme.nextElementSibling.innerHTML = ''
    }

    setGeneralErrorMessage('register-error', hasError);
    location.href = "#register-error";

}

/**
 * Focus the given element for editing
 * @param {object} event - The DOM event
 */
function focusElement(event) {
    event.preventDefault();
    event.stopPropagation();
    event.target.previousElementSibling.focus()
}

/**
 * Set the general error message to appear or disappear according to error status
 * @param {string} elementId - The error message element
 * @param {boolean} hasError - The status of the form validation
 */
function setGeneralErrorMessage(elementId, hasError) {
    var element = document.getElementById(elementId);
    if (hasError) {
        element.classList.remove('d-none');
        element.innerHTML = 'Please correct the error(s)';
    } else {
        element.classList.add('d-none');
        element.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document
        .getElementById('login-login-button')
        .addEventListener('click', login, false);

    document
        .getElementById('login-forgot-button')
        .addEventListener('click', forgot, false);

    document
        .getElementById('register-register-button')
        .addEventListener('click', register, false);

    var invalidElements = document.getElementsByClassName("invalid-feedback");
    for (var i = 0; i < invalidElements.length; i++) {
        invalidElements[i].addEventListener('click', focusElement, false);
    }

}, false);
