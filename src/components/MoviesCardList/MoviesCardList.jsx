import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';
import { useEffect, useState } from 'react';

// !  компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
function MoviesCardList({movies, saved, handleButtonSave, handleButtonDelete}) {
  const [cardsToRender, setCardsToRender] = useState([]);
  const [maxCards, setMaxCards] = useState(0)
  const [numberOfRenderedCards, setNumberOfRenderedCards] = useState(12);
  const [increaseMaxCards, setIncreaseMaxCards] = useState(3);
  const localStorageMovies = JSON.parse(localStorage.getItem('found-movies'));

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
    <section className="MoviesCardList">
      {
        cardsToRender.length !== 0 ?
          <ul className='MoviesCardList__container'>
            {cardsToRender.map((movie) => {
              return <MovieCard key={movie.id||movie.movieId} movie={movie} saved={saved} handleButtonSave={handleButtonSave} handleButtonDelete={handleButtonDelete}/>
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
  );
}

export default MoviesCardList