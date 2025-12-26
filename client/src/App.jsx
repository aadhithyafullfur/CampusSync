import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

// Import role-based dashboard components
import StudentDashboard from './components/StudentDashboard';
import LabInchargeDashboard from './components/LabInchargeDashboard';
import StaffInchargeDashboard from './components/StaffInchargeDashboard';
import EventCoordinatorDashboard from './components/EventCoordinatorDashboard';
import HODDashboard from './components/HODDashboard';

// Protected Route Component
const ProtectedRoute = ({ element: Component, allowedRoles, ...rest }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');
  
  if (!token || !userRole) {
    return <Navigate to="/login" replace />;
  }
  
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // Redirect to login if user doesn't have the right role
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    return <Navigate to="/login" replace />;
  }
  
  return Component;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-4">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/student-dashboard" 
            element={<ProtectedRoute element={<StudentDashboard />} allowedRoles={['student']} />} 
          />
          <Route 
            path="/labincharge-dashboard" 
            element={<ProtectedRoute element={<LabInchargeDashboard />} allowedRoles={['labincharge']} />} 
          />
          <Route 
            path="/staffincharge-dashboard" 
            element={<ProtectedRoute element={<StaffInchargeDashboard />} allowedRoles={['staffincharge']} />} 
          />
          <Route 
            path="/eventcoordinator-dashboard" 
            element={<ProtectedRoute element={<EventCoordinatorDashboard />} allowedRoles={['eventcoordinator']} />} 
          />
          <Route 
            path="/hod-dashboard" 
            element={<ProtectedRoute element={<HODDashboard />} allowedRoles={['hod']} />} 
          />
          {/* Redirect any unmatched routes to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
