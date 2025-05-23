import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import DialogModal from '@/shared/modals/DialogModal/DialogModal';
import { useRef } from 'react';
import { MdOutlineWbSunny } from 'react-icons/md';

const CardModal = () => {
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

const CardContent = () => {
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

export const Card2 = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <PrincipleCard
        header="Предсказуемость интерфейса"
        icon="sun"
        iconElement={<MdOutlineWbSunny size={50} color="#E67E58" />}
        content={<CardContent />}
        buttonText="Что проверять?"
        onButtonClick={() => modalRef.current?.showModal()}
      />
     <DialogModal
        ref={modalRef}
        header="Что проверять?"
        content={<CardModal />}
        buttonText="Хорошо"
      />
    </>
  );
};
