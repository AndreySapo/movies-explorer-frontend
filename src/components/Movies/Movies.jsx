import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../SavedMovies/MoviesCard';
import Layout from '../Layout/Layout';
import { useState } from 'react';

// ! компонент страницы с поиском по фильмам
function Movies({ isLoggedIn, onOpen }) {
  // TODO перед деплоем переставить isLoggedIn!!!

  

  return (
    <Layout isLoggedIn={true} onOpen={onOpen}>
      <main className="Movies">
        <SearchForm />
        <MoviesCardList />
      </main>
    </Layout>
  );
}

export default Movies