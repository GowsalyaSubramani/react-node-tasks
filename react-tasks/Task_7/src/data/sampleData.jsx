import React from 'react';

export const columns = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'email', label: 'Email' },
  { key: 'address', label: 'Address', render: (value) => <i>{value}</i> }
];

export const data = [
  { name: 'John Doe', age: 28, email: 'john@example.com', address: '123 Main St' },
  { name: 'Jane Smith', age: 34, email: 'jane@example.com', address: '456 Oak St' },
  // More data
];

export const actions = [
  { label: 'Edit', onClick: (row) => alert(`Edit ${row.name}`) },
  { label: 'Delete', onClick: (row) => alert(`Delete ${row.name}`) }
];

export const expandable = [
  <div>Additional details for John Doe</div>,
  <div>Additional details for Jane Smith</div>,
  // More details
];
