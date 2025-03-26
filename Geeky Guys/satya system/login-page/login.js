document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (!phone || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Phone number validation (basic Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid Indian phone number');
        return;
    }
    
    // Here you would typically make an API call to your backend
    console.log('Login attempt:', { phone, password });
    
    // For demo purposes, show success message
    alert('Login successful!');
}); 