import './HomePage.css';
import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import { TextLink } from '@/shared/ui/TextLink/TextLink';
import { ButtonLink } from '@/shared/ui/ButtonLink/ButtonLink';
import useWindowSize from '@/shared/customHooks/useWindowSize';
import { FaBrain, FaBriefcase, FaChartBar, FaRegEye } from 'react-icons/fa';
import { FaGear, FaHand, FaLaptopCode, FaPenRuler } from 'react-icons/fa6';
import { IoMdHand } from 'react-icons/io';
import { MdOutlineWbSunny } from 'react-icons/md';
import { IoColorPalette } from 'react-icons/io5';
import { HiMagnifyingGlass } from 'react-icons/hi2';

export const HomePage = () => {
  const { width } = useWindowSize();

  return (
    <>
      <div className="home-page-wrapper">
        <div>
          <h1> Веб-доступность:</h1>
          <h2>цифровая инклюзивность для всех</h2>
        </div>

        <p className={width > 720 ? 'subheading' : ''}>
          Веб-доступность — это практика создания сайтов и приложений, которыми
          могут пользоваться люди с любыми возможностями. Она обеспечивает
          равный доступ к информации и сервисам, независимо от физических или
          когнитивных особенностей. В этом руководстве вы узнаете, как сделать
          цифровые продукты доступными, следуя стандартам WCAG.
        </p>
        <h3>Основные принципы веб-доступности</h3>
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
              'Информация и навигация должны быть интуитивно понятными даже для людей с когнитивными нарушениями.'
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
        <section className={width > 720 ? 'subheading' : ''}>
          <p>
            Сайт разделён на пять основных разделов: введение (эта страница),
            четыре принципа WCAG и практические примеры доступных модальных
            окон:
          </p>
          <br />
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
          <br />
          <p>
            Вы можете использовать клавиатуру для навигации, увеличивать
            увеличивать масштаб или пользоваться сайтом на мобильных
            устройствах.
          </p>
        </section>

        <h3>Доступность - это ответственность</h3>
        <section>
          <p style={{ fontSize: '1.125rem' }}>
            <strong>Следование стандартам — лишь минимальная планка. </strong>
            Настоящая профессиональная зрелость разработчика проявляется в
            <b> осознанной социальной ответственности</b>, выходящей за рамки
            формальных требований.
          </p>

          <br />
          <h4>Доступность должна быть интегрирована на всех этапах: </h4>
          <br />
          <br />
          <div className="cards-wrapper">
            <PrincipleCard
              icon="bar-chart"
              iconElement={<FaPenRuler size={50} color="#3767CB" />}
              header="Проектирование"
              content={
                'Инклюзивность закладывается на старте через сценарии, учитывающие потребности пользователей с любыми возможностями.'
              }
            />
            <PrincipleCard
              icon="sun"
              header="Дизайн"
              iconElement={<IoColorPalette size={50} color="#EE8EAC" />}
              content={
                'Визуальные решения объединяют эстетику и функциональность, гарантируя ясность даже при масштабировании или изменении режимов восприятия.'
              }
            />
            <PrincipleCard
              icon="briefcase"
              iconElement={<FaLaptopCode size={50} color="#E67E58" />}
              header="Разработка"
              content={
                'Семантический код и встроенные стандарты HTML/ARIA становятся основой для взаимодействия со вспомогательными технологиями.'
              }
            />
            <PrincipleCard
              icon="briefcase"
              iconElement={<HiMagnifyingGlass size={50} color="#3767CB" />}
              header="Тестирование"
              content={
                'Соответствие стандартам проверяется инструментами, но истинную доступность подтверждают пользователи с ОВЗ.'
              }
            />
          </div>
          <br />
          <br />
          <p style={{ textAlign: 'center', fontSize: '1.25rem' }}>
            Ценности инклюзивности должны стать не внешними ограничениями, а{' '}
            <b>внутренней нормой</b>. Только тогда технологии обретут подлинную
            универсальность.
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
    </>
  );
};
