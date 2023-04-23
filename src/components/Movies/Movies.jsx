import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Layout from '../Layout/Layout';
import Preloader from '../Preloader/Preloader';

// ! компонент страницы с поиском по фильмам
function Movies({ isLoggedIn, onOpen }) {
  // TODO перед деплоем переставить isLoggedIn!!!

  const loading = false;

  return (
    <Layout isLoggedIn={true} onOpen={onOpen}>
      <main className="Movies">
        <SearchForm />
        {loading ? <Preloader /> : <MoviesCardList />}
      </main>
    </Layout>
  );
}

export default Movies