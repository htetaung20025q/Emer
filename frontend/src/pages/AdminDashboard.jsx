import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';

const getUrgencyBadge = (level) => {
  switch (level) {
    case 'အရေးပေါ်':
    case 'Critical':
      return 'bg-red-100 text-red-700 border-red-200';
    case 'အရေးကြီး':
    case 'Urgent':
      return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    case 'သာမန်':
    case 'Normal':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [volunteers, setVolunteers] = useState([]);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Custom Delete Modal State
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({ id: null, type: null });
  const [isDeleting, setIsDeleting] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:8000/api/admin/logout', {
        method: 'POST',
        credentials: 'include'
      });
    } catch (err) {
      console.error('Logout error:', err);
    }
    navigate('/admin-login');
  };

  const handleDownloadExcel = (data, filename) => {
    if (!data || data.length === 0) {
      alert('No data available to download.');
      return;
    }
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
    XLSX.writeFile(workbook, filename);
  };

  const handleDeleteVolunteer = (id) => {
    setItemToDelete({ id, type: 'volunteer' });
    setIsDeleteModalOpen(true);
  };

  const handleDeletePatient = (id) => {
    setItemToDelete({ id, type: 'patient' });
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    const { id, type } = itemToDelete;
    if (!id || !type) return;

    setIsDeleting(true);
    try {
      const endpoint = type === 'volunteer' 
        ? `http://localhost:8000/api/admin/volunteers/${id}`
        : `http://localhost:8000/api/admin/patients/${id}`;
        
      const response = await fetch(endpoint, {
        method: 'DELETE',
        credentials: 'include'
      });
      
      if (response.ok) {
        if (type === 'volunteer') {
          setVolunteers(prev => prev.filter(v => v.id !== id));
        } else {
          setPatients(prev => prev.filter(p => p.id !== id));
        }
        setIsDeleteModalOpen(false);
        setItemToDelete({ id: null, type: null });
      } else {
        console.error(`Failed to delete ${type}`);
        alert(`Failed to delete ${type}.`);
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
      alert('An error occurred while deleting.');
    } finally {
      setIsDeleting(false);
    }
  };

  const fetchData = async () => {
    try {
      const [volunteersRes, patientsRes] = await Promise.all([
        fetch('http://localhost:8000/api/admin/volunteers', { credentials: 'include' }),
        fetch('http://localhost:8000/api/admin/patients', { credentials: 'include' })
      ]);

      if (volunteersRes.status === 401 || patientsRes.status === 401 || 
          volunteersRes.status === 403 || patientsRes.status === 403) {
        handleLogout();
        return;
      }

      if (!volunteersRes.ok || !patientsRes.ok) {
        throw new Error('Failed to fetch data from the server');
      }

      const volunteersData = await volunteersRes.json();
      const patientsData = await patientsRes.json();

      setVolunteers(volunteersData);
      setPatients(patientsData);
      setError('');
    } catch (err) {
      setError(err.message || 'An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchData();

    // Set up polling interval (every 5 seconds)
    const intervalId = setInterval(fetchData, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans relative">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-50 hover:bg-red-100 text-red-600 font-medium py-2 px-5 rounded-lg border border-red-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
        >
          Logout
        </button>
      </nav>

      {/* Main Dashboard Content */}
      <main className="flex-grow p-6 lg:p-8 w-full max-w-7xl mx-auto space-y-8">
        
        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center justify-between">
            <p>{error}</p>
            <button onClick={() => fetchData()} className="text-sm font-medium hover:underline">Retry</button>
          </div>
        )}

        {/* Loading State */}
        {loading && !error && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600 font-medium">Loading live data...</span>
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            
            {/* Registered Volunteers Section */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-semibold text-gray-800">Registered Volunteers</h2>
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded-full">
                    {volunteers.length} Total
                  </span>
                </div>
                <button
                  onClick={() => handleDownloadExcel(volunteers, 'Registered_Volunteers.xlsx')}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-1.5 px-3 rounded shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  Download Excel
                </button>
              </div>
              <div className="p-0 overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600">
                  <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-medium">Name</th>
                      <th scope="col" className="px-6 py-3 font-medium">Blood Group</th>
                      <th scope="col" className="px-6 py-3 font-medium">Location</th>
                      <th scope="col" className="px-6 py-3 font-medium">Contact</th>
                      <th scope="col" className="px-6 py-3 font-medium">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {volunteers.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                          No volunteers registered yet.
                        </td>
                      </tr>
                    ) : (
                      volunteers.map((volunteer, index) => (
                        <tr key={volunteer.id || index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-900">{volunteer.name}</td>
                          <td className="px-6 py-4">
                            <span className="bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                              {volunteer.blood_group || 'N/A'}
                            </span>
                          </td>
                          <td className="px-6 py-4">{volunteer.address || 'Unknown'}</td>
                          <td className="px-6 py-4 text-gray-500">{volunteer.phone || 'N/A'}</td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => handleDeleteVolunteer(volunteer.id)}
                              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 shadow-sm text-sm"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Emergency Blood Requests Section */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-semibold text-gray-800">Emergency Blood Requests</h2>
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {patients.length} Active
                  </span>
                </div>
                <button
                  onClick={() => handleDownloadExcel(patients, 'Emergency_Blood_Requests.xlsx')}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-1.5 px-3 rounded shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  Download Excel
                </button>
              </div>
              <div className="p-0 overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600">
                  <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-medium">Patient</th>
                      <th scope="col" className="px-6 py-3 font-medium">Needed</th>
                      <th scope="col" className="px-6 py-3 font-medium">URGENCY</th>
                      <th scope="col" className="px-6 py-3 font-medium">Hospital</th>
                      <th scope="col" className="px-6 py-3 font-medium">Contact</th>
                      <th scope="col" className="px-6 py-3 font-medium">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {patients.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                          No active emergency requests.
                        </td>
                      </tr>
                    ) : (
                      patients.map((patient, index) => (
                        <tr key={patient.id || index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-900">{patient.name}</td>
                          <td className="px-6 py-4">
                            <span className="bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                              {patient.need_blood || 'Urgent'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold border inline-block ${getUrgencyBadge(patient.emergency_level)}`}>
                              {patient.emergency_level || 'N/A'}
                            </span>
                          </td>
                          <td className="px-6 py-4">{patient.hospital_name || 'N/A'}</td>
                          <td className="px-6 py-4 text-gray-500">{patient.contact_number || 'N/A'}</td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => handleDeletePatient(patient.id)}
                              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 shadow-sm text-sm"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        )}
      </main>

      {/* Custom Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm px-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-sm animate-in zoom-in-95 duration-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Confirm Deletion</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Are you sure you want to delete this record? This action cannot be undone and will permanently remove it from the database.
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setItemToDelete({ id: null, type: null });
                }}
                disabled={isDeleting}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={isDeleting}
                className={`flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-colors flex justify-center items-center gap-2 ${isDeleting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isDeleting ? (
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
