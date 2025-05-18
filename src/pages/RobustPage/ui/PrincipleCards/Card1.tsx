import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import { useRef } from 'react';
import { CodeBlock } from '@/shared/ui/CodeBlock/CodeBlock';
import { TextLink } from '@/shared/ui/TextLink/TextLink';
import DialogModal from '@/shared/modals/DialogModal/DialogModal';

const CardModal = () => {
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
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <PrincipleCard
        header="Валидная и семантическая разметка"
        icon="check-mark-button"
        content={<CardContent />}
        buttonText="Валидный HTML"
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
