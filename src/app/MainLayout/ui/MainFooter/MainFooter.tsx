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
          <a className="main-footer-logo" href="/">
            WCAG 2.2
          </a>
        </div>
        <div className="main-footer-links">
          <span>Карта сайта:</span>
          <TextLink href="/perceivable">Воспринимаемость</TextLink>
          <TextLink href="/">Управляемость</TextLink>
          <TextLink href="/">Понятность</TextLink>
          <TextLink href="/">Надежность</TextLink>
          {/* <a href="/">Воспринимаемость</a>
                    <a href="/">Управляемость</a>
                    <a href="/">Понятность</a>
                    <a href="/">Надежность</a> */}
        </div>
        <div className="main-footer-links">
          <span>Полезные ссылки</span>
          <TextLink href="https://www.w3.org/TR/WCAG22">
            Полный текст WCAG 2.2
          </TextLink>
          <TextLink href="https://webaim.org/">
            WebAIM - ресурс о веб-доступности
          </TextLink>
          <TextLink href="/">Ссылка 3</TextLink>
          <TextLink href="/">Ссылка 4</TextLink>
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
