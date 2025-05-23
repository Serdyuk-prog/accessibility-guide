import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import { useRef } from 'react';
import DialogModal from '@/shared/modals/DialogModal/DialogModal';
import { PiBookOpenText } from 'react-icons/pi';

const CardModal = () => {
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
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <PrincipleCard
        header="Читаемость контента"
        icon="open-book"
        iconElement={<PiBookOpenText size={50} color="#3767CB" />} 
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
