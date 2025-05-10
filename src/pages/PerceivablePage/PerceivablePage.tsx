import './PerceivablePage.css';
import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import DialogModal from '@/shared/modals/DialogModal/DialogModa';
import { useRef, useState } from 'react';
import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import { TextLink } from '@/shared/ui/TextLink/TextLink';
import { ButtonLink } from '@/shared/ui/ButtonLink/ButtonLink';
import useWindowSize from '@/shared/customHooks/useWindowSize';

export const PerceivablePage = () => {
  const [showBlockModal, setShowBlockModal] = useState(false);
  const showModalRef = useRef<HTMLButtonElement>(null);
  // const [showDialogModal, setShowDialogModal] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);
  const { width } = useWindowSize();

  const toggleBlockModal = () => {
    setShowBlockModal((state) => !state);
    if (showBlockModal) {
      showModalRef.current?.focus();
    }
  };

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

  return (
    <>
      {/* <Emoji name="check-mark-button" /> */}
      <div className="principal-page-wrapper">
        <h1>Воспринимаемость: доступность контента</h1>
        <p className={width > 720 ? "subheading" : ""}>
          Принцип "Воспринимаемость" означает, что информация на сайте должна
          быть доступна независимо от сенсорных возможностей пользователя. Это
          включает альтернативные описания для изображений, субтитры для видео,
          адаптацию цветов и шрифтов для людей с нарушениями зрения.
        </p>
        <h3>Ключевые рекомендации WCAG 2.2</h3>
        <div className="cards-wrapper">
          <PrincipleCard
            header="Альтернативный текст для изображений"
            icon="glasses"
            content={
              'Контент должен быть доступен для восприятия разными способами (текст, аудио, альтернативные описания).'
            }
            linkAddress="/perceivable"
            linkText="Пример alt текста"
          />
          <PrincipleCard
            header="Адаптация мультимедиа"
            icon="popcorn"
            content={<ContentMultimediaCard />}
            linkAddress="/home"
            linkText="Практический пример"
          />
          <PrincipleCard
            header="Контраст и читаемость"
            icon="large-green-circle"
            content={
              'Важно соблюдать требования по минимальному соотношению контраста текста и фона: 4.5:1. Проверить контраст довольно легко - нужно воспользоваться инструментами проверки. '
            }
            linkAddress="/home"
            linkText="Популярные инструменты"
          />
        </div>
        <h3>Частые ошибки</h3>

        <h3>Полезные ссылки:</h3>
        <ul>
          <li>
            <TextLink
              href="https://www.w3.org/TR/WCAG22/#perceivable"
              isExternal
            >
              Воспринимаемость в стандарте WCAG 2.2
            </TextLink>
          </li>
          <li>
            <TextLink
              href="https://developer.chrome.com/docs/devtools/accessibility/contrast?hl=ru"
              isExternal
            >
              Проверка контраста через Chrome DevTools
            </TextLink>
          </li>
          <li>
            <TextLink
              href="https://webaim.org/resources/contrastchecker/"
              isExternal
            >
              WebAIM Contrast Checker
            </TextLink>
          </li>
        </ul>
      </div>
    </>
  );
};
