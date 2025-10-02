document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission

            // Get form values
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            // Simple validation (can be expanded)
            if (email && password) {
                // In a real application, this would send data to a server for verification
                console.log('Login Attempt:', { email, password });
                
                // Simulate a successful login
                alert(`Login successful for ${email}! Redirecting to home...`);
                
                // Redirect to the main page
                window.location.href = 'index.html'; 

            } else {
                alert('Please enter both email and password.');
            }
        });
    }
});