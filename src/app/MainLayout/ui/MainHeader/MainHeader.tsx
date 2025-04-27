import './MainHeaderStyles.css';

export const MainHeader = () => {
    return (
        <nav className="main-header" aria-label='navigation'>
          <div>
            <a className='main-header-logo' href="/">WCAG 2.2</a>
          </div>
          <div className='main-header-links'>
            <a href="/">Воспринимаемость</a>
            <a href="/">Управляемость</a>
            <a href="/">Понятность</a>
            <a href="/">Надежность</a>
          </div>
        </nav>
    );
};
