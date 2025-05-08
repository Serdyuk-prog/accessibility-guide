import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './BlockModal.css'

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
    <div className='block-modal-overlay' onClick={handleOverlayClick}>
      <div
        ref={modalRef}
        className='block-modal'
        onClick={(e) => e.stopPropagation()}
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

