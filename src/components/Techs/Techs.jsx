import './Techs.css';

// ! компонент с использованными технологиями
function Techs() {
  return (
    <section className="Techs" id='Techs'>
      <h3 className="Techs__title-header block-header">Технологии</h3>
      <h2 className="Techs__title">7 технологий</h2>
      <p className="Techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="Techs__list">
        <li className="Techs__list-item">
          <p className="Tech__list-text">HTML</p>
        </li>
        <li className="Techs__list-item">
          <p className="Tech__list-text">CSS</p>
        </li>
        <li className="Techs__list-item">
          <p className="Tech__list-text">JS</p>
        </li>
        <li className="Techs__list-item">
          <p className="Tech__list-text">React</p>
        </li>
        <li className="Techs__list-item">
          <p className="Tech__list-text">Git</p>
        </li>
        <li className="Techs__list-item">
          <p className="Tech__list-text">Express.js</p>
        </li>
        <li className="Techs__list-item">
          <p className="Tech__list-text">mongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default Techs