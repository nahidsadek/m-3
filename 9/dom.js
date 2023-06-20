function validateForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirm-password');
    var errorContainer = document.getElementById('error-container');

    // Clear any previous error messages
    errorContainer.innerHTML = '';

    var valid = true;

    // Name validation
    if (nameInput.value === '') {
      displayError('Name is required');
      valid = false;
    } else if (!/^[a-zA-Z]+$/.test(nameInput.value)) {
      displayError('Name should contain only letters');
      valid = false;
    }

    // Email validation
    if (emailInput.value === '') {
      displayError('Email is required');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
      displayError('Invalid email address');
      valid = false;
    }

    // Password validation
    if (passwordInput.value === '') {
      displayError('Password is required');
      valid = false;
    } else if (passwordInput.value.length < 8) {
      displayError('Password should have a minimum length of 8 characters');
      valid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(passwordInput.value)) {
      displayError('Password should contain at least one uppercase letter, one lowercase letter, and one digit');
      valid = false;
    }

    // Confirm Password validation
    if (confirmPasswordInput.value === '') {
      displayError('Confirm Password is required');
      valid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
      displayError('Passwords do not match');
      valid = false;
    }

    return valid;
  }

  function displayError(message) {
    var errorContainer = document.getElementById('error-container');
    var errorElement = document.createElement('p');
    errorElement.innerText = message;
    errorContainer.appendChild(errorElement);
  }