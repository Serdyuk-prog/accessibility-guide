import { TextLink } from '@/shared/ui/TextLink/TextLink';
import './MainFooterStyles.css';
import logo from '@shared/assets/a11y.svg';
export const MainFooter = () => {
  return (
    <footer aria-label="footer" className="main-footer">
      <nav
        className="main-footer-block main-footer-nav"
        aria-label="bottom-navigation"
      >
        <div>
          <a className="main-footer-logo" href="/accessibility-guide">
            WCAG 2.2
          </a>
        </div>
        <div className="main-footer-links">
          <span>Карта сайта:</span>
          <TextLink href="/perceivable">Воспринимаемость</TextLink>
          <TextLink href="/operable">Управляемость</TextLink>
          <TextLink href="/understandable">Понятность</TextLink>
          <TextLink href="/robust">Надежность</TextLink>
          <TextLink href="/modal">Практика</TextLink>
        </div>
        <div className="main-footer-links">
          <span>Полезные ссылки</span>
          <TextLink href="https://www.w3.org/TR/WCAG22">
            Полный текст WCAG 2.2
          </TextLink>
          <TextLink href="https://webaim.org/">
            WebAIM - ресурс о веб-доступности
          </TextLink>
          <TextLink href="https://handbook.floeproject.org/">
            Inclusive Learning Design Handbook
          </TextLink>
          <TextLink href="https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/dialog">
            HTML-элемент {'<dialog>'}
          </TextLink>
        </div>
      </nav>
      <div className="main-footer-block main-footer-copyright">
        <p>Made by @tram_tony</p>
        <p>
          No cookies Just accessibility{' '}
          <img src={logo} alt="Accessibility logo" />
        </p>
        <p>Copyright © 2025 All Rights Reserved. CC BY-NC-ND License.</p>
      </div>
    </footer>
  );
};
