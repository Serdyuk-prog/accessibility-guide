import React from 'react';

interface IDialogModalProps {
  ref: React.RefObject<HTMLDialogElement> | null;
}

const DialogModal = (props: IDialogModalProps) => {
  const { ref } = props;

  return (
    <dialog ref={ref} id="closeMe" aria-labelledby="heading">
      <h2 id="heading">Закрой меня! 🙏</h2>
      <p>Результат этих кнопок одинаковый.</p>

      <button type="button" onClick={() => ref?.current?.close()}>
        Закрыть с помощью JavaScript
      </button>
    </dialog>
  );
};

export default DialogModal;
