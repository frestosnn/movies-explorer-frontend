import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <section className="wrong-path">
      <h2 className="wrong-path__error">404</h2>
      <p className="wrong-path__text">Страница не найдена</p>
      <Link to="/" className="wrong-path__link">
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
