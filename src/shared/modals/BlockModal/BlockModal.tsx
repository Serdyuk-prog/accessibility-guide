import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './BlockModal.css';
import { Button } from '@/shared/ui/Button/Button';

interface IBlockModalProps {
  show: boolean;
  header: string;
  content: React.ReactNode;
  buttonText: string;
  onCancel: () => void;
  cancelButtonText?: string;
  onAction?: () => void;
}

const BlockModal = ({
  show,
  header,
  content,
  buttonText,
  cancelButtonText,
  onAction,
  onCancel,
}: IBlockModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onCancel();
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
  }, [show]);

  if (!show) return null;
  return createPortal(
    <div className="block-modal-overlay" onClick={handleOverlayClick}>
      <div
        ref={modalRef}
        className="block-modal"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <span className="block-modal-header">{header}</span>
        {content}
        <div className="block-modal-actions">
          {onAction && buttonText && (
            <Button onClick={onAction}>{buttonText}</Button>
          )}
          {cancelButtonText && (
            <Button type="secondary" onClick={onCancel}>
              {cancelButtonText}
            </Button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BlockModal;
