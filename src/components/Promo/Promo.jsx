import './Promo.css'

// ! компонент с вёрсткой баннера страницы «О проекте»
function Promo() {
  return (
    <section className="Promo">
      <h1 className="Promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <ul className="Promo__list">
        <li><a href="#AboutProject" className='Promo__link link-hover'>О проекте</a></li>
        <li><a href="#Techs" className='Promo__link link-hover'>Технологии</a></li>
        <li><a href="#AboutMe" className='Promo__link link-hover'>Студент</a></li>
      </ul>
    </section>
    );
}

export default Promo