import './OperablePage.css';
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

export const OperablePage = () => {
  const { width } = useWindowSize();

  return (
    <>
      <div className="operable-page-wrapper">
        <div>
          <h1>Управляемость:</h1>
          <h2>интерфейсы для всех способов взаимодействия</h2>
        </div>

        <p className={width > 720 ? 'subheading' : ''}>
          Принцип управляемости гарантирует, что пользователи могут
          взаимодействовать с интерфейсом различными способами - не только
          мышью, но и клавиатурой, сенсорным вводом или голосовыми командами. В
          этом разделе мы разберём ключевые требования WCAG 2.2 и покажем, как
          создать интерфейс, который будет удобен людям с разными физическими
          возможностями и предпочтениями в навигации.
        </p>
        <h3>Ключевые рекомендации WCAG 2.2</h3>
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
          <TextLink href="/perceivable" type="secondary">
            {'<- Ранее: Perceivable (Воспринимаемость)'}
          </TextLink>
          <TextLink href="/understandable" type="accent">
            {'Далее: Understandable (Понятность) ->'}
          </TextLink>
        </div>
      </div>
    </>
  );
};
