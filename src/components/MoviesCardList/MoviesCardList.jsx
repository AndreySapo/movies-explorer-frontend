import './MoviesCardList.css';
import movies from '../../utils/movies.json'; // TODO удалить в дальнейшем
import MovieCard from '../MovieCard/MovieCard';

// !  компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
function MoviesCardList({ saved }) {
  const slicedMovies = movies.slice(0, 8);

  return (
    <section className="MoviesCardList">
      <ul className='MoviesCardList__container'>
        {
          slicedMovies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} saved={saved}/>
          })
        }
      </ul>
      <button className='MoviesCardList__button button-hover'>Ещё</button>
    </section>
  );
}

export default MoviesCardList