import './SavedMovies.css';
import Layout from '../Layout/Layout';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

// ! компонент страницы с поиском по фильмам
function SavedMovies({ isLoggedIn, onOpen }) {

  const saved = true;



  return (
    <Layout isLoggedIn={true} onOpen={onOpen}>
      <main className='SavedMovies'>
        <SearchForm />
        <MoviesCardList saved={saved} />
      </main>
    </Layout>
  );
}

export default SavedMovies