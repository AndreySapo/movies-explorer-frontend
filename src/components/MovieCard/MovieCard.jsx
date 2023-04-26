import { useState } from 'react';
import './MovieCard.css'
import buttonSaved from '../../images/btn-saved.svg';
import moviePic from '../../images/movie.jpg';
import x from '../../images/x.svg';

// ! компонент одной карточки фильма
function MovieCard({ movie, saved }) {

  const { nameRU, duration } = movie; // TODO добавить изображение

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
      <img src={moviePic} alt={nameRU} className="MovieCard__img" />
      {
        saved ?
          <button className='MovieCard__button button-hover' onClick={handleSetIsLiked}>
            <img src={x} alt="" srcset="" />
          </button> :

          isLiked
            ?
            <button className='MovieCard__button MovieCard__button_active button-hover' onClick={handleSetIsLiked}>
              <img src={buttonSaved} alt="" srcset="" />
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