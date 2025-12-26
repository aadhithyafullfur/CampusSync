import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ============================================================================
// ICON COMPONENTS (Simple SVG Icons)
// ============================================================================
const CheckIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const ChevronRightIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// ============================================================================
// STEP 1: DEPARTMENT SELECTOR COMPONENT
// ============================================================================
// (Inlined in main component for full-width layout)

// ============================================================================
// SUCCESS MODAL COMPONENT
// ============================================================================
const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center space-y-4 animate-fadeIn">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckIcon className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h3>
        <p className="text-gray-600">Your resource booking has been successfully submitted. You'll receive a confirmation email shortly.</p>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN STUDENT DASHBOARD COMPONENT
// ============================================================================
const StudentDashboard = () => {
  const navigate = useNavigate();

  // State Management
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedResource, setSelectedResource] = useState(null);
  const [selectedPeriods, setSelectedPeriods] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showApprovalPanel, setShowApprovalPanel] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock Data: Resources by Department
  const resourcesByDepartment = {
    CSE: [
      { id: 'cc1', name: 'Computer Center 1 (CC1)', type: 'Computer Lab', capacity: 40, available: true },
      { id: 'cc2', name: 'Computer Center 2 (CC2)', type: 'Computer Lab', capacity: 35, available: true },
      { id: 'cc3', name: 'Computer Center 3 (CC3)', type: 'Computer Lab', capacity: 30, available: false },
      { id: 'rsh', name: 'Ramanujam Seminar Hall', type: 'Seminar Hall', capacity: 100, available: true },
    ],
    ECE: [
      { id: 'cc1', name: 'Computer Center 1 (CC1)', type: 'Computer Lab', capacity: 40, available: true },
      { id: 'elab', name: 'Electronics Lab', type: 'Specialized Lab', capacity: 25, available: true },
      { id: 'rsh', name: 'Ramanujam Seminar Hall', type: 'Seminar Hall', capacity: 100, available: false },
    ],
    EEE: [
      { id: 'cc1', name: 'Computer Center 1 (CC1)', type: 'Computer Lab', capacity: 40, available: true },
      { id: 'plab', name: 'Power Systems Lab', type: 'Specialized Lab', capacity: 20, available: true },
      { id: 'rsh', name: 'Ramanujam Seminar Hall', type: 'Seminar Hall', capacity: 100, available: true },
    ],
    IT: [
      { id: 'cc1', name: 'Computer Center 1 (CC1)', type: 'Computer Lab', capacity: 40, available: true },
      { id: 'cc2', name: 'Computer Center 2 (CC2)', type: 'Computer Lab', capacity: 35, available: true },
      { id: 'cc3', name: 'Computer Center 3 (CC3)', type: 'Computer Lab', capacity: 30, available: true },
      { id: 'rsh', name: 'Ramanujam Seminar Hall', type: 'Seminar Hall', capacity: 100, available: true },
    ]
  };

  // Mock Data: Time Periods
  const periods = [
    { id: 1, label: 'Period 1', time: '9:00 - 10:00 AM', disabled: false },
    { id: 2, label: 'Period 2', time: '10:00 - 11:00 AM', disabled: false },
    { id: 3, label: 'Period 3', time: '11:00 - 12:00 PM', disabled: true },
    { id: 4, label: 'Period 4', time: '12:00 - 1:00 PM', disabled: false },
    { id: 5, label: 'Period 5', time: '1:00 - 2:00 PM', disabled: false },
    { id: 6, label: 'Period 6', time: '2:00 - 3:00 PM', disabled: true },
  ];

  // Get available resources for selected department
  const availableResources = selectedDepartment ? resourcesByDepartment[selectedDepartment] : [];

  // Handle Department Selection
  const handleDepartmentSelect = (dept) => {
    setSelectedDepartment(dept);
    setSelectedResource(null);
    setCurrentStep(2);
  };

  // Handle Resource Selection
  const handleResourceSelect = (resourceId) => {
    const resource = availableResources.find(r => r.id === resourceId);
    setSelectedResource(resource);
    setCurrentStep(3);
  };

  // Handle Period Selection (Toggle)
  const handlePeriodSelect = (periodId) => {
    setSelectedPeriods(prev =>
      prev.includes(periodId)
        ? prev.filter(p => p !== periodId)
        : [...prev, periodId]
    );
  };

  // Handle Booking Submission
  const handleConfirmBooking = async () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      // Reset after success
      setTimeout(() => {
        setShowSuccess(false);
        setCurrentStep(1);
        setSelectedDepartment('');
        setSelectedResource(null);
        setSelectedPeriods([]);
      }, 2000);
    }, 1000);
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Handle Step Navigation
  const goToPreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-gray-900">
      {/* ===================================================================== */}
      {/* HEADER - ERP STYLE TOP BAR */}
      {/* ===================================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white text-slate-900 border-b border-slate-200">
        <div className="h-16 px-8 flex items-center justify-between">
          {/* Left: College Name */}
          <div className="flex items-center gap-4">
            <div className="h-8 w-1 bg-blue-600" />
            <div className="leading-tight">
              <h1 className="text-[15px] font-semibold tracking-wide">
                Kongu Engineering College
              </h1>
              <p className="text-[11px] text-slate-500">
                CampusSync – Student Lab &amp; Seminar Booking
              </p>
            </div>
          </div>

          {/* Center: Student Info */}
          <div className="hidden md:flex items-center gap-8 text-xs">
            <div className="flex flex-col">
              <span className="text-slate-500 uppercase tracking-wide">Student ID</span>
              <span className="font-semibold text-slate-900">2024001</span>
            </div>
            <div className="h-6 w-px bg-slate-300" />
            <div className="flex flex-col">
              <span className="text-slate-500 uppercase tracking-wide">Department</span>
              <span className="font-semibold text-slate-900">
                {selectedDepartment || 'Not Selected'}
              </span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowApprovalPanel(true)}
              className="px-4 py-2 text-xs font-semibold border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-colors"
            >
              Approval Status
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-xs font-semibold border border-red-500 bg-red-50 text-red-700 hover:bg-red-100 hover:border-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* ===================================================================== */}
      {/* STEP INDICATOR - ENTERPRISE HORIZONTAL STEPPER */}
      {/* ===================================================================== */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-8 py-3">
          <div className="flex items-center gap-0">
            {['Department', 'Resource', 'Period', 'Confirm'].map((label, idx) => {
              const stepNumber = idx + 1;
              const isCompleted = stepNumber < currentStep;
              const isActive = stepNumber === currentStep;

              return (
                <div key={label} className="flex-1 flex items-center">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-8 w-8 flex items-center justify-center text-[11px] font-semibold border text-center ${
                        isCompleted
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : isActive
                          ? 'border-blue-600 bg-white text-blue-700'
                          : 'border-slate-300 bg-white text-slate-600'
                      }`}
                    >
                      {isCompleted ? <CheckIcon className="w-4 h-4" /> : stepNumber}
                    </div>
                    <div className="flex flex-col">
                      <span
                        className={`text-[11px] font-medium tracking-wide ${
                          isActive
                            ? 'text-blue-700'
                            : isCompleted
                            ? 'text-slate-700'
                            : 'text-slate-500'
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                  </div>
                  {idx < 3 && (
                    <div className="flex-1 flex items-center ml-4">
                      <div
                        className={`h-px w-full ${
                          isCompleted ? 'bg-blue-600' : 'bg-slate-200'
                        }`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* MAIN CONTENT AREA */}
      {/* ===================================================================== */}
      <main className="pt-32 pb-24 px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Context Header */}
          <section className="bg-white border border-slate-200 px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[15px] font-semibold text-slate-900 tracking-wide">
                  Student Resource Booking
                </h2>
                <p className="mt-1 text-[11px] text-slate-500">
                  Follow the steps to book a laboratory or seminar hall for your session.
                </p>
              </div>
              <div className="text-[11px] text-slate-500">
                <span className="font-medium text-slate-700">Step {currentStep}</span>
                <span className="mx-1">/</span>
                <span>4</span>
              </div>
            </div>
          </section>

          {/* ========== STEP 1: Department Selection ========== */}
          {currentStep === 1 && (
            <section className="bg-white border border-slate-200 px-5 py-5 animate-fadeIn">
              <header className="mb-4 border-b border-slate-200 pb-2">
                <h3 className="text-[15px] font-semibold text-slate-900">
                  Select Department
                </h3>
                <p className="mt-1 text-[11px] text-slate-500">
                  Choose your department to view the resources assigned for booking.
                </p>
              </header>

              <div className="space-y-2 mt-2">
                {[
                  { id: 'CSE', name: 'Computer Science & Engineering', code: 'CSE' },
                  { id: 'ECE', name: 'Electronics & Communication Engineering', code: 'ECE' },
                  { id: 'EEE', name: 'Electrical & Electronics Engineering', code: 'EEE' },
                  { id: 'IT', name: 'Information Technology', code: 'IT' }
                ].map((dept) => {
                  const isSelected = selectedDepartment === dept.id;
                  return (
                    <button
                      key={dept.id}
                      onClick={() => handleDepartmentSelect(dept.id)}
                      className={`w-full text-left text-[13px] border px-4 py-3 flex items-center justify-between transition-colors ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-16 text-[11px] font-semibold text-slate-700">
                          {dept.code}
                        </span>
                        <span className="text-[13px] text-slate-900">{dept.name}</span>
                      </div>
                      {isSelected && (
                        <CheckIcon className="w-4 h-4 text-blue-600" />
                      )}
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          {/* ========== STEP 2: Resource Selection ========== */}
          {currentStep === 2 && (
            <section className="bg-white border border-slate-200 px-5 py-5 animate-fadeIn">
              <header className="mb-4 border-b border-slate-200 pb-2">
                <h3 className="text-[15px] font-semibold text-slate-900">
                  Select Resource
                </h3>
                <p className="mt-1 text-[11px] text-slate-500">
                  Choose an eligible lab or seminar hall from your department for this booking.
                </p>
              </header>
              <div className="mt-3 grid grid-cols-2 gap-4">
                {availableResources.map((resource) => {
                  const isSelected = selectedResource?.id === resource.id;
                  const isUnavailable = !resource.available;
                  return (
                    <button
                      key={resource.id}
                      onClick={() => !isUnavailable && handleResourceSelect(resource.id)}
                      disabled={isUnavailable}
                      className={`text-left border rounded-sm px-4 py-3 h-28 flex flex-col justify-between transition-colors ${
                        isUnavailable
                          ? 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed'
                          : isSelected
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <p className="text-[13px] font-semibold text-slate-900">
                            {resource.name}
                          </p>
                          <p className="mt-1 text-[11px] text-slate-500">
                            {resource.type}
                          </p>
                        </div>
                        {isSelected && !isUnavailable && (
                          <CheckIcon className="w-4 h-4 text-blue-600" />
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <p className="text-[12px] text-slate-600">
                          Capacity:{' '}
                          <span className="font-medium text-slate-900">{resource.capacity}</span>
                        </p>
                        <span
                          className={`px-2 py-1 text-[11px] font-semibold border ${
                            resource.available
                              ? 'border-emerald-600 text-emerald-700 bg-emerald-50'
                              : 'border-red-600 text-red-700 bg-red-50'
                          }`}
                        >
                          {resource.available ? 'Available' : 'Unavailable'}
                        </span>
                      </div>
                    </button>
                  );
                })}

                {availableResources.length === 0 && (
                  <div className="col-span-2 px-4 py-4 text-[13px] text-slate-500 border border-dashed border-slate-300 bg-slate-50">
                    No resources configured for the selected department.
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ========== STEP 3: Period Selection ========== */}
          {currentStep === 3 && (
            <section className="bg-white border border-slate-200 px-5 py-5 animate-fadeIn">
              <header className="mb-4 border-b border-slate-200 pb-2">
                <h3 className="text-[15px] font-semibold text-slate-900">
                  Select Period(s)
                </h3>
                <p className="mt-1 text-[11px] text-slate-500">
                  Choose one or more academic periods for which this resource is required.
                </p>
              </header>

              <div className="grid grid-cols-3 gap-2 text-[13px] mt-2">
                {[
                  { id: 1, label: 'Period 1', time: '9:00 - 10:00 AM', disabled: false },
                  { id: 2, label: 'Period 2', time: '10:00 - 11:00 AM', disabled: false },
                  { id: 3, label: 'Period 3', time: '11:00 - 12:00 PM', disabled: true },
                  { id: 4, label: 'Period 4', time: '12:00 - 1:00 PM', disabled: false },
                  { id: 5, label: 'Period 5', time: '1:00 - 2:00 PM', disabled: false },
                  { id: 6, label: 'Period 6', time: '2:00 - 3:00 PM', disabled: true }
                ].map((period) => {
                  const isSelected = selectedPeriods.includes(period.id);
                  return (
                    <button
                      key={period.id}
                      onClick={() => !period.disabled && handlePeriodSelect(period.id)}
                      disabled={period.disabled}
                      className={`flex items-center justify-between px-3 py-2 border text-left transition-colors ${
                        period.disabled
                          ? 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed'
                          : isSelected
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-[12px] font-semibold text-slate-800">
                          {period.label}
                        </span>
                        <span className="text-[11px] text-slate-500">{period.time}</span>
                      </div>
                      <div
                        className={`h-4 w-4 border flex items-center justify-center text-[10px] ${
                          isSelected
                            ? 'border-blue-600 bg-blue-600 text-white'
                            : 'border-slate-400 bg-white text-transparent'
                        }`}
                      >
                        <CheckIcon className="w-3 h-3" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {selectedPeriods.length === 0 && (
                <div className="mt-3 px-3 py-2 border border-red-200 bg-red-50 text-[12px] text-red-700">
                  Please select at least one period to proceed.
                </div>
              )}
            </section>
          )}

          {/* ========== STEP 4: Confirmation ========== */}
          {currentStep === 4 && (
            <section className="bg-white border border-slate-200 px-5 py-5 animate-fadeIn">
              <header className="mb-4 border-b border-slate-200 pb-2">
                <h3 className="text-[15px] font-semibold text-slate-900">
                  Confirm Booking
                </h3>
                <p className="mt-1 text-[11px] text-slate-500">
                  Review the details below before submitting your booking request.
                </p>
              </header>

              <div className="space-y-4 text-[13px]">
                <div className="flex">
                  <div className="w-40 text-[11px] font-semibold text-slate-500 uppercase">
                    Department
                  </div>
                  <div className="text-slate-900 font-medium">
                    {selectedDepartment}
                  </div>
                </div>

                <div className="flex">
                  <div className="w-40 text-[11px] font-semibold text-slate-500 uppercase">
                    Resource
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-900 font-medium">
                      {selectedResource?.name}
                    </span>
                    <span className="text-[11px] text-slate-500 mt-1">
                      {selectedResource?.type}
                    </span>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-40 text-[11px] font-semibold text-slate-500 uppercase">
                    Periods
                  </div>
                  <div className="space-y-1">
                    {selectedPeriods.map((p) => {
                      const timeMap = {
                        1: '9:00 - 10:00 AM',
                        2: '10:00 - 11:00 AM',
                        3: '11:00 - 12:00 PM',
                        4: '12:00 - 1:00 PM',
                        5: '1:00 - 2:00 PM',
                        6: '2:00 - 3:00 PM'
                      };
                      return (
                        <div key={p} className="flex items-center gap-2 text-slate-900">
                          <CheckIcon className="w-4 h-4 text-green-600" />
                          <span className="text-[13px]">
                            Period {p} ({timeMap[p]})
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  onClick={handleConfirmBooking}
                  disabled={isSubmitting}
                  className="px-5 py-2 text-[13px] font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:bg-slate-300 transition-colors"
                >
                  {isSubmitting ? 'Processing…' : 'Submit Booking'}
                </button>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* ===================================================================== */}
      {/* BOTTOM ACTION BAR */}
      {/* ===================================================================== */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-8 py-3 flex items-center justify-between">
          <button
            onClick={goToPreviousStep}
            disabled={currentStep === 1}
            className="px-4 py-2 text-[12px] font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <button
            onClick={() => {
              if (currentStep === 1 && selectedDepartment) setCurrentStep(2);
              else if (currentStep === 2 && selectedResource) setCurrentStep(3);
              else if (currentStep === 3 && selectedPeriods.length > 0) setCurrentStep(4);
            }}
            disabled={
              (currentStep === 1 && !selectedDepartment) ||
              (currentStep === 2 && !selectedResource) ||
              (currentStep === 3 && selectedPeriods.length === 0) ||
              currentStep === 4
            }
            className="px-5 py-2 text-[12px] font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center gap-2"
          >
            Next
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* APPROVAL STATUS PANEL */}
      {/* ===================================================================== */}
      {showApprovalPanel && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black bg-opacity-30"
            onClick={() => setShowApprovalPanel(false)}
          />
          <aside className="w-80 bg-white border-l border-slate-200 shadow-lg flex flex-col">
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-[14px] font-semibold text-slate-900">
                  Approval Status
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Current approval trail for your booking requests.
                </p>
              </div>
              <button
                className="text-[11px] text-slate-500 hover:text-slate-800"
                onClick={() => setShowApprovalPanel(false)}
              >
                ✕
              </button>
            </div>

            <div className="px-5 py-4 space-y-3 text-[13px]">
              {[
                { role: 'Lab Incharge', status: 'Approved', ts: 'Today, 09:30 AM' },
                { role: 'Event Coordinator', status: 'Pending', ts: '—' },
                { role: 'Staff Incharge', status: 'Pending', ts: '—' },
                { role: 'HOD', status: 'Pending', ts: '—' },
              ].map((item) => {
                const statusClasses =
                  item.status === 'Approved'
                    ? 'border-emerald-600 text-emerald-700 bg-emerald-50'
                    : item.status === 'Rejected'
                    ? 'border-red-600 text-red-700 bg-red-50'
                    : 'border-amber-600 text-amber-700 bg-amber-50';
                return (
                  <div
                    key={item.role}
                    className="border border-slate-200 bg-slate-50 px-3 py-2.5 flex flex-col gap-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900">
                        {item.role}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-[11px] font-semibold border ${statusClasses}`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Updated: {item.ts}
                    </p>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      )}

      {/* ===================================================================== */}
      {/* SUCCESS MODAL */}
      {/* ===================================================================== */}
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />

      {/* ===================================================================== */}
      {/* ANIMATIONS (SUBTLE) */}
      {/* ===================================================================== */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default StudentDashboard;