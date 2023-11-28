import './AboutMe.css';

function AboutMe() {
  return (
    <section className="dev-info">
      <div className="title__wrap">
        <h2 className="title__header">Студент</h2>
      </div>
      <article className="dev-info__wrap">
        <div className="dev-info__content">
          <h3 className="dev-info__name">Анастасия</h3>
          <h4 className="dev-info__description">Фронтенд-разработчик, 24 лет</h4>
          <p className="dev-info__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
            в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="dev-info__link">Github</a>
        </div>
        <img className="dev-info__img" />
      </article>
    </section>
  );
}

export default AboutMe;
