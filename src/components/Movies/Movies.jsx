import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../SavedMovies/MoviesCard';

// ! компонент страницы с поиском по фильмам
function Movies() {
  return (
    <div className="Movies">

      <SearchForm>
        <FilterCheckbox/>
      </SearchForm>

      <Preloader/>

      <MoviesCardList>
        {/* <MoviesCard/> */}
      </MoviesCardList>

    </div>
    );
}

export default Movies