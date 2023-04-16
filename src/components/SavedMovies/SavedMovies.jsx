import MoviesCard from './MoviesCard';
import MoviesCardList from './MoviesCardList';
import './SavedMovies.css';

// ! компонент страницы с поиском по фильмам
function SavedMovies() {
  return (
    <div className="SavedMovies">

      {/* <SearchForm>
        <FilterCheckbox/>
      </SearchForm> */}

      {/* <Preloader/> */}

      <MoviesCardList>
        {/* <MoviesCard/> */}
      </MoviesCardList>

    </div>
    );
}

export default SavedMovies