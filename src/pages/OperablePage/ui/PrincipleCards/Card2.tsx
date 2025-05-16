import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import { useState, useRef } from 'react';

const ContentMultimediaCard = () => {
  return (
    <>
      <p>
        Интерфейс не должен ограничивать пользователей по времени там, где это не обусловлено технической необходимостью. Особенно важно для:
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
      <p>
        <b>Есть ли в видео речь или другой звук,</b> необходимый для понимания
        содержания?
      </p>
      <br />
      <ul>
        <li>
          Если да,
          <ul>
            <li>Добавить субтитры (A)</li>
            <li>Добавить транскрипт (AA)</li>
            <li>Добавить перевод на язык жестов (AAA)</li>
          </ul>
        </li>
        <li>
          Если нет, <b>сообщите пользователям</b>.
        </li>
      </ul>
      <br />
      <p>
        <b>Есть ли в видео визуальная информация</b>, необходимая для понимания
        содержания?
      </p>
      <br />
      <ul>
        <li>
          Если да,
          <ul>
            <li>
              Аудиоописание визуальной информации или описательная расшифровка
              (A)
            </li>
            <li>Аудиоописание визуальной информации (AA)</li>
            <li>
              Описательная расшифровка (AAA) (Если у вас есть описательная
              расшифровка, вам не нужна дополнительная расшифровка только
              аудиоинформации из предыдущего вопроса.)
            </li>
          </ul>
        </li>
        <li>
          Если нет, <b>сообщите пользователям</b>.
        </li>
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
        buttonText="Чеклист для видео"
        onButtonClick={toggleBlockModal}
        buttonRef={showModalRef as React.RefObject<HTMLButtonElement>}
      />
      <BlockModal
        header="Чеклист доступности для предзаписанного видео"
        content={<PrincipleCardModal />}
        buttonText="Хорошо"
        show={showBlockModal}
        onAction={toggleBlockModal}
        onCancel={toggleBlockModal}
      />
    </>
  );
};
