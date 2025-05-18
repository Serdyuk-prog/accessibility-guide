import React, { useEffect } from 'react';
import './DialogModal.css';
import { createPortal } from 'react-dom';
import { Button } from '@/shared/ui/Button/Button';

interface IDialogModalProps {
  ref: React.RefObject<HTMLDialogElement | null>;
  header: string;
  content: React.ReactNode;
  buttonText?: string;
  onCancel?: () => void;
  cancelButtonText?: string;
  onAction?: () => void;
}

const DialogModal = (props: IDialogModalProps) => {
  const {
    ref,
    header,
    content,
    buttonText,
    onCancel,
    cancelButtonText,
    onAction,
  } = props;

  const handleAction = () => {
    onAction?.();
    ref?.current?.close();
  };

  const handleCancel = () => {
    onCancel?.();
    ref?.current?.close();
  };

  useEffect(() => {
    ref?.current?.addEventListener('click', function (event) {
      const rect = ref?.current?.getBoundingClientRect();
      if (!rect) return;
      const isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        ref?.current?.close();
      }
    });
  }, [ref]);

  return createPortal(
    <dialog ref={ref} className="dialog-modal" aria-labelledby="heading">
      <span className="block-modal-header">{header}</span>
      {content}
      <div className="block-modal-actions">
        {buttonText && (
          <Button onClick={handleAction}>{buttonText}</Button>
        )}
        {cancelButtonText && (
          <Button type="secondary" onClick={handleCancel}>
            {cancelButtonText}
          </Button>
        )}
      </div>
    </dialog>,
    document.body
  );
};

export default DialogModal;
