import './UnderstandablePage.css';
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

export const UnderstandablePage = () => {
  const { width } = useWindowSize();

  return (
    <>
      <div className="understandable-page-wrapper">
        <h1>Понятность: создание ясных и предсказуемых интерфейсов</h1>
        <p className={width > 720 ? 'subheading' : ''}>
          Принцип понятности в WCAG требует, чтобы информация и интерфейс были
          понятными для всех пользователей. Это означает не только простой язык,
          но и логичную структуру, предсказуемое поведение элементов и помощь в
          исправлении ошибок. Рассмотрим ключевые аспекты, которые делают
          цифровые продукты по-настоящему понятными.
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
