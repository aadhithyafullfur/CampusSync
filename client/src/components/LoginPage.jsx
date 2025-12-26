import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.role) {
      setError('Please select a role');
      return;
    }
    
    try {
      setLoading(true);
      setError('');
      
      // API call to login user
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: formData.email,
        password: formData.password,
        role: formData.role
      });
      
      if (response.data.success) {
        // Redirect to role-specific dashboard
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', formData.role);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Redirect based on role
        if (formData.role === 'student') {
          window.location.href = '/student-dashboard';
        } else if (formData.role === 'labincharge') {
          window.location.href = '/labincharge-dashboard';
        } else if (formData.role === 'staffincharge') {
          window.location.href = '/staffincharge-dashboard';
        } else if (formData.role === 'eventcoordinator') {
          window.location.href = '/eventcoordinator-dashboard';
        } else if (formData.role === 'hod') {
          window.location.href = '/hod-dashboard';
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        {/* College Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Kong Engineering College
          </h1>
          <h2 className="text-lg font-semibold text-gray-700">
            Role Based Portal
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#79C9C5] to-[#5DA8A3] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center">
            {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-700"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-700"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-700"
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="labincharge">Lab Incharge</option>
              <option value="staffincharge">Staff Incharge</option>
              <option value="eventcoordinator">Event Coordinator</option>
              <option value="hod">HOD</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#79C9C5] to-[#5DA8A3] text-white py-3 px-4 rounded-lg hover:from-[#5DA8A3] hover:to-[#4C8D87] focus:outline-none focus:ring-2 focus:ring-[#79C9C5] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition duration-300 font-medium shadow-md hover:shadow-lg"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </span>
            ) : 'Sign In'}
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={handleRegister}
              className="text-[#79C9C5] hover:text-[#5DA8A3] font-semibold transition duration-200"
            >
              Register
            </button>
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center mt-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Kong Engineering College. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LoginPage;