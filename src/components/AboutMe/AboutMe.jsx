import './AboutMe.css'
import photo from '../../images/photo.jpg';

// ! компонент с информацией о студенте
function AboutMe() {
  return (
    <section className="AboutMe" id='AboutMe'>
      <h3 className="AboutMe__title-header block-header">Студент</h3>
      <ul className="AboutMe__container">
        <li className="AboutMe__lc">
          <h2 className="AboutMe__lc-title">Виталий</h2>
          <h4 className="AboutMe__lc-subtitle">Фронтенд-разработчик, 30 лет</h4>
          <p className="AboutMe__lc-text">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена
            и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
          <a href="https://github.com/andreySapo/" className="AboutMe__lc-link link-hover">Github</a>
        </li>

        <li className='AboutMe__rc'>
          <img src={photo} alt="моя фотография" className='AboutMe__photo' />
        </li>
      </ul>
    </section>
    );
}

export default AboutMe