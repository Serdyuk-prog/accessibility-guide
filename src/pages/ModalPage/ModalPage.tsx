import './ModalPage.css';
import { TextLink } from '@/shared/ui/TextLink/TextLink';
import { ButtonLink } from '@/shared/ui/ButtonLink/ButtonLink';
import useWindowSize from '@/shared/customHooks/useWindowSize';
import { ComparisonCard } from '@/entities/ComparisonCard/ComparisonCard';
// import {
//   ContentComparisonCard1Error,
//   ContentComparisonCard1Success,
//   ContentComparisonCard2Error,
//   ContentComparisonCard2Success,
// } from './ui/ContentComparisonCards';
// import { Card1 } from './ui/PrincipleCards/Card1';
// import { Card2 } from './ui/PrincipleCards/Card2';
// import { Card3 } from './ui/PrincipleCards/Card3';

export const ModalPage = () => {
  const { width } = useWindowSize();

  return (
    <>
      <div className="modal-page-wrapper">
        <h1>
          Доступные модальные окна: баланс функциональности и инклюзивности
        </h1>
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
        <h2>Ключевые требования WCAG 2.2</h2>
        <div className="cards-wrapper">
          {/* <Card1 />
          <Card2 />
          <Card3 /> */}
        </div>
        <h3>Частые ошибки</h3>
        <div className="cards-wrapper">
          {/* <ComparisonCard
            contentProblem={<ContentComparisonCard1Error />}
            contentSolution={<ContentComparisonCard1Success />}
          />
          <ComparisonCard
            contentProblem={<ContentComparisonCard2Error />}
            contentSolution={<ContentComparisonCard2Success />}
          /> */}
        </div>

        <h3>Полезные ссылки:</h3>
        <ul>
          <li>
            <TextLink href="https://www.w3.org/TR/WCAG22/#operable" isExternal>
              Управляемость в стандарте WCAG 2.2
            </TextLink>
          </li>
          <li>
            <TextLink href="https://webaim.org/techniques/keyboard/" isExternal>
              О клавиатурной навигации на WebAIM
            </TextLink>
          </li>
          <li>
            <TextLink
              href="https://www.nngroup.com/articles/keyboard-accessibility/"
              isExternal
            >
              Статья "Keyboard-Only Navigation for Improved Accessibility"
            </TextLink>
          </li>
        </ul>
        <div className="page-navigation">
          <ButtonLink href="/perceivable" type="secondary">
            {'<- Ранее: Perceivable (Воспринимаемость)'}
          </ButtonLink>
          <ButtonLink href="/understandable" type="accent">
            {'Далее: Understandable (Понятность) ->'}
          </ButtonLink>
        </div>
      </div>
    </>
  );
};
