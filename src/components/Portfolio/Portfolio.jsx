import './Portfolio.css';
import arrow from '../../images/arrow.svg';


// ! компонент со ссылками на другие проекты
function Portfolio() {
  return (
    <section className="Portfolio">
      <h3 className="Portfolio__title">Портфолио</h3>
      <ul className="Portfolio__list">
        <li className='Portfolio__list-element'>
          <a href='https://github.com/AndreySapo/how-to-learn' target="_blank" rel="noreferrer" className='Portfolio__link'>
            <p className='Portfolio__link-text'>Статичный сайт</p>
            <img src={arrow} alt="ссылка" className='Portfolio__link-arrow' />
          </a>
        </li>
        <li className='Portfolio__list-element'>
          <a href='https://github.com/AndreySapo/russian-travel' className='Portfolio__link'>
            <p className='Portfolio__link-text'>Адаптивный сайт</p>
            <img src={arrow} alt="ссылка" className='Portfolio__link-arrow' />
          </a>
        </li>
        <li className='Portfolio__list-element'>
          <a href='https://github.com/AndreySapo/mesto' className='Portfolio__link'>
            <p className='Portfolio__link-text'>Одностраничное приложение</p>
            <img src={arrow} alt="ссылка" className='Portfolio__link-arrow' />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio