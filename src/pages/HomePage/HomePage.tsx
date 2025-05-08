import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import DialogModal from '@/shared/modals/DialogModal/DialogModa';
import { useRef, useState } from 'react';

export const HomePage = () => {
  const [showBlockModal, setShowBlockModal] = useState(false);
  const showModalRef = useRef<HTMLButtonElement>(null);
  // const [showDialogModal, setShowDialogModal] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const toggleBlockModal = () => {
    setShowBlockModal((state) => !state);
    if (showBlockModal) {
      showModalRef.current?.focus()
    }
  };

  return (
    <>
      <div>
        <h1>HomePage</h1>
        <button ref={showModalRef} onClick={(e) => toggleBlockModal(e)}>Show BlockModal</button>
        <button onClick={() => modalRef.current?.showModal()}>
          Show DialogModal
        </button>
        {Array.from({ length: 10 }, (_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            voluptatibus delectus libero a perferendis ipsam commodi? Facilis
            iusto quaerat ipsum asperiores eum, ut quae molestiae illum nesciunt
            repellendus sint veniam?
          </p>
        ))}
      </div>
      <br />
      <br />
      <br />

      <BlockModal show={showBlockModal} onAction={toggleBlockModal} />
      <DialogModal ref={modalRef} />
    </>
  );
};
