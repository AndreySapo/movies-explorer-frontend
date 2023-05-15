import './SavedMovies.css';
import Layout from '../Layout/Layout';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

// ! компонент страницы с поиском по фильмам
function SavedMovies({ isLoggedIn, onOpen, movies, handleButtonDelete, handleSearchSavedMovie, loading, findedSavedMovies }) {

  const saved = true;
  const header = true;
  const footer = true;

  return (
    <Layout isLoggedIn={isLoggedIn} onOpen={onOpen} header={header} footer={footer}>
      <main className='SavedMovies'>
        <SearchForm saved={saved} handleSearchSavedMovie={handleSearchSavedMovie}/>
        {loading ? <Preloader/> : <MoviesCardList movies={movies} saved={saved} handleButtonDelete={handleButtonDelete} findedSavedMovies={findedSavedMovies}/>}
      </main>
    </Layout>
  );
}

export default SavedMovies