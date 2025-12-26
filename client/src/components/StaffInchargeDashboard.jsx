import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StaffInchargeDashboard = () => {
  const [activeTab, setActiveTab] = useState('usage');
  const navigate = useNavigate();

  // Mock data for lab usage
  const labUsage = [
    { id: 1, lab: 'Computer Lab 1', date: '2024-01-15', time: '9:00 AM - 11:00 AM', users: 25, purpose: 'Programming Assignment' },
    { id: 2, lab: 'Computer Lab 2', date: '2024-01-16', time: '1:00 PM - 3:00 PM', users: 18, purpose: 'Project Work' },
    { id: 3, lab: 'Electronics Lab', date: '2024-01-17', time: '10:00 AM - 12:00 PM', users: 12, purpose: 'Circuit Design' },
  ];

  // Mock data for approved bookings
  const approvedBookings = [
    { id: 1, lab: 'Computer Lab 1', date: '2024-01-15', time: '9:00 AM - 11:00 AM', bookedBy: 'John Doe', status: 'Completed' },
    { id: 2, lab: 'Computer Lab 2', date: '2024-01-16', time: '1:00 PM - 3:00 PM', bookedBy: 'Jane Smith', status: 'In Progress' },
    { id: 3, lab: 'Physics Lab', date: '2024-01-17', time: '2:00 PM - 4:00 PM', bookedBy: 'Mike Johnson', status: 'Upcoming' },
  ];

  // Mock usage report
  const usageReport = {
    totalBookings: 45,
    totalUsers: 320,
    avgUsage: '78%',
    popularLab: 'Computer Lab 1'
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Kong Engineering College</h1>
              <span className="ml-4 text-sm text-gray-500">Staff Incharge Dashboard</span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-accent-primary text-white px-4 py-2 rounded-lg hover:bg-accent-dark transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Navigation</h2>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('usage')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 ${activeTab === 'usage' ? 'bg-accent-primary bg-opacity-20 text-accent-primary' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Lab Usage
                </button>
                <button
                  onClick={() => setActiveTab('bookings')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 ${activeTab === 'bookings' ? 'bg-accent-primary bg-opacity-20 text-accent-primary' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Approved Bookings
                </button>
                <button
                  onClick={() => setActiveTab('reports')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 ${activeTab === 'reports' ? 'bg-accent-primary bg-opacity-20 text-accent-primary' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Usage Reports
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow p-6">
              {activeTab === 'usage' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Lab Usage Statistics</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lab</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {labUsage.map((usage) => (
                          <tr key={usage.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{usage.lab}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{usage.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{usage.time}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{usage.users}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{usage.purpose}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'bookings' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Approved Bookings</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lab</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booked By</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {approvedBookings.map((booking) => (
                          <tr key={booking.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.lab}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.time}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.bookedBy}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${booking.status === 'Completed' ? 'bg-green-100 text-green-800' : booking.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {booking.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'reports' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Usage Reports</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700">Total Bookings</h3>
                      <p className="text-3xl font-bold text-blue-600">{usageReport.totalBookings}</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
                      <p className="text-3xl font-bold text-green-600">{usageReport.totalUsers}</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700">Avg. Usage</h3>
                      <p className="text-3xl font-bold text-purple-600">{usageReport.avgUsage}</p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700">Popular Lab</h3>
                      <p className="text-xl font-bold text-yellow-600">{usageReport.popularLab}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Usage Summary</h3>
                    <p className="text-gray-600">
                      The lab usage has been consistent this month with Computer Lab 1 being the most popular facility. 
                      Average utilization is at {usageReport.avgUsage} with peak hours between 9 AM and 1 PM. 
                      Most bookings are for academic purposes and project work.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffInchargeDashboard;