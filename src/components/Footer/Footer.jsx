import './Footer.css'

// ! презентационный компонент, который отрисовывает подвал
function Footer({ footer }) {
  return (
    footer &&
    <footer className="Footer">
      <h2 className="Footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="Footer__container">
        <p className="Footer__year">&copy; {new Date().getFullYear()}</p>
        <ul className="Footer__links">
          <li>
            <a href='https://practicum.yandex.ru/' className='Footer__link' target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li>
            <a href='https://github.com/AndreySapo' className='Footer__link' target="_blank" rel="noreferrer">Github</a>
          </li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer