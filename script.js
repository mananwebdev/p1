document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
      
      // Validate form fields
      let username = form.elements['username'].value.trim();
      let email = form.elements['email'].value.trim();
      let age = form.elements['age'].value.trim();
      
      if (username === '' || email === '' || age === '') {
        alert('Please fill out all fields');
        return;
      }
      
      // Additional validation if needed (e.g., email format, age range)
      // For simplicity, we'll just check if age is a number
      if (isNaN(age)) {
        alert('Age must be a valid number');
        return;
      }
      
      // If all validations pass, submit the form
      form.submit();
    });
  });
  