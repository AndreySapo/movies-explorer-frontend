import './SavedMovies.css';
import Layout from '../Layout/Layout';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

// ! компонент страницы с поиском по фильмам
function SavedMovies({ isLoggedIn, onOpen, movies, handleButtonDelete }) {

  const saved = true;
  const header = true;
  const footer = true;

  return (
    <Layout isLoggedIn={isLoggedIn} onOpen={onOpen} header={header} footer={footer}>
      <main className='SavedMovies'>
        <SearchForm />
        <MoviesCardList movies={movies} saved={saved} handleButtonDelete={handleButtonDelete}/>
      </main>
    </Layout>
  );
}

export default SavedMovies