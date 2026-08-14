import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin-login');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Navbar for Admin */}
      <header className="bg-slate-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Logout
        </button>
      </header>

      {/* Main Dashboard Content */}
      <main className="flex-grow p-8 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-semibold text-slate-800 mb-8">Welcome back, Admin!</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col">
            <span className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-2">Total Users</span>
            <span className="text-4xl font-bold text-slate-800">1,248</span>
          </div>

          {/* Stats Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col">
            <span className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-2">Active Alerts</span>
            <span className="text-4xl font-bold text-red-600">3</span>
          </div>

          {/* Stats Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col">
            <span className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-2">System Status</span>
            <span className="text-4xl font-bold text-green-600">Online</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Recent Activity</h3>
          <div className="text-slate-600">
            <p className="mb-2">• User <span className="font-semibold">john_doe</span> registered.</p>
            <p className="mb-2">• False alarm detected in Region A and cleared.</p>
            <p>• System maintenance scheduled for tomorrow at 2:00 AM.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
