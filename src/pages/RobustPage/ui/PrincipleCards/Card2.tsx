import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import DialogModal from '@/shared/modals/DialogModal/DialogModal';
import { CodeBlock } from '@/shared/ui/CodeBlock/CodeBlock';
import { useState, useRef } from 'react';

const CardModal = () => {
  return (
    <div>
      <ol>
        <li>
          <b>Тестирование инструментами, например:</b>
          <ul>
            <li>NVDA (Windows) + Firefox</li>
            <li>VoiceOver (Mac/iOS) + Safa</li>
            <li>JAWS (для сложных случаев)</li>
          </ul>
          <br />
        </li>

        <li>
          <b>Проверка дерева доступности:</b>
          <ul>
            <li>Chrome DevTools {'->'} вкладка "Accessibility"</li>
            <li>
              Проверяйте:
              <ul>
                <li>Роли элементов</li>
                <li>Имена и описания</li>
                <li>Состояния (disabled/checked)</li>
              </ul>
            </li>
          </ul>
          <br />
        </li>

        <li>
          <b>ARIA-атрибуты:</b>
          <CodeBlock>
            {'<!-- Пример для кастомного checkbox -->'} <br />
            {'<div role="checkbox" aria-checked="false" tabindex="0">'} <br />
            &nbsp;&nbsp;{'Получать новости'} <br />
            {'</div>'} <br />
          </CodeBlock>
          <br />
          <p>Правила:</p>
          <ul>
            <li>
              {'Используйте нативные теги (<button>, <input>) когда возможно'}
            </li>
            <li>Добавляйте ARIA только для кастомных виджетов</li>
            <li>
              {'Не дублируйте семантику (<button role="button"> избыточно)'}
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

const CardContent = () => {
  return (
    <>
      <p>Критически важно для:</p>
      <ul>
        <li>Пользователей скринридеров</li>
        <li>Людей, использующих альтернативные устройства ввода</li>
        <li>Специальных браузерных расширений</li>
      </ul>
    </>
  );
};

export const Card2 = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <PrincipleCard
        header="Совместимость с вспомогательными технологиями"
        icon="puzzle-piece"
        content={<CardContent />}
        buttonText="Как обеспечить совместимость?"
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
