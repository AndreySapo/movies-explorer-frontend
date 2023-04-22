import './Promo.css'

// ! компонент с вёрсткой баннера страницы «О проекте»
function Promo() {
  return (
    <section className="Promo">
      <h1 className="Promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <ul className="Promo__list">
        <li><a href="#AboutProject" className='Promo__link'>О проекте</a></li>
        <li><a href="#Techs" className='Promo__link'>Технологии</a></li>
        <li><a href="#AboutMe" className='Promo__link'>Студент</a></li>
      </ul>
    </section>
    );
}

export default Promo