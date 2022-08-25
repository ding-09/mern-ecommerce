export const validateEmail = (e) => {
  const email = e.target;
  const errorMsg = e.target.nextElementSibling;
  if (email.validity.valid) {
    errorMsg.style.display = 'none';
    email.style.borderColor = '#4c956c';
  } else {
    errorMsg.style.display = 'block';
    email.style.borderColor = '#ff2f2f';
  }
};

export const validateCard = (e) => {
  const input = e.target;
  const emptyError = input.nextElementSibling;
  const cardError = emptyError.nextElementSibling;

  if (input.validity.valueMissing) {
    emptyError.style.display = 'inline-block';
    cardError.style.display = 'none';
    input.style.borderColor = '#ff2f2f';
  } else if (input.validity.patternMismatch) {
    cardError.style.display = 'inline-block';
    emptyError.style.display = 'none';
    input.style.borderColor = '#ff2f2f';
  } else {
    emptyError.style.display = 'none';
    cardError.style.display = 'none';
    input.style.borderColor = '#4c956c';
  }
};

export const validateField = (e) => {
  const input = e.target;
  const errorMsg = input.nextElementSibling;
  if (input.validity.valueMissing) {
    errorMsg.style.display = 'inline-block';
    input.style.borderColor = '#ff2f2f';
  } else {
    errorMsg.style.display = 'none';
    input.style.borderColor = '#4c956c';
  }
};

export const handleFormSubmit = (e) => {
  const form = e.target;
  e.preventDefault();

  if (!form.checkValidity()) {
    // let form submit if form is valid

    // check what is wrong with form
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
      const errorMsg = input.nextElementSibling;
      if (!input.validity.valid) {
        errorMsg.style.display = 'inline-block';
        input.style.borderColor = '#ff2f2f';
      }
    });

    // get first invalid input
    // and scroll to it
    const firstInvalidInput = document.querySelector('input:invalid');
    firstInvalidInput.scrollIntoView({
      behavior: 'smooth',
    });
    return false;
  } else {
    return true;
  }
};
