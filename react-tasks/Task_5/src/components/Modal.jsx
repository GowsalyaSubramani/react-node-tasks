import React, { useEffect, useRef } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children, size = 'medium', position = 'center' }) => {
  const modalRef = useRef(null);

  // Manage focus when modal opens
  useEffect(() => {
    if (isOpen) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null; // Render nothing if modal is closed

  return (
    <div className="modal-backdrop">
      <div
        className={`modal modal-${size} modal-${position}`}
        ref={modalRef}
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
      >
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
