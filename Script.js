/*document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form values
    const name = document.getElementById(name).value;
    const email = document.getElementById(email).value;
    const phone = document.getElementById(phone).value;
    const message = document.getElementById(message).value;

    // Perform form validation
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || message.trim() === '') {
      alert('Please fill in all the fields');
      return;
    }

    // Perform further processing (e.g., sending data to a server)
    // Replace the alert with your desired logic for form submission

    // Reset the form after submission
    contactForm.reset();
  });
});*/


let username;
let email;
let phone;
let message;

document.getElementById("mybutton").onclick = function(){

  username = document.getElementById("name").value;
  console.log(username);

  email = document.getElementById("email").value;
  console.log(email);

  phone = document.getElementById("phone").value;
  console.log(phone);

  message = document.getElementById("message").value;
  console.log(message);

  document.getElementById("contactForm").innerHTML = "Message Sent Successfully"

}
