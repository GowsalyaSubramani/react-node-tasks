import React from 'react';
import { ToastProvider } from './components/ToastContext';
import NotificationExample from './examples/NotificationExample'; // Ensure the import is correct

const App = () => {
  return (
    <ToastProvider>
      <div className="app-container">
        <header className="app-header">
          <h1>Notification System</h1>
          <p>Simulate API calls and display different types of notifications</p>
        </header>
        <main className="app-content">
          <NotificationExample />
        </main>
      </div>
    </ToastProvider>
  );
};

export default App;
