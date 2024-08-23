document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');

    const form = document.getElementById('myForm');
    const modal = document.getElementById('myModal');
    const closeModal = document.querySelector('.modal .close');

    // Handle form submission via AJAX
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);
        
        // Convert FormData to a plain object
        const data = {
            FullName: formData.get('FullName'),
            PhoneNumber: formData.get('PhoneNumber'),
            Service: formData.get('Service'),
            AvailableDate: formData.get('AvailableDate'),
            AppointmentTime: formData.get('AppointmentTime'),
            Message: formData.get('Message')
        };

        // Log data to console for debugging
        console.log('Form Data:', data);

        fetch('https://script.google.com/macros/s/AKfycbwLfLKG3qQ-I3iyYNBY4PfLstzFUYjRWybS84Mp-XELk0k1CGNqyfvXufPHigrJKVhC/exec', {
            method: 'POST',
            body: JSON.stringify(data), // Ensure data is in JSON format
            headers: {
                'Content-Type': 'application/json', // Specify JSON content type
            }
        })
        .then(response => response.json())
        .then(responseData => {
            console.log('Response Data:', responseData);
            showModal('Thank you for booking your appointment! Your details have been submitted successfully.');
        })
        .catch((error) => {
            console.error('Error:', error);
            showModal('Oops! Something went wrong. Please try again.');
        });
    });

    // Function to show modal with a message
    function showModal(message) {
        document.getElementById('modalMessage').innerText = message;
        modal.style.display = 'block';
    }

    // Close modal when the 'x' is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
