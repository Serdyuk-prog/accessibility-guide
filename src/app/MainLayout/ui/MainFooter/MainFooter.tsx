import './MainFooterStyles.css';
export const MainFooter = () => {
    return (
        <footer aria-label='footer' className="main-footer">
            <nav className="main-footer-block main-footer-nav" aria-label='bottom-navigation'>
                <div>WCAG 2.2</div>
                <div className="main-footer-links">
                    <h5>Карта сайта</h5>
                    <a href="/">Воспринимаемость</a>
                    <a href="/">Управляемость</a>
                    <a href="/">Понятность</a>
                    <a href="/">Надежность</a>
                </div>
                <div className="main-footer-links">
                    <h5>Полезные ссылки</h5>
                    <a href="/">Ссылка 1</a>
                    <a href="/">Ссылка 2</a>
                    <a href="/">Ссылка 3</a>
                    <a href="/">Ссылка 4</a>
                </div>
            </nav>
            <div className="main-footer-block main-footer-copyright">
                <p>Made by @tram_tony</p>
                <p>No cookies Just accessibility</p>
                <p>
                    Copyright © 2025 All Rights Reserved. CC BY-NC-ND License.
                </p>
            </div>
        </footer>
    );
};
