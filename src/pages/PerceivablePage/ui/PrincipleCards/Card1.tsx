import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import { useState, useRef } from 'react';
import { CodeBlock } from '@/shared/ui/CodeBlock/CodeBlock';
import exampleImage from '../../assets/image10.png';
import { BsEyeglasses } from 'react-icons/bs';

const PrincipleCard1Modal = () => {
  return (
    <div>
      <p>
        Альтернативный текст указывается путем использования свойства alt тега{' '}
        {'<img>'}.
      </p>
      <br />
      <CodeBlock>
        {'<img src="/cat.jpg" alt="Рыжий кот сидит на подоконнике" />'}
      </CodeBlock>
      <br />

      <p>
        Мы можем визуально эмитировать то, как воспримет наше изображение
        незрячий пользователь убрав свойство src.
      </p>
      <br />
      <img
        src={exampleImage}
        alt="Сломанная картинка которая отображается через специальную иконку и alt текст"
      />
    </div>
  );
};

export const Card1 = () => {
  const [showBlockModal, setShowBlockModal] = useState(false);
  const showModalRef = useRef<HTMLButtonElement>(null);

  const toggleBlockModal = () => {
    setShowBlockModal((state) => !state);
    if (showBlockModal) {
      showModalRef.current?.focus();
    }
  };

  return (
    <>
      <PrincipleCard
        header="Альтернативный текст для изображений"
        icon="glasses"
        iconElement={<BsEyeglasses size={50} color="#3767CB" />} //E67E58 EE8EAC
        content={
          'Контент должен быть доступен для восприятия разными способами (текст, аудио, альтернативные описания).'
        }
        buttonText="Пример alt текста"
        onButtonClick={toggleBlockModal}
        buttonRef={showModalRef as React.RefObject<HTMLButtonElement>}
      />
      <BlockModal
        header="Как выглядит alt-текст"
        content={<PrincipleCard1Modal />}
        buttonText="Хорошо"
        show={showBlockModal}
        onAction={toggleBlockModal}
        onCancel={toggleBlockModal}
      />
    </>
  );
};
