import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import { useRef } from 'react';
import { IoCloseCircle } from 'react-icons/io5';
const CardContent = () => {
  return (
    <>
      <ul>
        <li>Закрытие по Esc</li>
        <li>Закрытие по клику вне модального окна</li>
        <li>По клику на крестик</li>
      </ul>
    </>
  );
};
export const Card4 = () => {
  return (
    <>
      <PrincipleCard
        header="Закрытие модального окна"
        icon="see-no-evil-monkey"
        iconElement={<IoCloseCircle size={50} color="#E67E58" />}
        content={<CardContent />}
      />
    </>
  );
};
