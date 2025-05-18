import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import { useState, useRef } from 'react';
import { CodeBlock } from '@/shared/ui/CodeBlock/CodeBlock';

const PrincipleCard1Modal = () => {
  return (
    <div>
      <ol>
        <li>
          <b>Полный обход Tab/Shift+Tab</b>
          <p>
            Все интерактивные элементы должны последовательно получать фокус:
          </p>
          <CodeBlock>
            {'<button tabindex="0">Кнопка</button>'} <br />
            {'<a href="#" tabindex="0">Ссылка</a>'} <br />
            {'<div tabindex="0" role="button">Кастомный элемент</div>'} <br />
          </CodeBlock>
          <br />
        </li>
        <li>
          <b>Активация элементов:</b>
          <ul>
            <li>
              Кнопки/ссылки: <b>Enter</b>
            </li>
            <li>
              Чекбоксы/радио: <b>Space</b>
            </li>
            <li>
              Выпадающие списки: <b>Стрелки + Enter</b>
            </li>
          </ul>
          <br />
        </li>
        <li>
          <b>Особые случаи:</b>
          <p>Кастомные виджеты требуют ARIA-ролей:</p>
          <CodeBlock>
            {'<div role="slider" aria-valuenow="50" tabindex="0">'} <br />
            {'<!-- Управление стрелками -->'} <br />
            {'</div>'} <br />
          </CodeBlock>
        </li>
      </ol>
      <br />
      <b>Чек-лист проверки:</b>
      <ul>
        <li>Все элементы доступны через Tab</li>
        <li>Нет "ловушек" фокуса</li>
        <li>Порядок фокуса логичен (сверху вниз, слева направо)</li>
        <li>Состояние фокуса визуально выделено</li>
      </ul>
    </div>
  );
};

const CardContent = () => {
  return (
    <>
      <p>
        Любой элемент интерфейса должен быть доступен с клавиатуры. Это
        критически важно для:
      </p>
      <ul>
        <li>Пользователей с двигательными нарушениями</li>
        <li>Людей, предпочитающих клавиатуру мыши</li>
        <li>Специалистов, работающих с формами</li>
      </ul>
    </>
  );
};

export const Card1 = () => {
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
        header="Клавиатурная навигация"
        icon="keyboard"
        content={<CardContent />}
        buttonText="Как реализовать правильно?"
        onButtonClick={toggleBlockModal}
        buttonRef={showModalRef as React.RefObject<HTMLButtonElement>}
      />
      <BlockModal
        header="Как реализовать правильно:"
        content={<PrincipleCard1Modal />}
        buttonText="Хорошо"
        show={showBlockModal}
        onAction={toggleBlockModal}
        onCancel={toggleBlockModal}
      />
    </>
  );
};
