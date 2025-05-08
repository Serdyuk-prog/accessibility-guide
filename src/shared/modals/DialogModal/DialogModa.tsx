import React, { useEffect } from 'react';
import './DialogModal.css';
import { createPortal } from 'react-dom';

interface IDialogModalProps {
  ref: React.RefObject<HTMLDialogElement | null>;
}

const DialogModal = (props: IDialogModalProps) => {
  const { ref } = props;

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
    <dialog
      ref={ref}
      className="dialog-modal"
      aria-labelledby="heading"
    >
      <h2 id="heading">Закрой меня! 🙏</h2>
      <p>Результат этих кнопок одинаковый.</p>

      <button type="button" onClick={() => ref?.current?.close()}>
        Закрыть с помощью JavaScript
      </button>
    </dialog>,
    document.body
  );
};

export default DialogModal;
