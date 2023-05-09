import './MovieCard.css'
import buttonSaved from '../../images/btn-saved.svg';
import x from '../../images/x.svg';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../utils/UserContext';

// ! компонент одной карточки фильма
function MovieCard({ movie, saved, handleButtonSave }) {

  const { savedMovies } = useContext(CurrentUserContext);

  const { nameRU, duration, image, trailerLink } = movie;

  const imageURL = !saved ? `https://api.nomoreparties.co` + image.url : image;
  const [isSaveButtonActive, setIsSaveButtonActive] = useState(false);

  const onClick = () => handleButtonSave(movie, setIsSaveButtonActive);

  useEffect(() => {
    if (savedMovies.find((savedMovie) => savedMovie.movieId === movie.id)) {
      setIsSaveButtonActive(true);
    }
  }, [])


  return (
    <li className="MovieCard">
      <div className="MovieCard__header">
        <h2 className="MovieCard__title">{nameRU}</h2>
        <p className="MovieCard__duration">{duration} мин.</p>
      </div>
      <a href={trailerLink} target="_blank" rel="noreferrer">
        <img src={imageURL} alt={nameRU} className="MovieCard__img" />
      </a>
      {
        saved ?
          <button className='MovieCard__button button-hover'>
            <img src={x} alt="" />
          </button> :

          isSaveButtonActive
            ?
            <button className='MovieCard__button MovieCard__button_active' disabled>
              <img src={buttonSaved} alt="" />
            </button>
            :
            <button className='MovieCard__button button-hover' onClick={onClick}>
              Сохранить
            </button>
      }
    </li>
  );
}

export default MovieCard