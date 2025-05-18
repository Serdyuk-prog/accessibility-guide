import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import { useRef } from 'react';
const CardContent = () => {
  return (
    <>
      <ul>
        <li>При открытии фокус автоматически перемещается в окно</li>
        <li>Навигация только внутри окна (ловушка фокуса)</li>
        <li>Возврат фокуса на исходный элемент при закрытии</li>
      </ul>
    </>
  );
};
export const Card1 = () => {
  return (
    <>
      <PrincipleCard
        header="Управление фокусом"
        icon="direct-hit"
        content={<CardContent />}
      />
    </>
  );
};
