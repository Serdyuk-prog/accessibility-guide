import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import { CodeBlock } from '@/shared/ui/CodeBlock/CodeBlock';
import { useState, useRef } from 'react';

const ContentMultimediaCard = () => {
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

const PrincipleCardModal = () => {
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

export const Card2 = () => {
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
        header="Совместимость с вспомогательными технологиями"
        icon="puzzle-piece"
        content={<ContentMultimediaCard />}
        buttonText="Как обеспечить совместимость?"
        onButtonClick={toggleBlockModal}
        buttonRef={showModalRef as React.RefObject<HTMLButtonElement>}
      />
      <BlockModal
        header="Как обеспечить совместимость?"
        content={<PrincipleCardModal />}
        buttonText="Хорошо"
        show={showBlockModal}
        onAction={toggleBlockModal}
        onCancel={toggleBlockModal}
      />
    </>
  );
};
