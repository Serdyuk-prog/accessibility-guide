import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import DialogModal from '@/shared/modals/DialogModal/DialogModa';
import { useRef, useState } from 'react';
import './HomePage.css';
import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import { TextLink } from '@/shared/ui/TextLink/TextLink';
import { ButtonLink } from '@/shared/ui/ButtonLink/ButtonLink';

export const HomePage = () => {
  const [showBlockModal, setShowBlockModal] = useState(false);
  const showModalRef = useRef<HTMLButtonElement>(null);
  // const [showDialogModal, setShowDialogModal] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const toggleBlockModal = () => {
    setShowBlockModal((state) => !state);
    if (showBlockModal) {
      showModalRef.current?.focus();
    }
  };

  return (
    <>
      {/* <Emoji name="check-mark-button" /> */}
      <div className="page-wrapper">
        <h1> Веб-доступность: цифровая инклюзивность для всех</h1>
        <p className="subheading">
          Веб-доступность — это практика создания сайтов и приложений, которыми
          могут пользоваться люди с любыми возможностями. Она обеспечивает
          равный доступ к информации и сервисам, независимо от физических или
          когнитивных особенностей. В этом руководстве вы узнаете, как сделать
          цифровые продукты доступными, следуя стандартам WCAG.
        </p>
        <h3>Основные принципы веб-доступности</h3>
        {/* <button ref={showModalRef} onClick={(e) => toggleBlockModal(e)}>Show BlockModal</button>
        <button onClick={() => modalRef.current?.showModal()}>
          Show DialogModal
        </button> */}
        <div className="cards-wrapper">
          <PrincipleCard
            header="Воспринимаемость"
            icon="eye"
            content={
              'Контент должен быть доступен для восприятия разными способами (текст, аудио, альтернативные описания).'
            }
            linkAddress="/home"
            linkText="Подробнее"
          />
          <PrincipleCard
            header="Управляемость"
            icon="hand-with-fingers-splayed"
            content={
              'Интерфейс должен работать с клавиатурой, не требовать быстрой реакции и быть предсказуемым.'
            }
            linkAddress="/home"
            linkText="Подробнее"
          />
          <PrincipleCard
            header="Понятность"
            icon="brain"
            content={'Информация и навигация должны быть интуитивно понятными.'}
            linkAddress="/home"
            linkText="Подробнее"
          />
          <PrincipleCard
            header="Надёжность"
            icon="gear"
            content={
              'Сайт должен корректно работать с различными технологиями, включая скринридеры.'
            }
            linkAddress="/home"
            linkText="Подробнее"
          />
        </div>

        <h3>Почему доступность важна?</h3>
        <div className="cards-wrapper">
          <PrincipleCard
            icon="bar-chart"
            header="Статистика доступности"
            content={
              'Согласно исследованиям WebAIM, 98% сайтов не соответствуют базовым требованиям доступности WCAG 2.1 уровня AA.'
            }
          />
          <PrincipleCard
            icon="sun"
            header="Забота о пользователе"
            content={
              'Представьте, как сложно пользователю с нарушением зрения ориентироваться на сайте, где изображения не имеют текстовых описаний, или как трудно человеку с тремором рук нажать маленькую кнопку.'
            }
          />
          <PrincipleCard
            icon="briefcase"
            header="Преимущества для бизнеса"
            content={
              'Сайты при создании которых учитывается доступность лучше ранжируются в поисковых системах и соответствуют стандартам для использования в гос-секторе.'
            }
          />
        </div>

        <h3>Структура сайта</h3>
        <section>
          <p>
            Сайт разделён на пять основных разделов: введение (эта страница),
            четыре принципа WCAG и практические примеры доступных модальных
            окон:
          </p>
          <ul>
            <li>
              <TextLink href="/">Воспринимаемость</TextLink>
            </li>
            <li>
              <TextLink href="/">Управляемость</TextLink>
            </li>
            <li>
              <TextLink href="/">Понятность</TextLink>
            </li>
            <li>
              <TextLink href="/">Надежность</TextLink>
            </li>
            <li>
              <TextLink href="/">Модальные окна</TextLink>
            </li>
          </ul>
          <p>
            Вы можете использовать клавиатуру для навигации, увеличивать
            увеличивать масштаб или пользоваться сайтом на мобильных
            устройствах.
          </p>
        </section>

        {/* Call to action */}
        <section className="call-to-action">
          <h2>
            Путь
            <span className="color-effect">
              Веб-доступности
            </span>
            начинается здесь
          </h2>
          <h5>Проложи свою дрогу к интернету для всех</h5>
          <ButtonLink href="/home">Начать изучение принципов!</ButtonLink>
        </section>
      </div>

      {/* <BlockModal show={showBlockModal} onAction={toggleBlockModal} />
      <DialogModal ref={modalRef} /> */}
    </>
  );
};
