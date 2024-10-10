document.addEventListener('DOMContentLoaded', function () {
  // Get the form element and the submit button
  var form = document.querySelector('.work-request');
  var submitButton = form.querySelector('input[type="submit"]');
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');

  // Add event listeners for real-time validation
  nameInput.addEventListener('input', validateInput);
  emailInput.addEventListener('input', validateInput);
  messageInput.addEventListener('input', validateInput);

  function validateInput() {
    if (this.value.trim() === '') {
      this.classList.add('invalid');
    } else {
      this.classList.remove('invalid');
    }
  }

  // Add a click event listener to the submit button
  submitButton.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get form values
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    // Validate form values
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Disable the submit button to prevent multiple submissions
    submitButton.disabled = true;
    submitButton.value = 'Sending...';

    // Send email using EmailJS
    emailjs.send('service_n4j8iqy', 'template_gr5ievp', {
      user_name: name,
      user_email: email,
      user_message: message
    })
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');

      // Reset form fields after success
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';

      // Re-enable the submit button
      submitButton.disabled = false;
      submitButton.value = 'Send Request';
    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send email. Please try again later.');

      // Re-enable the submit button even if there's an error
      submitButton.disabled = false;
      submitButton.value = 'Send Request';
    });
  });
});
