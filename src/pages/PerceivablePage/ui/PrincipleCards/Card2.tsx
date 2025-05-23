import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import { useState, useRef } from 'react';
import { PiPopcorn } from 'react-icons/pi';

const ContentMultimediaCard = () => {
  return (
    <>
      <p>
        Важно адаптировать контент для пользователей с нарушениями слуха или
        зрения.
      </p>
      <ul>
        <li>Субтитры для видео.</li>
        <li>Аудиоописание для визуального контента.</li>
        <li>Транскрипты для аудио.</li>
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
        header="Адаптация мультимедиа"
        icon="popcorn"
        iconElement={<PiPopcorn size={50} color="#E67E58" />}
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
