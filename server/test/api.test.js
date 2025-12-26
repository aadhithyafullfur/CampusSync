// Simple API test script
const axios = require('axios');

// Base URL for the API
const BASE_URL = 'http://localhost:5000/api';
const AUTH_BASE_URL = 'http://localhost:5000/api/auth';

// Test user data for different roles
const testUsers = [
  {
    name: 'John Student',
    email: 'john.student@example.com',
    password: 'password123',
    role: 'student',
    studentId: 'STU001',
    department: 'Computer Science'
  },
  {
    name: 'Lab Incharge',
    email: 'lab.incharge@example.com',
    password: 'password123',
    role: 'labincharge',
    department: 'Computer Science',
    labName: 'Programming Lab'
  },
  {
    name: 'Event Coordinator',
    email: 'event.coord@example.com',
    password: 'password123',
    role: 'eventcoordinator',
    eventResponsibility: 'Annual Function'
  },
  {
    name: 'Staff Incharge',
    email: 'staff.incharge@example.com',
    password: 'password123',
    role: 'staffincharge',
    department: 'Administration'
  },
  {
    name: 'Head of Department',
    email: 'hod@example.com',
    password: 'password123',
    role: 'hod',
    department: 'Computer Science'
  }
];

async function testAPI() {
  console.log('Testing CampusSync API...\n');
  
  try {
    // Test the test endpoint
    console.log('1. Testing API endpoint...');
    const testResponse = await axios.get(`${BASE_URL}/test`);
    console.log('✅ Test endpoint working:', testResponse.data.message);
    
    // Test registration for each role
    console.log('\n2. Testing registration for all roles...');
    const tokens = {};
    
    for (const userData of testUsers) {
      try {
        console.log(`   Registering ${userData.role}...`);
        const registerResponse = await axios.post(`${AUTH_BASE_URL}/register`, userData);
        console.log(`   ✅ ${userData.role} registered successfully`);
        
        // Test login
        console.log(`   Logging in ${userData.role}...`);
        const loginResponse = await axios.post(`${AUTH_BASE_URL}/login`, {
          email: userData.email,
          password: userData.password
        });
        console.log(`   ✅ ${userData.role} logged in successfully`);
        
        tokens[userData.role] = loginResponse.data.token;
      } catch (error) {
        console.log(`   ❌ Error with ${userData.role}:`, error.response?.data?.message || error.message);
      }
    }
    
    // Test protected route with token
    if (tokens.student) {
      console.log('\n3. Testing protected route with student token...');
      const protectedResponse = await axios.get(`${AUTH_BASE_URL}/me`, {
        headers: {
          'Authorization': `Bearer ${tokens.student}`
        }
      });
      console.log('✅ Protected route working:', protectedResponse.data.user.name);
    }
    
    console.log('\n🎉 All tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testAPI();