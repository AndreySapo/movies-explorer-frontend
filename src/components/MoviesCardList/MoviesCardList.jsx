import './MoviesCardList.css';
import movies from '../../utils/movies.json'; // TODO удалить в дальнейшем
import { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';

// !  компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
function MoviesCardList() {
  const slicedMovies = movies.slice(0, 12);

  return (
    <section className="MoviesCardList">
      <ul className='MoviesCardList__container'>
        {
          slicedMovies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie}/>
          })
        }
      </ul>
      <button className='MoviesCardList__button'>Ещё</button>
    </section>
  );
}

export default MoviesCardList