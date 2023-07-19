// Retrieve the form element
const form = document.getElementById('registerForm');
const resetButton = document.getElementById('reset');

// Add event listener to the form submit event
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve the form values
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phoneNumber = document.querySelector('input[name="phno"]').value;

  // Create an object to store the form data
  const formData = {
    name: name,
    email: email,
    phoneNumber: phoneNumber
  };

  // Get existing data from local storage or initialize an empty array
  let existingData = localStorage.getItem('formData');
  existingData = existingData ? JSON.parse(existingData) : [];

  // Add the new form data to the existing data array
  existingData.push(formData);

  // Store the updated data in local storage
  localStorage.setItem('formData', JSON.stringify(existingData));

  // Clear the form inputs
  form.reset();
});

// Add event listener to the reset button
resetButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form reset

  // Clear the form inputs
  form.reset();
});
