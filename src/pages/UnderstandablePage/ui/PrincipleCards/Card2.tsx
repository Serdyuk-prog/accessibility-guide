import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import { useState, useRef } from 'react';

const ContentMultimediaCard = () => {
  return (
    <>
      <p>
        Пользователи должны понимать, что произойдёт при любом действии. Это
        включает:
      </p>
      <ul>
        <li>Последовательное расположение элементов</li>
        <li>Одинаковую реакцию на одинаковые действия</li>
        <li>Отсутствие неожиданных изменений контекста</li>
      </ul>
    </>
  );
};

const PrincipleCardModal = () => {
  return (
    <div>
      <ul>
        <li>Сохраняется ли структура навигации на всех страницах</li>
        <li>Одинаково ли работают одинаковые элементы (например, кнопки)</li>
        <li>Нужно ли переучиваться при переходе между разделами</li>
        <li>Предупреждаются ли пользователи о важных изменениях</li>
      </ul>
      <br />
      <i>Пример улучшения:</i>
      <p>
        Было: <i>Открытие PDF в новом окне без предупреждения</i>
      </p>
      <p>
        Стало: <i>"Документ откроется в новом окне [PDF, 2MB]"</i>
      </p>
    </div>
  );
};

export const Card2 = () => {
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
        header="Предсказуемость интерфейса"
        icon="sun"
        content={<ContentMultimediaCard />}
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
