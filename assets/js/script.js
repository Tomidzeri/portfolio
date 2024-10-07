document.addEventListener('DOMContentLoaded', function () {
  // Get the form element and the submit button
  var form = document.querySelector('.work-request');
  var submitButton = form.querySelector('input[type="submit"]');

  // Add a click event listener to the submit button
  submitButton.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validate form values
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      user_name: name,
      user_email: email,
      user_message: message
    })
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send email. Please try again later.');
    });
  });
});