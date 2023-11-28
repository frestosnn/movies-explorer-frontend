import './Header.css';
import headerLogoPath from '../../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogoPath}></img>
      <div className="header__wrap">
        <a className="header__register"></a>
        <a className="header__login"></a>
      </div>
    </header>
  );
}

export default Header;
