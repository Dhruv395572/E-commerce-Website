document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        document.getElementById('errorMessage').textContent = "Invalid email format!";
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('message').style.display = 'none';
        return; 
    }

    var passwordPattern = /^[A-Za-z0-9]+$/; 

    if (!passwordPattern.test(password)) {
        document.getElementById('errorMessage').textContent = "Password should not contain special characters or spaces!";
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('message').style.display = 'none';
        return;
    }

    // Simulate login check (replace with actual authentication logic if needed)
    if (email === "user@example.com" && password === "password123") {
        document.getElementById('message').style.display = 'block';  // Show success message
        document.getElementById('errorMessage').style.display = 'none'; // Hide error message

        // Redirect to registration.html after successful login
        setTimeout(function() {
            window.location.href = "registration.html"; // Path to your registration page
        }, 1000); // Redirect after 1 second
    } else {
        document.getElementById('errorMessage').textContent = "Invalid email or password!";
        document.getElementById('errorMessage').style.display = 'block'; // Show error message
        document.getElementById('message').style.display = 'none'; // Hide success message
    }
});