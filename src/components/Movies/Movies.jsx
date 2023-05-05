import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Layout from '../Layout/Layout';
import Preloader from '../Preloader/Preloader';

// ! компонент страницы с поиском по фильмам
function Movies({ isLoggedIn, onOpen }) {
  // TODO перед деплоем переставить isLoggedIn!!!

  const loading = false;
  const header = true;
  const footer = true;

  return (
    <Layout isLoggedIn={isLoggedIn} onOpen={onOpen} header={header} footer={footer}>
      <main className="Movies">
        <SearchForm />
        {loading ? <Preloader /> : <MoviesCardList />}
      </main>
    </Layout>
  );
}

export default Movies