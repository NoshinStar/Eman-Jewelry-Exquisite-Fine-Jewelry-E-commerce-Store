document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission

            // Get form values
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            // Simple validation (can be expanded)
            if (name && email && password) {
                // In a real application, you would send this data to a server
                console.log('Signup Attempt:', { name, email, password });
                
                // Simulate a successful signup
                alert(`Welcome, ${name}! Your account has been created successfully. Redirecting to login...`);
                
                // Redirect to the login page
                window.location.href = 'login.html'; 

            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});