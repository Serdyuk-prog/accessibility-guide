import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import { CodeBlock } from '@/shared/ui/CodeBlock/CodeBlock';
import { useState, useRef } from 'react';

const ContentMultimediaCard = () => {
  return (
    <>
      <p>
        Интерфейс не должен ограничивать пользователей по времени там, где это
        не обусловлено технической необходимостью. Особенно важно для:
      </p>
      <ul>
        <li>Людей с когнитивными нарушениями</li>
        <li>Пользователей, осваивающих интерфейс</li>
        <li>Ситуаций, когда ввод данных требует дополнительного времени</li>
      </ul>
    </>
  );
};

const PrincipleCardModal = () => {
  return (
    <div>
      <ol>
        <li>
          <b>Формы:</b>
          <ul>
            <li>
              Минимум 20 минут неактивности перед автосохранением/закрытием
            </li>
            <li>Возможность продлить сессию</li>
          </ul>
          <br />
        </li>
        <li>
          <b>Анимации/карусели:</b>
          <ul>
            <li>Пауза/перезапуск для любого движущегося контента</li>
            <li>Нет автоскролла без управления пользователя</li>
          </ul>
          <br />
        </li>
        <li>
          <b>Таймеры:</b>
          <ul>
            <li>Предупреждение за 20 секунд до окончания</li>
            <li>Простое восстановление данных</li>
          </ul>
        </li>
      </ol>
      <br />
      <p>Пример реализации:</p>
      <CodeBlock>
        {'// Таймер сессии'} <br />
        {'let timeout;'} <br />
        {'function resetTimer() {'} <br />
        &nbsp;&nbsp;{'clearTimeout(timeout);'} <br />
        &nbsp;&nbsp;{
          'timeout = setTimeout(warnUser, 1140000); // 19 минут'
        }{' '}
        <br />
        {'}'} <br />
        <br />
        {'function warnUser() {'} <br />
        &nbsp;&nbsp;{'showModal("Сессия скоро завершится. Продлить?");'} <br />
        &nbsp;&nbsp;{'// +30 секунд при подтверждении'} <br />
        {'}'} <br />
      </CodeBlock>
      <br />
      <p>Чек-лист:</p>
      <ul>
        <li>Нет ограничений времени, кроме технической необходимости</li>
        <li>Возможность отключить/настроить таймеры</li>
        <li>Данные не теряются при таймауте</li>
      </ul>
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
        header="Отсутствие временных ограничений"
        icon="stopwatch"
        content={<ContentMultimediaCard />}
        buttonText="Требования"
        onButtonClick={toggleBlockModal}
        buttonRef={showModalRef as React.RefObject<HTMLButtonElement>}
      />
      <BlockModal
        header="Требования ко времени:"
        content={<PrincipleCardModal />}
        buttonText="Хорошо"
        show={showBlockModal}
        onAction={toggleBlockModal}
        onCancel={toggleBlockModal}
      />
    </>
  );
};
