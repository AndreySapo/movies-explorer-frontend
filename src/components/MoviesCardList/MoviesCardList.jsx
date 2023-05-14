import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { exampleMoviesApi } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';

// !  компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
function MoviesCardList({ movies, saved, handleButtonSave, handleButtonDelete }) {
  const [loading, setLoading] = useState(false);
  const [cardsToRender, setCardsToRender] = useState([]);
  const [maxCards, setMaxCards] = useState(0)
  const [numberOfRenderedCards, setNumberOfRenderedCards] = useState(0);
  const [increaseMaxCards, setIncreaseMaxCards] = useState(3);
  const localStorageMovies = JSON.parse(localStorage.getItem('found-movies'));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Ширина 1280px — 12 карточек по 3 в ряд. Кнопка «Ещё» загружает по 3 карточки.
  // Ширина 768px — 8 карточек по 2 в ряд. Кнопка «Ещё» загружает по 2 карточки.
  // Ширина от 320px до 480px — 5 карточек по 1 в ряд. Кнопка «Ещё» загружает по 2 карточки.

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 480) {
      setNumberOfRenderedCards(5);
      setIncreaseMaxCards(2);
    } else if (windowWidth <= 768) {
      setNumberOfRenderedCards(8);
      setIncreaseMaxCards(2);
    } else {
      setNumberOfRenderedCards(12);
    }
  }, [windowWidth, movies.length]);

  useEffect(() => {
    if (!saved) {
      if (localStorageMovies) {
        setCardsToRender(localStorageMovies.slice(0, numberOfRenderedCards))
        setMaxCards(localStorageMovies.length)
      } else {
        setLoading(true)
        exampleMoviesApi.getMovies()
          .then((allmovies) => setCardsToRender(allmovies))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!saved) {
      if (movies.length !== 0) {
        setCardsToRender(movies.slice(0, numberOfRenderedCards));
        setMaxCards(movies.length)
      } else if (localStorageMovies) {
        setCardsToRender(localStorageMovies.slice(0, numberOfRenderedCards))
        setMaxCards(localStorageMovies.length)
      } else {
        setCardsToRender([])
      }
    } else {
      setCardsToRender(movies);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies, numberOfRenderedCards])

  const handleButtonMore = () => setNumberOfRenderedCards(numberOfRenderedCards + increaseMaxCards);

  return (
    <>
      {
        loading ?
          <Preloader />
          :
          <section className="MoviesCardList">
            {
              cardsToRender.length !== 0 ?
                <ul className='MoviesCardList__container'>
                  {cardsToRender.map((movie) => {
                    return <MovieCard key={movie.id || movie.movieId} movie={movie} saved={saved} handleButtonSave={handleButtonSave} handleButtonDelete={handleButtonDelete} />
                  })}
                </ul>
                :
                <p className='MoviesCardList__text'>Ничего не найдено</p>
            }
            {
              numberOfRenderedCards < maxCards ?
                <button className='MoviesCardList__button button-hover' onClick={handleButtonMore}>Ещё</button>
                :
                <></>
            }
          </section>
      }
    </>
  );
}

export default MoviesCardList