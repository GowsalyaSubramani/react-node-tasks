import React, { useState } from 'react';
import Modal from './Modal';

const ConfirmationDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    alert('Action confirmed!');
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Confirmation Dialog</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="small" position="center">
        <h2>Are you sure you want to proceed?</h2>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={handleConfirm} style={{ marginRight: '10px' }}>Yes</button>
          <button onClick={() => setIsOpen(false)}>No</button>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmationDialog;
