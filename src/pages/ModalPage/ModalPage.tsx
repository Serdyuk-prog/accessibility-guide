import './ModalPage.css';
import { TextLink } from '@/shared/ui/TextLink/TextLink';
import { ButtonLink } from '@/shared/ui/ButtonLink/ButtonLink';
import useWindowSize from '@/shared/customHooks/useWindowSize';
import { ComparisonCard } from '@/entities/ComparisonCard/ComparisonCard';
import { Card1 } from './ui/RequirementsCards/Card1';
import { Card2 } from './ui/RequirementsCards/Card2';
import { Card3 } from './ui/RequirementsCards/Card3';
import { Card4 } from './ui/RequirementsCards/Card4';
import { ModalInfoCard } from './ui/ModalInfoCard/ModalInfoCard';
import { CodeBlock } from '@/shared/ui/CodeBlock/CodeBlock';
// import {
//   ContentComparisonCard1Error,
//   ContentComparisonCard1Success,
//   ContentComparisonCard2Error,
//   ContentComparisonCard2Success,
// } from './ui/ContentComparisonCards';

export const ModalPage = () => {
  const { width } = useWindowSize();

  return (
    <>
      <div className="modal-page-wrapper">
        <div>
          <h1>Доступные модальные окна:</h1>
          <h2>баланс функциональности и инклюзивности</h2>
        </div>
        <div className={width > 720 ? 'subheading' : ''}>
          <p>
            Модальные окна — один из самых сложных элементов интерфейса с точки
            зрения доступности.
          </p>
          <br />
          <p>Они должны одновременно:</p>
          <ul>
            <li>Чётко выделяться на фоне основного контента</li>
            <li>Полностью управляться с клавиатуры</li>
            <li>Корректно работать со скринридерами</li>
            <li>Быть удобными для пользователей с разными особенностями</li>
          </ul>
          <br />
          <p>Рассмотрим ключевые требования и практические решения.</p>
        </div>
        <h3>Ключевые требования WCAG 2.2</h3>
        <div className="cards-wrapper">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>

        <h3>Сравнение реализаций</h3>
        <div className="cards-wrapper">
          <ModalInfoCard
            header={
              <>
                Кастомное решение (<code>{'<div>'}</code>)
              </>
            }
          >
            <CodeBlock>
              {'<div class="modal" role="dialog" aria-modal="true">'} <br />
              &nbsp;&nbsp;{'<!-- Контент -->'} <br />
              {'</div>'}
            </CodeBlock>
            <br />
            <i>Требует ручной реализации:</i>
            <ul>
              <li>JavaScript для управления фокусом</li>
              <li>Обработчики клавиатуры</li>
              <li>ARIA-атрибуты</li>
            </ul>
          </ModalInfoCard>
          <ModalInfoCard
            header={
              <>
                Нативное решение (<code>{'<dialog>'}</code>)
              </>
            }
          >
            <CodeBlock>
              {'<dialog>'} <br />
              &nbsp;&nbsp;{'<!-- Контент -->'} <br />
              {'</dialog>'}
            </CodeBlock>
            <br />
            <i>Преимущества:</i>
            <ul>
              <li>Встроенная ловушка фокуса</li>
              <li>Автоматическое затемнение фона</li>
              <li>Поддержка Esc по умолчанию</li>
            </ul>
          </ModalInfoCard>
        </div>

        <h3>Пошаговая инструкция</h3>
        <div className="cards-wrapper">
          <ModalInfoCard
            header={
              <>
                Для реализации на (<code>{'<div>'}</code>)
              </>
            }
          >
            <ul>
              <li>
                Добавить семантические атрибуты
                <CodeBlock>
                  {'<div class="modal" role="dialog" aria-modal="true">'}
                </CodeBlock>
                <br />
              </li>
              <li>
                Реализовать логику фокуса:{' '}
                <CodeBlock>
                  {'// При открытии'} <br />
                  {'modalRef.current?.focus();'} <br />
                  <br />
                  <br />
                  {'// При закрытии'} <br />
                  {'showModalRef.current?.focus();'}
                </CodeBlock>
                <br />
              </li>
              <li>
                Добавить обработчик Esc
                <CodeBlock>
                  {"if (event.key === 'Escape') {"} <br />
                  &nbsp;&nbsp;{'// Закрываем модалку'}
                  {'}'}
                </CodeBlock>
                <br />
              </li>
              <li>
                <div>Реализовать ловушку фокуса</div>
                <br />
              </li>
              <li>
                Реализовать блокировку скролла страницы
                <CodeBlock>
                  {"document.body.style.overflow = 'hidden';"}
                </CodeBlock>
                <br />
              </li>
              <li>
                Стилизовать оверлей
                <CodeBlock>
                  {'position: fixed;'} <br />
                  {'top: 0;'} <br />
                  {'left: 0;'} <br />
                  {'width: 100vw;'} <br />
                  {'height: 100vh;'} <br />
                  {'background-color: rgba(9, 9, 9, 0.4);'} <br />
                  {'z-index: 999;'}
                </CodeBlock>
              </li>
            </ul>
          </ModalInfoCard>

          <ModalInfoCard
            header={
              <>
                Нативное решение (<code>{'<dialog>'}</code>)
              </>
            }
          >
            <ul>
              <li>
                Использовать базовый HTML-тег
                <CodeBlock>
                  {'<dialog>'} <br />
                  &nbsp;&nbsp;{'<!-- Контент -->'} <br />
                  {'</dialog>'}
                </CodeBlock>
                <br />
              </li>
              <li>
                Стилизация через ::backdrop
                <CodeBlock>
                  {'dialog::backdrop {'} <br />
                  &nbsp;&nbsp;{'background-color: rgba(9, 9, 9, 0.4);'} <br />
                  {'}'}
                </CodeBlock>
                <br />
              </li>
              <li>
                Добавить закрытие модалки по клику на оверлей
                <br />
              </li>
            </ul>
          </ModalInfoCard>
        </div>

        <h3>Рекомендации</h3>
        <div className="cards-wrapper">
          <ModalInfoCard header="Для большинства проектов:">
            <b>
              Используете <code>{'<dialog>'}</code>
            </b>
            <ul>
              <li>Экономит время разработки</li>
              <li>Гарантирует базовую доступность</li>
              <li>Упрощает поддержку</li>
            </ul>
          </ModalInfoCard>

          <ModalInfoCard header="Для сложных случаев:">
            <b>Комбинируйте подходы</b>
            <CodeBlock>
              {'<dialog ref={dialogRef}>'} <br />
              &nbsp;&nbsp;{'<div className="custom-modal-content">'} <br />
              &nbsp;&nbsp; &nbsp;&nbsp;{'{/* Кастомная логика */}'} <br />
              &nbsp;&nbsp;{'</div>'} <br />
              {'</dialog>'} <br />
            </CodeBlock>
          </ModalInfoCard>
        </div>

        <h3>Дополнительные ресурсы:</h3>
        <ul>
          <li>
            <TextLink
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog"
              isExternal
            >
              {'<dialog> на MDN'}
            </TextLink>
          </li>
          <li>
            <TextLink href="https://doka.guide/html/dialog/" isExternal>
              Статья про dialog в Доке
            </TextLink>
          </li>
          <li>
            <TextLink
              href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/"
              isExternal
            >
              Пример реализации доступного модального окна от W3C
            </TextLink>
          </li>
        </ul>
        <section className="page-navigation">
          <TextLink href="/perceivable" type="secondary">
            {'<- Назад к принципам: Perceivable (Воспринимаемость)'}
          </TextLink>
        </section>
      </div>
    </>
  );
};
