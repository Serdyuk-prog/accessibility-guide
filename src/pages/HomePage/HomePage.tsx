import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import DialogModal from '@/shared/modals/DialogModal/DialogModal';
import { useRef, useState } from 'react';
import './HomePage.css';
import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import { TextLink } from '@/shared/ui/TextLink/TextLink';
import { ButtonLink } from '@/shared/ui/ButtonLink/ButtonLink';
import useWindowSize from '@/shared/customHooks/useWindowSize';
import { FaBrain, FaBriefcase, FaChartBar, FaHandPaper, FaRegEye } from 'react-icons/fa';
import { FaGear, FaHand } from 'react-icons/fa6';
import { IoMdHand } from 'react-icons/io';
import { MdOutlineWbSunny } from 'react-icons/md';

export const HomePage = () => {
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

  return (
    <>
      {/* <Emoji name="check-mark-button" /> */}
      <div className="home-page-wrapper">
        <div><h1> Веб-доступность:</h1>
        <h2>цифровая инклюзивность для всех</h2></div>
        
        <p className={width > 720 ? 'subheading' : ''}>
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
            iconElement={<FaRegEye size={50} color="#E67E58" />}
            content={
              'Контент должен быть доступен для восприятия разными способами (текст, аудио, альтернативные описания).'
            }
          />
          <PrincipleCard
            header="Управляемость"
            icon="hand-with-fingers-splayed"
            iconElement={<IoMdHand size={50} color="#3767CB" />}
            content={
              'Интерфейс должен работать с клавиатурой, не требовать быстрой реакции и быть предсказуемым.'
            }
          />
          <PrincipleCard
            header="Понятность"
            icon="brain"
            iconElement={<FaBrain size={50} color="#EE8EAC" />}
            content={
              'Информация и навигация должны быть интуитивно понятными даже для людей с когнитивными нарушениями'
            }
          />
          <PrincipleCard
            header="Надёжность"
            icon="gear"
            iconElement={<FaGear size={50} color="#E67E58" />}
            content={
              'Сайт должен корректно работать с различными технологиями, включая скринридеры.'
            }
          />
        </div>

        <h3>Почему доступность важна?</h3>
        <div className="cards-wrapper">
          <PrincipleCard
            icon="bar-chart"
            iconElement={<FaChartBar size={50} color="#EE8EAC" />}
            header="Статистика доступности"
            content={
              'Согласно исследованиям WebAIM, 98% сайтов не соответствуют базовым требованиям доступности WCAG 2.1 уровня AA.'
            }
          />
          <PrincipleCard
            icon="sun"
            header="Забота о пользователе"
            iconElement={<MdOutlineWbSunny size={50} color="#E67E58" />}
            content={
              'Представьте, как сложно пользователю с нарушением зрения ориентироваться на сайте, где изображения не имеют текстовых описаний, или как трудно человеку с тремором рук нажать маленькую кнопку.'
            }
          />
          <PrincipleCard
            icon="briefcase"
            iconElement={<FaBriefcase size={50} color="#3767CB" />}
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
              <TextLink href="/perceivable">Воспринимаемость</TextLink>
            </li>
            <li>
              <TextLink href="/operable">Управляемость</TextLink>
            </li>
            <li>
              <TextLink href="/understandable">Понятность</TextLink>
            </li>
            <li>
              <TextLink href="/robust">Надежность</TextLink>
            </li>
            <li>
              <TextLink href="/modal">Модальные окна</TextLink>
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
            <span className="color-effect">Веб-доступности</span>
            начинается здесь
          </h2>
          <div style={{ fontSize: '20px', fontWeight: 600 }}>
            Проложи свою дрогу к интернету для всех
          </div>
          <ButtonLink href="/perceivable">
            Начать изучение принципов!
          </ButtonLink>
        </section>
      </div>

      {/* <BlockModal show={showBlockModal} onAction={toggleBlockModal} />
      <DialogModal ref={modalRef} /> */}
    </>
  );
};
