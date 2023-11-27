import './NavTab.css';

function NavBar() {
  return (
    <nav>
      <ul className="banner__nav">
        <li className="banner__nav-item">
          <a>О проекте</a>
        </li>
        <li className="banner__nav-item">
          <a>Технологии</a>
        </li>
        <li className="banner__nav-item">
          <a>Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
