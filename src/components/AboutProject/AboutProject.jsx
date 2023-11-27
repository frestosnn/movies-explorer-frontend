import './AboutProject.css';

function AboutProject() {
  return (
    <section className="description">
      <h2 className="description__header">О проекте</h2>
      <ul className="description__content">
        <li className="description__item">
          <h3 className="description__title">Дипломный проект включал 5 этапов</h3>
          <p className="description__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </li>
        <li className="description__item">
          <h3 className="description__title">На выполнение диплома ушло 5 недель</h3>
          <p className="description__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </li>
      </ul>
      <div></div>
    </section>
  );
}

export default AboutProject;
