import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import { useState, useRef } from 'react';
import { CodeBlock } from '@/shared/ui/CodeBlock/CodeBlock';
import { TextLink } from '@/shared/ui/TextLink/TextLink';

const PrincipleCard1Modal = () => {
  return (
    <div>
      <b>
        Необходимо использовать{' '}
        <TextLink href="https://validator.w3.org/" isExternal>
          HTML-валидатор W3C
        </TextLink>
      </b>
      <p>Он обнаруживает </p>
      <ul>
        <li>Незакрытые теги</li>
        <li>Неправильную вложенность</li>
        <li>Устаревшие атрибуты</li>
      </ul>
      <br />
      <b>Важно использовать семантические теги</b>
      <CodeBlock>
        {'<!-- Плохо -->'} <br />
        {'<div class="header">'} <br />
        <br />
        {'<!-- Хорошо -->'} <br />
        {'<header>'} <br />
      </CodeBlock>
      <br />
      <b>А также соблюдать правильную последовательность тегов</b>
      <CodeBlock>
        {'<!DOCTYPE html>'} <br />
        {'<html lang="ru">'} <br />
        {'<head>...</head>'} <br />
        {'<body>'} <br />
        &nbsp;&nbsp;{'<header>...</header>'} <br />
        &nbsp;&nbsp;{'<main>...</main>'} <br />
        &nbsp;&nbsp;{'<footer>...</footer>'} <br />
        {'</body>'} <br />
        {'</html>'} <br />
      </CodeBlock>
    </div>
  );
};

const CardContent = () => {
  return (
    <>
      <p>Почему это важно:</p>
      <ul>
        <li>Обеспечивает корректную работу в разных браузерах</li>
        <li>
          Позволяет правильно интерпретировать контент вспомогательным
          технологиям
        </li>
        <li>Упрощает адаптацию к будущим обновлениям</li>
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
        header="Валидная и семантическая разметка"
        icon="check-mark-button"
        content={<CardContent />}
        buttonText="Валидный HTML"
        onButtonClick={toggleBlockModal}
        buttonRef={showModalRef as React.RefObject<HTMLButtonElement>}
      />
      <BlockModal
        header="Валидный HTML"
        content={<PrincipleCard1Modal />}
        buttonText="Хорошо"
        show={showBlockModal}
        onAction={toggleBlockModal}
        onCancel={toggleBlockModal}
      />
    </>
  );
};
