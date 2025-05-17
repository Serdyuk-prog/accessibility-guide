import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import { TextLink } from '@/shared/ui/TextLink/TextLink';
import { useRef, useState } from 'react';

const PrincipleCardModal = () => {
  return (
    <div>
      <ul>
        <li>Видны ли обязательные поля до отправки формы</li>
        <li>Конкретны ли сообщения об ошибках</li>
        <li>Сохраняются ли введённые данные при ошибке</li>
        <li>Есть ли подсказки для сложных полей</li>
      </ul>
      <br />
      <i>Пример улучшения:</i>
      <p>
        Было: <i>"Неверные данные"</i>
      </p>
      <p>
        Стало:{' '}
        <i>"Пароль должен содержать не менее 8 символов, включая цифру"</i>
      </p>
    </div>
  );
};

const CardContent = () => {
  return (
    <>
      <p>Когда пользователи ошибаются, система должна:</p>
      <ul>
        <li>Чётко указывать на ошибку</li>
        <li>Объяснять, что именно не так</li>
        <li>Предлагать конкретные способы исправления</li>
      </ul>
    </>
  );
};
export const Card3 = () => {
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
        header="Помощь при ошибках"
        icon="ring-buoy"
        content={<CardContent />}
        buttonText="Что проверять?"
        onButtonClick={toggleBlockModal}
        buttonRef={showModalRef as React.RefObject<HTMLButtonElement>}
      />
      <BlockModal
        header="Что проверять?"
        content={<PrincipleCardModal />}
        buttonText="Хорошо"
        show={showBlockModal}
        onAction={toggleBlockModal}
        onCancel={toggleBlockModal}
      />
    </>
  );
};
