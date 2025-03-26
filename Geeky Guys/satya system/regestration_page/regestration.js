document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    
    // Basic validation
    if (!name || !phone || !password || !address) {
        alert('Please fill in all fields');
        return;
    }
    
    // Name validation
    if (name.length < 3) {
        alert('Name must be at least 3 characters long');
        return;
    }
    
    // Phone number validation (basic Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid Indian phone number');
        return;
    }
    
    // Password validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    // Address validation
    if (address.length < 10) {
        alert('Please enter a complete address (minimum 10 characters)');
        return;
    }
    
    // Here's the database connection and registration code (commented out for future use)
    /*
    // Using MySQL as an example
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'your_username',
        password: 'your_password',
        database: 'emandi_db'
    });
    
    // SQL query to insert new user
    const query = `
        INSERT INTO users (name, phone, password, address, created_at)
        VALUES (?, ?, ?, ?, NOW())
    `;
    
    // Hash the password before storing (using bcrypt)
    const bcrypt = require('bcrypt');
    const hashedPassword = bcrypt.hashSync(password, 10);
    
    connection.query(query, [name, phone, hashedPassword, address], function(error, results) {
        if (error) {
            console.error('Error registering user:', error);
            alert('Registration failed. Please try again.');
            return;
        }
        
        alert('Registration successful!');
        window.location.href = 'index.html'; // Redirect to login page
    });
    */
    
    // For now, just show success message
    console.log('Registration attempt:', { name, phone, password, address });
    alert('Registration successful!');
    window.location.href = 'index.html';
});