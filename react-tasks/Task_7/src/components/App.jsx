import React, { useState } from 'react';
import DataTable from './DataTable';
import { columns } from '../data/sampleData.jsx'; // Ensure this file provides correct columns
import './App.css'; // Import the CSS file

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com', address: '456 Oak St' },
  ]);
  const [editingRow, setEditingRow] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEdit = (row) => {
    setEditingRow(row.id);
    setFormData({ ...row });
  };

  const handleSave = () => {
    const newData = data.map(item =>
      item.id === editingRow ? formData : item
    );
    setData(newData);
    setEditingRow(null);
    setFormData({});
  };

  const handleDelete = (row) => {
    const newData = data.filter(item => item.id !== row.id);
    setData(newData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const actionHandlers = [
    { label: 'Edit', onClick: handleEdit },
    { label: 'Delete', onClick: handleDelete }
  ];

  return (
    <div className="container">
      <h1>Data Table</h1>
      <div className="table-container">
        <DataTable columns={columns} data={data} actions={actionHandlers} />
      </div>
      {editingRow && (
        <div className="edit-form-container">
          <h2>Edit Row</h2>
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleInputChange}
            placeholder="Name"
            className="edit-form-input"
          />
          <input
            type="number"
            name="age"
            value={formData.age || ''}
            onChange={handleInputChange}
            placeholder="Age"
            className="edit-form-input"
          />
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleInputChange}
            placeholder="Email"
            className="edit-form-input"
          />
          <input
            type="text"
            name="address"
            value={formData.address || ''}
            onChange={handleInputChange}
            placeholder="Address"
            className="edit-form-input"
          />
          <button onClick={handleSave} className="edit-form-button save-button">Save</button>
          <button onClick={() => setEditingRow(null)} className="edit-form-button cancel-button">Cancel</button>
        </div>
      )}
    </div>
  );
};

export default App;
