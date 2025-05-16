import './PerceivablePage.css';
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

export const PerceivablePage = () => {
  const { width } = useWindowSize();

  return (
    <>
      <div className="principal-page-wrapper">
        <h1>Воспринимаемость: доступность контента</h1>
        <p className={width > 720 ? 'subheading' : ''}>
          Принцип "Воспринимаемость" означает, что информация на сайте должна
          быть доступна независимо от сенсорных возможностей пользователя. Это
          включает альтернативные описания для изображений, субтитры для видео,
          адаптацию цветов и шрифтов для людей с нарушениями зрения.
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
        <div className="page-navigation">
          <ButtonLink href="/operable" type="accent">
            {'Далее: Operable (Управляемость) ->'}
          </ButtonLink>
        </div>
      </div>
    </>
  );
};
