import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import { CodeBlock } from '@/shared/ui/CodeBlock/CodeBlock';
import { TextLink } from '@/shared/ui/TextLink/TextLink';
import { useRef, useState } from 'react';

const PrincipleCardModal = () => {
  return (
    <div>
      <ol>
        <li>
          <b>Логичная структура</b>
          <CodeBlock>
            {'<header>'} <br />
            &nbsp;&nbsp;{'<nav aria-label="Основное">'} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'<ul>'} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'<li><a href="/" aria-current="page">Главная</a></li>'} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'</ul>'} <br />
            &nbsp;&nbsp;{'</nav>'} <br />
            {'</header>'} <br />
            {'<main id="main">'} <br />
            &nbsp;&nbsp;{'<!-- Контент -->'} <br />
            {'</main>'} <br />
          </CodeBlock>
          <br />
        </li>
        <li>
          <b>Помощь в навигации:</b>
          <ul>
            <li>"Пропустить к контенту" (первая ссылка на странице)</li>
            <li>Хлебные крошки</li>
            <li>Чёткие заголовки разделов (h1-h6)</li>
          </ul>
          <br />
        </li>
        <li>
          <b>Индикация:</b>
          <ul>
            <li>Текущее положение в навигации (aria-current)</li>
            <li>Видимый фокус (минимум 3:1 контраст)</li>
            <li>Постоянное расположение ключевых элементов</li>
          </ul>
        </li>
      </ol>
      <br />
      <b>Чек-лист:</b>
      <ul>
        <li>Заголовки отражают структуру (не пропускаются уровни)</li>
        <li>На каждой странице есть h1</li>
        <li>Ссылки имеют уникальные описательные тексты</li>
        <li>Текущая страница выделена в меню</li>
      </ul>
    </div>
  );
};

const CardContent = () => {
  return (
    <>
      <p>
        Чёткая структура и предсказуемая навигация помогают всем пользователям,
        но особенно:
      </p>
      <ul>
        <li>Людям, использующим скринридеры</li>
        <li>Пользователям с когнитивными особенностями</li>
        <li>Тем, кто плохо знаком с вашим интерфейсом</li>
      </ul>
    </>
  );
};
export const Card3 = () => {
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
        header="Логичная структура и заголовки"
        icon="compass"
        content={<CardContent />}
        linkAddress="/home"
        buttonText="Ключевые элементы"
        onButtonClick={toggleBlockModal}
        buttonRef={showModalRef as React.RefObject<HTMLButtonElement>}
      />
      <BlockModal
        header="Ключевые элементы:"
        content={<PrincipleCardModal />}
        buttonText="Хорошо"
        show={showBlockModal}
        onAction={toggleBlockModal}
        onCancel={toggleBlockModal}
      />
    </>
  );
};
