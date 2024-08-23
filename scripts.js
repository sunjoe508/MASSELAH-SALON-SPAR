// Initialize EmailJS with your User ID
emailjs.init('service_yir5adf'); // Replace 'service_yir5adf' with your actual EmailJS User ID

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send('service_yir5adf', '__ejs-test-mail-service__', {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'joemunga329@gmail.com'
    }).then(function(response) {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset(); // Optionally reset the form after successful submission
    }, function(error) {
        alert('Failed to send message. Please try again later.');
    });
});
