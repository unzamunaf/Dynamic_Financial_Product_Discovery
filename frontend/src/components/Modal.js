import React from 'react';

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.3)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const modalStyle = {
  background: '#fff',
  borderRadius: 10,
  padding: 32,
  minWidth: 350,
  maxWidth: 700,
  boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
  position: 'relative'
};

export default function Modal({ children, onClose }) {
  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer' }}
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
