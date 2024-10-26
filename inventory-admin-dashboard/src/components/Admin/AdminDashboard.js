// src/components/Admin/AdminDashboard.js
import React from 'react';
import AdminSidebar from './AdminSidebar';
import '../../styles/Admin.css';

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="dashboard-content">
        <h1>Admin Dashboard</h1>
        <div className="stats-container">
          <div className="stat-box">
            <h2>Total Users</h2>
            <p>120</p>
          </div>
          <div className="stat-box">
            <h2>Active Inventory Items</h2>
            <p>50</p>
          </div>
          <div className="stat-box">
            <h2>Pending Requests</h2>
            <p>5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
