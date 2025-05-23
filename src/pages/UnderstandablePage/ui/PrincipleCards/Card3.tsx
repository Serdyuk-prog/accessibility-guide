import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import DialogModal from '@/shared/modals/DialogModal/DialogModal';
import { useRef, useState } from 'react';
import { IoHelpBuoySharp } from 'react-icons/io5';

const CardModal = () => {
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
  const modalRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <PrincipleCard
        header="Помощь при ошибках"
        icon="ring-buoy"
        iconElement={<IoHelpBuoySharp size={50} color="#EE8EAC" />}
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
