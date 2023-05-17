import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Layout from '../Layout/Layout';
import Preloader from '../Preloader/Preloader';

// ! компонент страницы с поиском по фильмам
function Movies({ isLoggedIn, onOpen, handleSearchMovie, movies, shortsIsChecked, handleCheck, handleButtonSave, handleButtonDelete, loading }) {

  const header = true;
  const footer = true;

  return (
    <Layout isLoggedIn={isLoggedIn} onOpen={onOpen} header={header} footer={footer}>
      <main className="Movies">
        <SearchForm handleSearchMovie={handleSearchMovie} isChecked={shortsIsChecked} handleCheck={handleCheck}/>
        {loading ? <Preloader /> : <MoviesCardList movies={movies} handleButtonSave={handleButtonSave} handleButtonDelete={handleButtonDelete}/>}
      </main>
    </Layout>
  );
}

export default Movies