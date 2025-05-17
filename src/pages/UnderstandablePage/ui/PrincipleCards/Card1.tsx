import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import { useState, useRef } from 'react';
import { CodeBlock } from '@/shared/ui/CodeBlock/CodeBlock';

const PrincipleCard1Modal = () => {
  return (
    <div>
      <ul>
        <li>Используются ли короткие предложения (15-20 слов максимум)</li>
        <li>Разбит ли текст на абзацы по 3-4 предложения</li>
        <li>Объясняются ли специальные термины и аббревиатуры</li>
        <li>Соответствует ли язык уровню 7-9 класса</li>
      </ul>
      <br />
      <i>Пример улучшения:</i>
      <p>
        Было: <i>"Инициализируйте процесс аутентификации"</i>
      </p>
      <p>
        Стало: <i>"Войдите в систему, введя логин и пароль"</i>
      </p>
    </div>
  );
};

const CardContent = () => {
  return (
    <>
      <p>
        Контент должен быть написан максимально простым и ясным языком. Это
        особенно важно для:
      </p>
      <ul>
        <li>Людей с когнитивными нарушениями</li>
        <li>Пользователей, для которых язык сайта не родной</li>
        <li>Посетителей с низким уровнем образования</li>
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
        header="Читаемость контента"
        icon="open-book"
        content={<CardContent />}
        buttonText="Что проверять?"
        onButtonClick={toggleBlockModal}
        buttonRef={showModalRef as React.RefObject<HTMLButtonElement>}
      />
      <BlockModal
        header="Что проверять?"
        content={<PrincipleCard1Modal />}
        buttonText="Хорошо"
        show={showBlockModal}
        onAction={toggleBlockModal}
        onCancel={toggleBlockModal}
      />
    </>
  );
};
