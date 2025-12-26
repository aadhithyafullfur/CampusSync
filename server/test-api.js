const axios = require('axios');

async function testAPI() {
  try {
    console.log('Testing backend connection...');
    
    // Test root endpoint
    const response = await axios.get('http://localhost:5000/');
    console.log('Root endpoint response:', response.data);
    
    // Test registration
    const testEmail = `test${Date.now()}@example.com`;
    console.log('Testing registration...');
    const registerResponse = await axios.post('http://localhost:5000/api/auth/register', {
      email: testEmail,
      password: 'password123',
      name: 'Test User',
      role: 'student'
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Registration response:', registerResponse.data);
    
    // Test login
    console.log('Testing login...');
    const loginResponse = await axios.post('http://localhost:5000/api/auth/login', {
      email: testEmail,
      password: 'password123'
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Login response:', loginResponse.data);
    
    console.log('All tests passed!');
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Status:', error.response.status);
    } else {
      console.error('Error:', error.message);
    }
  }
}

testAPI();