import React from 'react';

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  margin: '20px 0',
  fontSize: '16px',
  textAlign: 'left'
};

const thStyle = {
  backgroundColor: '#f4f4f4',
  padding: '10px',
  borderBottom: '2px solid #ddd'
};

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd'
};

const buttonStyle = {
  padding: '5px 10px',
  margin: '2px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: '#007bff',
  color: 'white'
};

const DataTable = ({ columns, data, actions }) => (
  <table style={tableStyle}>
    <thead>
      <tr>
        {columns.map(col => (
          <th key={col.key} style={thStyle}>{col.label}</th>
        ))}
        <th style={thStyle}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map(col => (
            <td key={col.key} style={tdStyle}>
              {col.render ? col.render(row[col.key]) : row[col.key]}
            </td>
          ))}
          <td style={tdStyle}>
            {actions.map((action, actionIndex) => (
              <button
                key={actionIndex}
                style={buttonStyle}
                onClick={() => action.onClick(row)}
              >
                {action.label}
              </button>
            ))}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;
