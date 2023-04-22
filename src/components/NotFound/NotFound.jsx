import { Link } from 'react-router-dom';
import './NotFound.css';

// ! компонент страницы 404
function NotFound() {
  return (
    <main className="NotFound">
      <h1 className="NotFound__title">404</h1>
      <p className="NotFound__text">Страница не найдена</p>
      <Link to='/' className="NotFound__button">Назад</Link>
    </main>
    );
}

export default NotFound