import { useRef, useState } from 'react';
import './MainHeaderStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import useWindowSize from '@/shared/customHooks/useWindowSize';
import { Link } from 'react-router';
export const MainHeader = () => {
  const [menuActive, setMenuActive] = useState(false);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const { width } = useWindowSize();
  return (
    <header className="main-header">
      <div>
        <a className="main-header-logo" href="/accessibility-guide">
          WCAG 2.2
        </a>
      </div>
      {width > 1150 && (
        <nav
          className="main-header-links"
          role="navigation"
          aria-label="Главное меню"
        >
          <Link to="/perceivable">Воспринимаемость</Link>
          <Link to="/operable">Управляемость</Link>
          <Link to="/understandable">Понятность</Link>
          <Link to="/robust">Надежность</Link>
          <span>|</span>
          <Link to="/modal">Модальные окна</Link>
        </nav>
      )}

      {width <= 1150 && (
        <nav
          role="navigation"
          aria-label="Главное меню"
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setMenuActive(false);
              hamburgerButtonRef.current?.focus();
            }
          }}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setMenuActive(false);
            }
          }}
        >
          <button
            ref={hamburgerButtonRef}
            className="hamburger-navigation-button"
            aria-label="открыть навигацию"
            onClick={() => setMenuActive(!menuActive)}
          >
            {menuActive ? (
              <FontAwesomeIcon icon={faX} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
          {menuActive && (
            <div className="hamburger-navigation">
              <Link to="/perceivable">Воспринимаемость</Link>
              <Link to="/operable">Управляемость</Link>
              <Link to="/understandable">Понятность</Link>
              <Link to="/robust">Надежность</Link>
              <span>—</span>
              <Link to="/modal">Модальные окна</Link>
            </div>
          )}
        </nav>
      )}
    </header>
  );
};
