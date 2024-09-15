import React from 'react';
import './Toast.css';

const Toast = ({ message, type }) => {
  const getToastStyle = () => {
    switch (type) {
      case 'success':
        return 'toast-success';
      case 'error':
        return 'toast-error';
      case 'warning':
        return 'toast-warning';
      case 'info':
        return 'toast-info';
      default:
        return 'toast-info'; // Default to 'info' if type is unknown
    }
  };

  return (
    <div className={`toast ${getToastStyle()}`}>
      {message}
    </div>
  );
};

export default Toast;
