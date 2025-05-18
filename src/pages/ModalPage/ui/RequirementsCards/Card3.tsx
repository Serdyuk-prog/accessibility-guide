import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import { useRef } from 'react';
const CardContent = () => {
  return (
    <>
      <ul>
        <li>Контраст между окном и фоном ≥ 3:1</li>
        <li>Фон должен блокировать взаимодействие с основным контентом</li>
        <li>Основной скролл страницы должен быть недоступен</li>
      </ul>
    </>
  );
};
export const Card3 = () => {
  return (
    <>
      <PrincipleCard
        header="Затемнение фона"
        icon="new-moon"
        content={<CardContent />}
      />
    </>
  );
};
