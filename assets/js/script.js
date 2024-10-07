document.addEventListener('DOMContentLoaded', function () {
  // Get the form element and the submit button
  var form = document.querySelector('.work-request');
  var submitButton = form.querySelector('input[type="submit"]');

  // Add a click event listener to the submit button
  submitButton.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Show a pop-up message
    alert('Currently in development...');
  });
});