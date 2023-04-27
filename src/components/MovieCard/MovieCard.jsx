import { useState } from 'react';
import './MovieCard.css'
import buttonSaved from '../../images/btn-saved.svg';
import x from '../../images/x.svg';

// ! компонент одной карточки фильма
function MovieCard({ movie, saved }) {

  const { nameRU, duration, image, trailerLink } = movie; // TODO добавить изображение

  const imageURL = `https://api.nomoreparties.co` + image.url;

  const [isLiked, setIsLiked] = useState(false);

  function handleSetIsLiked() {
    setIsLiked(!isLiked);
  }

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
          <button className='MovieCard__button button-hover' onClick={handleSetIsLiked}>
            <img src={x} alt="" />
          </button> :

          isLiked
            ?
            <button className='MovieCard__button MovieCard__button_active button-hover' onClick={handleSetIsLiked}>
              <img src={buttonSaved} alt="" />
            </button>
            :
            <button className='MovieCard__button button-hover' onClick={handleSetIsLiked}>
              Сохранить
            </button>
      }
    </li>
  );
}

export default MovieCard