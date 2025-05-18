import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import { CodeBlock } from '@/shared/ui/CodeBlock/CodeBlock';
import { useRef } from 'react';
const CardContent = () => {
  return (
    <>
      <ul>
        <li>
          Обязательные атрибуты:
          <br />
          <code>
            role="dialog" <br />
            aria-modal="true" <br />
            aria-labelledby="id-заголовка" <br />
          </code>
          <br />
        </li>
        <li>
          Для alert-окон: <code>role="alertdialog"</code>
        </li>
      </ul>
    </>
  );
};
export const Card2 = () => {
  return (
    <>
      <PrincipleCard
        header="Семантика и ARIA"
        icon="label"
        content={<CardContent />}
      />
    </>
  );
};
