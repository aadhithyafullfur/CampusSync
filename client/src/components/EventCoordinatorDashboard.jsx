import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EventCoordinatorDashboard = () => {
  const [activeTab, setActiveTab] = useState('requests');
  const navigate = useNavigate();

  // Mock data for event requests
  const eventRequests = [
    { id: 1, eventName: 'Tech Fest', eventType: 'Lab', facility: 'Computer Lab 1', date: '2024-02-15', time: '10:00 AM - 4:00 PM', status: 'Pending' },
    { id: 2, eventName: 'Science Exhibition', eventType: 'Hall', facility: 'Seminar Hall A', date: '2024-02-20', time: '9:00 AM - 5:00 PM', status: 'Approved' },
    { id: 3, eventName: 'Workshop', eventType: 'Lab', facility: 'Electronics Lab', date: '2024-02-25', time: '2:00 PM - 6:00 PM', status: 'Rejected' },
  ];

  // Mock data for event schedule
  const eventSchedule = [
    { id: 1, eventName: 'Science Exhibition', facility: 'Seminar Hall A', date: '2024-02-20', time: '9:00 AM - 5:00 PM', attendees: 150 },
    { id: 2, eventName: 'Guest Lecture', facility: 'Auditorium', date: '2024-02-22', time: '11:00 AM - 1:00 PM', attendees: 200 },
  ];

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
              <span className="ml-4 text-sm text-gray-500">Event Coordinator Dashboard</span>
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
                  className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 ${activeTab === 'requests' ? 'bg-[#79C9C5] bg-opacity-20 text-[#79C9C5]' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Event Requests
                </button>
                <button
                  onClick={() => setActiveTab('schedule')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 ${activeTab === 'schedule' ? 'bg-[#79C9C5] bg-opacity-20 text-[#79C9C5]' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Event Schedule
                </button>
                <button
                  onClick={() => setActiveTab('bookLab')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 ${activeTab === 'bookLab' ? 'bg-[#79C9C5] bg-opacity-20 text-[#79C9C5]' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Request Lab/Hall
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow p-6">
              {activeTab === 'requests' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Event Requests</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Facility</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {eventRequests.map((request) => (
                          <tr key={request.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.eventName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.eventType}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.facility}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.time}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${request.status === 'Approved' ? 'bg-green-100 text-green-800' : request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                {request.status}
                              </span>
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
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Event Schedule</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Facility</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendees</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {eventSchedule.map((event) => (
                          <tr key={event.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.eventName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.facility}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.time}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.attendees}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'bookLab' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Request Lab/Hall</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Event Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Enter event name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select event type</option>
                        <option>Lab</option>
                        <option>Hall</option>
                        <option>Auditorium</option>
                        <option>Seminar Hall</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Facility</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select facility</option>
                        <option>Computer Lab 1</option>
                        <option>Computer Lab 2</option>
                        <option>Electronics Lab</option>
                        <option>Physics Lab</option>
                        <option>Seminar Hall A</option>
                        <option>Seminar Hall B</option>
                        <option>Auditorium</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C9C5]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select time slot</option>
                        <option>9:00 AM - 11:00 AM</option>
                        <option>11:00 AM - 1:00 PM</option>
                        <option>1:00 PM - 3:00 PM</option>
                        <option>3:00 PM - 5:00 PM</option>
                        <option>5:00 PM - 7:00 PM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expected Attendees</label>
                      <input 
                        type="number" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Enter expected number of attendees"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
                      <textarea 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        rows="3"
                        placeholder="Enter purpose for booking"
                      ></textarea>
                    </div>
                    <button type="submit" className="bg-[#79C9C5] text-white px-6 py-3 rounded-lg hover:bg-[#5DA8A3] transition duration-200">
                      Submit Event Request
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCoordinatorDashboard;