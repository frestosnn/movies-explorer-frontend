import './AboutProject.css';

function AboutProject() {
  return (
    <section className="project">
      <div className="title__wrap">
        <h2 className="title__header">О проекте</h2>
      </div>
      <ul className="project__content">
        <li className="project__item">
          <h3 className="project__title">Дипломный проект включал 5 этапов</h3>
          <p className="project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </li>
        <li className="project__item">
          <h3 className="project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </li>
      </ul>
      <div className="project__time">
        <p className="project__back">1 неделя</p>
        <p className="project__front">4 недели</p>
      </div>
      <div className="project__span">
        <span className="project__back-span">Back-end</span>
        <span className="project__front-span">Front-end</span>
      </div>
    </section>
  );
}

export default AboutProject;
