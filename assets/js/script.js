/* document.addEventListener('DOMContentLoaded', function () {
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
*/
/* 
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page refresh

  // Send the form data via EmailJS
  emailjs.sendForm('service_n4j8iqy', 'template_gr5ievp', this)
    .then(function() {
      alert('Message Sent!');
    }, function(error) {
      alert('Failed to send message: ' + JSON.stringify(error));
    });
}); 
var messageInput = document.getElementById("message");\
messageInput.addEventListener("input", function() {
  console.log("User is typing: ", messageInput.value);
  // You can perform other actions here, such as validation or saving the state
});

function SendMail() {
  var params = {
    from_name : document.getElementById("fullName").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value
  }
  emailjs.send('service_n4j8iqy', 'template_gr5ievp', params).then(function (res){
    alert("Success! " +res.status);
  })
} */

function SendMail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value
  };

  console.log("Sending email with params:", params); // Debug log

  emailjs.send('service_n4j8iqy', 'template_gr5ievp', params)
    .then(function(res) {
      alert("Success! Message sent with status: " + res.status);
      console.log(res); // Debug log for response
    })
    .catch(function(error) {
      alert("Failed to send message: " + JSON.stringify(error));
      console.error("Error details:", error); // Debug log for error
    });
}
