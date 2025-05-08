import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const modalStyles: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '300px',
  padding: '20px',
  backgroundColor: 'white',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  zIndex: 1000,
};

const overlayStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(9, 9, 9, 0.4)',
  zIndex: 999,
};

interface IBlockModalProps {
  show: boolean;
  onAction: () => void;
  onCancel?: () => void;
}

const BlockModal = ({ show, onAction, onCancel }: IBlockModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = () => {
    if (onCancel) {
      onCancel();
    } else {
      onAction();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onAction();
    }
  };

  const handleFocusTrap = (event: KeyboardEvent) => {
    if (event.key === 'Tab' && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keydown', handleFocusTrap);
      modalRef.current?.focus();
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', handleFocusTrap);
      document.body.style.overflow = '';
    };
  }, [show, onAction]);

  if (!show) return null;
  return createPortal(
    <div style={overlayStyles} onClick={handleOverlayClick}>
      <div
        style={modalStyles}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex={-1}
      >
        <h1>I'm a Modal!</h1>
        <button onClick={onAction}>Hide Me</button>
        <button onClick={onAction}>Hide Me</button>
        {onCancel && <button onClick={onCancel}>Cancel</button>}
      </div>
    </div>,
    document.body
  );
};

export default BlockModal;

