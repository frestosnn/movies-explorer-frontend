import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <nav className="portfolio__nav">
        <ul className="portfolio__list">
          <li className="portfolip__item">
            <p className="portfolio__title">Статичный сайт</p>
            <a className="portfolio__link">
              <span className="portfolio__array">↗</span>
            </a>
          </li>
          <li className="portfolip__item">
            <p className="portfolio__title">Адаптивный сайт</p>
            <a className="portfolio__link">
              <span className="portfolio__array">↗</span>
            </a>
          </li>
          <li className="portfolip__item">
            <p className="portfolio__title">Одностраничное приложение</p>
            <a className="portfolio__link">
              <span className="portfolio__array">↗</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
