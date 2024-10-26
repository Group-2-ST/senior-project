// src/components/Admin/AdminInventorySettings.js
import React, { useState } from 'react';
import '../../styles/AdminInventorySettings.css'; // Optional: Add styles for the modal

const AdminInventorySettings = () => {
  const [inventory, setInventory] = useState([
    { name: 'Soya Bean', threshold: 100 },
    { name: 'Oil', threshold: 100 },
    { name: 'Film', threshold: 100 },
    { name: 'Seasoning', threshold: 100 },
  ]);

  const [selectedInventory, setSelectedInventory] = useState(null);
  const [newThreshold, setNewThreshold] = useState('');

  const updateThreshold = (name) => {
    setInventory((prevInventory) =>
      prevInventory.map((item) =>
        item.name === name ? { ...item, threshold: newThreshold } : item
      )
    );
    alert(`Inventory threshold updated to ${newThreshold}`);
    setSelectedInventory(null);
  };

  const handleChangeThreshold = (name) => {
    const currentItem = inventory.find((item) => item.name === name);
    setNewThreshold(currentItem.threshold);
    setSelectedInventory(name);
  };

  const handleCloseModal = () => {
    setSelectedInventory(null);
  };

  return (
    <div className="dashboard-content">
      <h2 style={{ color: '#4caf50' }}>Inventory Settings</h2> {/* Title outside the white box */}
      
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Inventory Name</th>
            <th>Current Threshold</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.threshold}</td>
              <td>
                <button onClick={() => handleChangeThreshold(item.name)}>
                  Change Threshold
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedInventory && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Change Threshold for {selectedInventory}</h2>
            <input
              type="number"
              value={newThreshold}
              onChange={(e) => setNewThreshold(e.target.value)}
              placeholder="Enter new threshold"
            />
            <button onClick={() => updateThreshold(selectedInventory)}>Update</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminInventorySettings;
