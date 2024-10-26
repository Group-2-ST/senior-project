// src/components/Admin/Admin.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './AdminSidebar';
import AdminUserManagement from './AdminUserManagement';
import Dashboard from './AdminDashboard';
import InventorySettings from './AdminInventorySettings';
import '../../styles/Admin.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<AdminUserManagement />} />
          <Route path="inventory-settings" element={<InventorySettings />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
