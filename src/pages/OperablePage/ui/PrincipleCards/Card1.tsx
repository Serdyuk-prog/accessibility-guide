import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import { useState, useRef } from 'react';
import { CodeBlock } from '@/shared/ui/CodeBlock/CodeBlock';

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
    </div>
  );
};

const CardContent = () => {
  return (
    <>
      <p>
        Любой элемент интерфейса должен быть доступен с клавиатуры. Это
        критически важно для:
      </p>
      <ul>
        <li>Пользователей с двигательными нарушениями</li>
        <li>Людей, предпочитающих клавиатуру мыши</li>
        <li>Специалистов, работающих с формами</li>
      </ul>
    </>
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
        header="Клавиатурная навигация"
        icon="keyboard"
        content={<CardContent />}
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
