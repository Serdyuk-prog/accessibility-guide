import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import { CodeBlock } from '@/shared/ui/CodeBlock/CodeBlock';
import { useRef } from 'react';
import { BsTag } from 'react-icons/bs';
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
        iconElement={<BsTag size={50} color="#EE8EAC" />}
        content={<CardContent />}
      />
    </>
  );
};
