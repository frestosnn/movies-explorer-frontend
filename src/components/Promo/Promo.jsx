import './Promo.css';
import NavBar from '../NavTab/NavTab';
function Promo() {
  return (
    <section className="banner">
      <div className="banner__wrap">
        <h1 className="banner__header">Учебный проект студентки факультета Веб-разработки.</h1>
        <NavBar />
      </div>
    </section>
  );
}

export default Promo;
