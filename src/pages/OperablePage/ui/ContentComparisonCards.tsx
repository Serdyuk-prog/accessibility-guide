import { CodeBlock } from '@/shared/ui/CodeBlock/CodeBlock';
import demoGif from '../assets/demo.gif';

export const ContentComparisonCard1Error = () => {
  return (
    <>
      <p>
        Когда фокус незапланированно застревает в части интерфейса и не может
        быть перемещён клавишами.
      </p>
      <br />
      <img
        src={demoGif}
        alt="Анимация перемещения фокуса по замкнутой области сайта"
        style={{ width: '400px', maxWidth: '100%' }}
      />
    </>
  );
};

export const ContentComparisonCard1Success = () => {
  return (
    <>
      <p>
        Всегда проверяйте сложные виджеты на возможность полного обхода с
        клавиатуры.
      </p>
    </>
  );
};

export const ContentComparisonCard2Error = () => {
  return (
    <>
      <p>
        Неочевидные интерактивные элементы. Например кнопки которые выглядят как
        кнопки, но не работают как кнопки.{' '}
      </p>
      <br />
      <CodeBlock type="error">
        {"<button onClick={() => (window.location.href = '/')}>Домой</button>"}
      </CodeBlock>
    </>
  );
};

export const ContentComparisonCard2Success = () => {
  return (
    <>
      <p>
        Используйте семантически правильные HTML-теги {'(<button>, <a>)'} и
        чёткие визуальные состояния.
      </p>
      <br />
      <CodeBlock type="success">{"<a href='/'>Домой</a>"}</CodeBlock>
    </>
  );
};
