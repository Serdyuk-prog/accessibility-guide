import './MainFooterStyles.css';
import logo from '@shared/assets/a11y.svg';
export const MainFooter = () => {
    return (
        <footer aria-label="footer" className="main-footer">
            <nav
                className="main-footer-block main-footer-nav"
                aria-label="bottom-navigation"
            >
                <div>WCAG 2.2</div>
                <div className="main-footer-links">
                    <span>Карта сайта</span>
                    <a href="/">Воспринимаемость</a>
                    <a href="/">Управляемость</a>
                    <a href="/">Понятность</a>
                    <a href="/">Надежность</a>
                </div>
                <div className="main-footer-links">
                    <span>Полезные ссылки</span>
                    <a href="/">Ссылка 1</a>
                    <a href="/">Ссылка 2</a>
                    <a href="/">Ссылка 3</a>
                    <a href="/">Ссылка 4</a>
                </div>
            </nav>
            <div className="main-footer-block main-footer-copyright">
                <p>Made by @tram_tony</p>
                <p>No cookies Just accessibility <img src={logo} alt="Accessibility logo" /></p>
                <p>
                    Copyright © 2025 All Rights Reserved. CC BY-NC-ND License.
                </p>
            </div>
        </footer>
    );
};
