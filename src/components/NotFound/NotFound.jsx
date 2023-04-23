import { useNavigate } from 'react-router-dom';
import './NotFound.css';

// ! компонент страницы 404
function NotFound() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <main className="NotFound">
      <h1 className="NotFound__title">404</h1>
      <p className="NotFound__text">Страница не найдена</p>
      <button onClick={goBack} className="NotFound__button">Назад</button>
    </main>
    );
}

export default NotFound