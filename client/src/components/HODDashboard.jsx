import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HODDashboard = () => {
  const [activeTab, setActiveTab] = useState('requests');
  const navigate = useNavigate();

  // Mock data for all requests (labs and events)
  const allRequests = [
    { id: 1, type: 'Lab Booking', requester: 'John Doe', facility: 'Computer Lab 1', date: '2024-01-15', time: '9:00 AM - 11:00 AM', status: 'Pending', department: 'CSE' },
    { id: 2, type: 'Event Request', requester: 'Event Coordinator', facility: 'Seminar Hall A', date: '2024-02-20', time: '9:00 AM - 5:00 PM', status: 'Pending', department: 'All' },
    { id: 3, type: 'Lab Booking', requester: 'Jane Smith', facility: 'Physics Lab', date: '2024-01-16', time: '1:00 PM - 3:00 PM', status: 'Approved', department: 'EEE' },
  ];

  // Mock summary analytics
  const summaryAnalytics = {
    totalRequests: 125,
    pendingRequests: 15,
    approvedRequests: 98,
    rejectedRequests: 12,
    labBookings: 85,
    eventRequests: 40
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleApprove = (id) => {
    // Mock approve functionality
    console.log(`Approved request ${id}`);
  };

  const handleReject = (id) => {
    // Mock reject functionality
    console.log(`Rejected request ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Kong Engineering College</h1>
              <span className="ml-4 text-sm text-gray-500">HOD Dashboard</span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-[#79C9C5] text-white px-4 py-2 rounded-lg hover:bg-[#5DA8A3] transition duration-200"
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
                  onClick={() => setActiveTab('requests')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 ${
                    activeTab === 'requests' ? 'bg-[#79C9C5] bg-opacity-20 text-[#79C9C5]' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  All Requests
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 ${
                    activeTab === 'analytics' ? 'bg-[#79C9C5] bg-opacity-20 text-[#79C9C5]' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Summary Analytics
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow p-6">
              {activeTab === 'requests' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">All Requests (Labs & Events)</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requester</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Facility</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {allRequests.map((request) => (
                          <tr key={request.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{request.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.requester}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.facility}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.time}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.department}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                request.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                                request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                'bg-red-100 text-red-800'
                              }`}>
                                {request.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {request.status === 'Pending' && (
                                <div className="flex space-x-2">
                                  <button 
                                    onClick={() => handleApprove(request.id)}
                                    className="text-green-600 hover:text-green-900"
                                  >
                                    Approve
                                  </button>
                                  <button 
                                    onClick={() => handleReject(request.id)}
                                    className="text-red-600 hover:text-red-900"
                                  >
                                    Reject
                                  </button>
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Summary Analytics</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700">Total Requests</h3>
                      <p className="text-3xl font-bold text-blue-600">{summaryAnalytics.totalRequests}</p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700">Pending Requests</h3>
                      <p className="text-3xl font-bold text-yellow-600">{summaryAnalytics.pendingRequests}</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700">Approved Requests</h3>
                      <p className="text-3xl font-bold text-green-600">{summaryAnalytics.approvedRequests}</p>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700">Rejected Requests</h3>
                      <p className="text-3xl font-bold text-red-600">{summaryAnalytics.rejectedRequests}</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700">Lab Bookings</h3>
                      <p className="text-3xl font-bold text-purple-600">{summaryAnalytics.labBookings}</p>
                    </div>
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700">Event Requests</h3>
                      <p className="text-3xl font-bold text-indigo-600">{summaryAnalytics.eventRequests}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Request Overview</h3>
                    <p className="text-gray-600 mb-4">
                      The facility management system has processed {summaryAnalytics.totalRequests} requests this month. 
                      With {summaryAnalytics.approvedRequests} approved requests and {summaryAnalytics.rejectedRequests} rejections, 
                      the approval rate stands at approximately {(summaryAnalytics.approvedRequests/summaryAnalytics.totalRequests*100).toFixed(1)}%.
                    </p>
                    <p className="text-gray-600">
                      Lab bookings account for {summaryAnalytics.labBookings} requests while event requests account for {summaryAnalytics.eventRequests} requests. 
                      Peak request times are typically during mid-semester and before major events.
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

export default HODDashboard;