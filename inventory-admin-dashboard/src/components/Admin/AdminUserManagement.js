// src/components/Admin/AdminUserManagement.js
import React, { useState } from 'react';
import '../../styles/UserManagement.css';

const AdminUserManagement = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890', address: '123 Main St', role: 'Procurement Officer' },
        { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', phone: '987-654-3210', address: '456 Oak Ave', role: 'Inventory Manager' },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState({ id: null, name: '', email: '', phone: '', address: '', role: '' });

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    // Handle add/edit user form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            setUsers(users.map((user) => (user.id === currentUser.id ? currentUser : user)));
        } else {
            setUsers([...users, { ...currentUser, id: users.length + 1 }]);
        }
        setCurrentUser({ id: null, name: '', email: '', phone: '', address: '', role: '' });
        setShowModal(false);
        setIsEditing(false);
    };

    // Function to handle edit button click
    const handleEditClick = (user) => {
        setCurrentUser(user);
        setIsEditing(true);
        setShowModal(true);
    };

    return (
        <div className="user-management-container">
            <h2 style={{ color: '#4caf50' }}>User Management</h2> {/* Title outside the board */}

            <div className="user-management-board">
                <button className="add-user-btn" onClick={() => { setCurrentUser({ id: null, name: '', email: '', phone: '', address: '', role: '' }); setIsEditing(false); setShowModal(true); }}>
                    Add User
                </button>

                {/* User Table */}
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Actions</th> {/* New column for actions */}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.address}</td>
                                <td>
                                    <button onClick={() => handleEditClick(user)}>Edit</button> {/* Edit button */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Modal for Adding/Editing User */}
                {showModal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h3>{isEditing ? 'Edit User' : 'Add New User'}</h3>
                            <form onSubmit={handleSubmit}>
                                <label>
                                    Name:
                                    <input type="text" name="name" value={currentUser.name} onChange={handleInputChange} required />
                                </label>
                                <label>
                                    Email:
                                    <input type="email" name="email" value={currentUser.email} onChange={handleInputChange} required />
                                </label>
                                <label>
                                    Phone:
                                    <input type="text" name="phone" value={currentUser.phone} onChange={handleInputChange} required />
                                </label>
                                <label>
                                    Address:
                                    <input type="text" name="address" value={currentUser.address} onChange={handleInputChange} required />
                                </label>
                                <label>
                                    Role:
                                    <select name="role" value={currentUser.role} onChange={handleInputChange} required>
                                        <option value="">Select Role</option>
                                        <option value="Procurement Officer">Procurement Officer</option>
                                        <option value="Inventory Manager">Inventory Manager</option>
                                        <option value="Supplier">Supplier</option>
                                        <option value="Warehouse Staff">Warehouse Staff</option>
                                        <option value="Quality Inspection Officer">Quality Inspection Officer</option>
                                        <option value="Finance Officer">Finance Officer</option>
                                    </select>
                                </label>
                                <button type="submit">{isEditing ? 'Update User' : 'Add User'}</button>
                                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminUserManagement;
