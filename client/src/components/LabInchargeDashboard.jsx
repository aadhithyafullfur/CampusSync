import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LabInchargeDashboard = () => {
  const [activeTab, setActiveTab] = useState('requests');
  const navigate = useNavigate();

  // Mock data for booking requests
  const bookingRequests = [
    { id: 1, student: 'John Doe', lab: 'Computer Lab 1', date: '2024-01-15', time: '9:00 AM - 11:00 AM', purpose: 'Programming Assignment', status: 'Pending' },
    { id: 2, student: 'Jane Smith', lab: 'Computer Lab 2', date: '2024-01-16', time: '1:00 PM - 3:00 PM', purpose: 'Project Work', status: 'Pending' },
    { id: 3, student: 'Mike Johnson', lab: 'Computer Lab 1', date: '2024-01-17', time: '11:00 AM - 1:00 PM', purpose: 'Lab Assignment', status: 'Approved' },
  ];

  // Mock data for lab schedule
  const labSchedule = [
    { id: 1, lab: 'Computer Lab 1', time: '9:00 AM - 11:00 AM', bookedBy: 'John Doe', purpose: 'Programming Assignment' },
    { id: 2, lab: 'Computer Lab 1', time: '11:00 AM - 1:00 PM', bookedBy: 'Jane Smith', purpose: 'Project Work' },
    { id: 3, lab: 'Computer Lab 2', time: '2:00 PM - 4:00 PM', bookedBy: 'Mike Johnson', purpose: 'Lab Assignment' },
  ];

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
              <span className="ml-4 text-sm text-gray-500">Lab Incharge Dashboard</span>
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
                  Booking Requests
                </button>
                <button
                  onClick={() => setActiveTab('schedule')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 ${
                    activeTab === 'schedule' ? 'bg-[#79C9C5] bg-opacity-20 text-[#79C9C5]' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Lab Schedule
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow p-6">
              {activeTab === 'requests' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Lab Booking Requests</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lab</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {bookingRequests.map((request) => (
                          <tr key={request.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.student}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.lab}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.time}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{request.purpose}</td>
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

              {activeTab === 'schedule' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Lab Schedule</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lab</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Slot</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booked By</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {labSchedule.map((slot) => (
                          <tr key={slot.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{slot.lab}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{slot.time}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{slot.bookedBy}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{slot.purpose}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default LabInchargeDashboard;