import { TextLink } from '@/shared/ui/TextLink/TextLink';
import { ButtonLink } from '@/shared/ui/ButtonLink/ButtonLink';
import useWindowSize from '@/shared/customHooks/useWindowSize';
import { ComparisonCard } from '@/entities/ComparisonCard/ComparisonCard';
import {
  ContentComparisonCard1Error,
  ContentComparisonCard1Success,
  ContentComparisonCard2Error,
  ContentComparisonCard2Success,
} from './ui/ContentComparisonCards';
import { Card1 } from './ui/PrincipleCards/Card1';
import { Card2 } from './ui/PrincipleCards/Card2';
import { Card3 } from './ui/PrincipleCards/Card3';
import './RobustPage.css';

export const RobustPage = () => {
  const { width } = useWindowSize();

  return (
    <>
      <div className="robust-page-wrapper">
        <h1>Надёжность: совместимость с технологиями настоящего и будущего</h1>
        <p className={width > 720 ? 'subheading' : ''}>
          Принцип надёжности гарантирует, что ваш контент останется доступным
          при использовании различных технологий — современных браузеров,
          вспомогательных устройств и инструментов будущего. Это фундамент
          долгосрочной доступности вашего продукта.
        </p>
        <h2>Ключевые рекомендации WCAG 2.2</h2>
        <div className="cards-wrapper">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
        <h3>Частые ошибки</h3>
        <div className="cards-wrapper">
          <ComparisonCard
            contentProblem={<ContentComparisonCard1Error />}
            contentSolution={<ContentComparisonCard1Success />}
          />
          <ComparisonCard
            contentProblem={<ContentComparisonCard2Error />}
            contentSolution={<ContentComparisonCard2Success />}
          />
        </div>

        <h3>Полезные ссылки:</h3>
        <ul>
          <li>
            <TextLink
              href="https://www.w3.org/TR/WCAG22/#robust"
              isExternal
            >
              Надёжность в стандарте WCAG 2.2
            </TextLink>
          </li>
          <li>
            <TextLink href="https://caniuse.com/" isExternal>
              Сайт для проверки совместимости технологий
            </TextLink>
          </li>
          <li>
            <TextLink
              href="https://validator.w3.org/"
              isExternal
            >
              HTML-валидатор
            </TextLink>
          </li>
        </ul>
        <div className="page-navigation">
          <ButtonLink href="/understandable" type="secondary">
            {'<- Ранее: Understandable (Понятность)'}
          </ButtonLink>
          <ButtonLink href="/modal" type="accent">
            {'Далее: Доступность модальных окон ->'}
          </ButtonLink>
        </div>
      </div>
    </>
  );
};
