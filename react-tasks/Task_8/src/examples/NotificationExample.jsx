import React, { useState } from 'react';
import { useToast } from '../components/ToastContext';

const NotificationExample = () => {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);

  const simulateApiCall = (type) => {
    setLoading(true);
    addToast('Fetching data...', 'info'); // Info notification for ongoing request

    setTimeout(() => {
      setLoading(false);
      switch (type) {
        case 'success':
          addToast('Data fetched successfully!', 'success', 5000); // Success lasts 5 seconds
          break;
        case 'error':
          addToast('Failed to fetch data. Try again!', 'error');
          break;
        case 'warning':
          addToast('Data fetched with warnings.', 'warning');
          break;
        default:
          addToast('Unknown response type!', 'error');
      }
    }, 2000);
  };

  return (
    <div className="notification-example">
      <h2>Real-time Notification Example</h2>
      <button onClick={() => simulateApiCall('success')} disabled={loading}>
        Simulate Success API Call
      </button>
      <button onClick={() => simulateApiCall('error')} disabled={loading}>
        Simulate Error API Call
      </button>
      <button onClick={() => simulateApiCall('warning')} disabled={loading}>
        Simulate Warning API Call
      </button>
    </div>
  );
};

export default NotificationExample;  // Ensure this is a default export
