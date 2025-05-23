import { useRef, useState } from 'react';
import './MainHeaderStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import useWindowSize from '@/shared/customHooks/useWindowSize';
import { Link, useLocation } from 'react-router';
export const MainHeader = () => {
  const [menuActive, setMenuActive] = useState(false);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const { width } = useWindowSize();

  const location = useLocation();
  const currentRoute = location.pathname;

  const HeaderLink = ({ to, children }: { to: string; children: string }) => {
    const isActive = currentRoute === to;
    return (
      <Link
        to={to}
        className={`${isActive ? 'main-header-link-active' : ''}`}
        onClick={() => {
          window.scroll({ top: 0, left: 0, behavior: 'smooth' });
          setMenuActive(false);
        }}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="main-header">
      <div className="main-header-logo">
        <HeaderLink to="/">OpenWCAG</HeaderLink>
      </div>
      {width > 1150 && (
        <nav
          className="main-header-links"
          role="navigation"
          aria-label="Главное меню"
        >
          <HeaderLink to="/perceivable">
            Воспринимаемость
          </HeaderLink>
          <HeaderLink to="/operable">Управляемость</HeaderLink>
          <HeaderLink to="/understandable">Понятность</HeaderLink>
          <HeaderLink to="/robust">Надежность</HeaderLink>
          <span>|</span>
          <HeaderLink to="/modal">Модальные окна</HeaderLink>
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
              <HeaderLink to="/perceivable">Воспринимаемость</HeaderLink>
              <HeaderLink to="/operable">Управляемость</HeaderLink>
              <HeaderLink to="/understandable">Понятность</HeaderLink>
              <HeaderLink to="/robust">Надежность</HeaderLink>
              <span>—</span>
              <HeaderLink to="/modal">Модальные окна</HeaderLink>
            </div>
          )}
        </nav>
      )}
    </header>
  );
};
