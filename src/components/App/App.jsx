import React from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import MenuPopup from '../MenuPopup/MenuPopup';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import { CurrentUserContext } from '../../context/UserContext';
import { exampleMainApi } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { exampleMoviesApi } from '../../utils/MoviesApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});

  const [registerErrorResponse, setRegisterErrorResponse] = React.useState();
  const [loginErrorResponse, setLoginErrorResponse] = React.useState();

  const [allMovies, setAllMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [moviesFromSearch, setMoviesFromSearch] = React.useState([]);

  const [shortsIsChecked, setShortsIsChecked] = React.useState(false);

  const token = localStorage.getItem('jwt');
  const navigate = useNavigate();

  function handleMenuPopupOpen() {
    setIsMenuPopupOpen(true);
  }
  function handleMenuPopupClose() {
    setIsMenuPopupOpen(false);
  }

  React.useEffect(() => {
    if (isLoggedIn) {
      setLoading(true);
      Promise.all([exampleMainApi.getUserInfo(), exampleMoviesApi.getMovies(), exampleMainApi.getMovies()])
        .then(([getUserInfoResult, MoviesApiGetMoviesResult, MainApiGetMoviesResult]) => {
          setCurrentUser(getUserInfoResult);
          setAllMovies(MoviesApiGetMoviesResult);
          setSavedMovies(MainApiGetMoviesResult.data)
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
        .finally(() => setLoading(false))
    }
  }, [isLoggedIn]);

  // получаем информацию при токене и меняем состояние страницы
  React.useEffect(() => {
    if (token) {
      setLoading(true);
      exampleMainApi.getUserInfo()
        .then((result) => {
          if (result) {
            setIsLoggedIn(true);
            navigate({ replace: false });
          }
        })
        .catch(() => {
          setIsLoggedIn(false);
        })
        .finally(() => setLoading(false))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  function handleSignIn({ email, password }) {
    exampleMainApi.signin({ email, password })
      .then(({ token }) => {
        localStorage.setItem('jwt', token);
        document.cookie = `jwt=${token}`;
        navigate('/movies', { replace: true });
        setIsLoggedIn(true);
        setLoginErrorResponse();
      })
      .catch((err) => {
        setLoginErrorResponse(err);
      })
  }

  function handleSignUp({ email, password, name }) {
    exampleMainApi.signup({ email, password, name })
      .then(() => {
        handleSignIn({ email, password });
        setRegisterErrorResponse();
      })
      .catch((err) => {
        setRegisterErrorResponse(err);
      })
  }

  function handleSignOut() {
    document.cookie = "jwt=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    localStorage.removeItem('jwt');
    localStorage.removeItem('found-movies');
    localStorage.removeItem('search-text');
    localStorage.removeItem('shorts');
    setCurrentUser({});
    setMoviesFromSearch([]);
    navigate('/', { replace: true });
    setIsLoggedIn(false);
  }

  function handleEditProfile(values, setFetchErrorText, setEditState, setPopupState, setIsPopupOpen) {
    exampleMainApi.setUserInfo(values)
      .then((user) => {
        setCurrentUser({
          email: user.email,
          name: user.name
        })
      })
      .then(() => {
        setEditState(false);
        setFetchErrorText('');
        setIsPopupOpen(true);
        setPopupState(true);
      })
      .catch((err) => {
        if (err === 409) {
          setFetchErrorText('Пользователь с таким email уже существует.')
          setIsPopupOpen(true);
          setPopupState(false);
        } else if (err === 500) {
          setFetchErrorText('При обновлении профиля произошла ошибка.')
          setIsPopupOpen(true);
          setPopupState(false);
        } else {
          console.log(err);
          setIsPopupOpen(true);
          setPopupState(false);
        }
      })
  }

  function handleSearchMovie(values) {
    const searchArray = allMovies.filter(movie => movie.nameRU.toLowerCase().includes(values.text.toLowerCase()));
    shortsIsChecked ? setMoviesFromSearch(searchArray.filter(movie => movie.duration < 40)) : setMoviesFromSearch(searchArray);
    localStorage.setItem('found-movies', JSON.stringify(allMovies.filter(movie => movie.nameRU.toLowerCase().includes(values.text.toLowerCase()))));
    localStorage.setItem('search-text', JSON.stringify(values.text));
    localStorage.setItem('shorts', JSON.stringify(shortsIsChecked));
  }

  const handleCheck = () => {
    setShortsIsChecked(!shortsIsChecked)
  }

  function handleButtonSave(movie, setIsSaveButtonActive) {
    if (!savedMovies.find(savedMovie => savedMovie.movieId === movie.id)) {
      exampleMainApi.addMovie(movie)
        .then((savedMovie) => {
          setSavedMovies([...savedMovies, savedMovie])
          setIsSaveButtonActive(true);
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
    }
  }

  function handleSearchSavedMovie(values) {
    const searchArray = savedMovies.filter(movie => movie.nameRU.toLowerCase().includes(values.text.toLowerCase()));
    console.log(searchArray)
    setSavedMovies(searchArray)
  }

  function handleButtonDelete(movie, saved) {
    // https://code.mu/ru/javascript/framework/react/book/prime/structures/removing-elements/
    if (!saved) {
      exampleMainApi.deleteMovie(savedMovies.find(savedMovie => savedMovie.movieId === movie.id)._id)
        .then(() => {
          const delIndex = savedMovies.findIndex(savedMovie => savedMovie.movieId === movie.id);
          setSavedMovies([...savedMovies.slice(0, delIndex), ...savedMovies.slice(delIndex + 1)])
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
    } else {
      exampleMainApi.deleteMovie(movie._id)
        .then(() => {
          const delIndex = savedMovies.indexOf(movie);
          setSavedMovies([...savedMovies.slice(0, delIndex), ...savedMovies.slice(delIndex + 1)])
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
    }
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={{ currentUser, savedMovies }}>
        <MenuPopup isOpen={isMenuPopupOpen} onClose={handleMenuPopupClose} />
        <Routes>
          {/* незащищенные маршруты */}
          <Route
            path='/signup/*'
            element={
              <Register
                handleSignUp={handleSignUp}
                errorResponse={registerErrorResponse}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path='/signin/*'
            element={
              <Login
                handleSignIn={handleSignIn}
                errorResponse={loginErrorResponse}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/"
            element={
              <Main isLoggedIn={isLoggedIn} />
            }
          />
          {/* защищенные маршруты */}
          <Route
            path="/movies/*"
            element={
              <ProtectedRoute
                component={Movies}
                isLoggedIn={isLoggedIn}
                onOpen={handleMenuPopupOpen}
                handleSearchMovie={handleSearchMovie}
                movies={moviesFromSearch}
                shortsIsChecked={shortsIsChecked}
                handleCheck={handleCheck}
                handleButtonSave={handleButtonSave}
                handleButtonDelete={handleButtonDelete}
                loading={loading}
              />
            }
          />
          <Route
            path="/saved-movies/*"
            element={
              <ProtectedRoute
                component={SavedMovies}
                isLoggedIn={isLoggedIn}
                onOpen={handleMenuPopupOpen}
                movies={savedMovies}
                handleButtonDelete={handleButtonDelete}
                handleSearchSavedMovie={handleSearchSavedMovie}
                loading={loading}
              />
            }
          />
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute
                component={Profile}
                isLoggedIn={isLoggedIn}
                onOpen={handleMenuPopupOpen}
                handleSignOut={handleSignOut}
                handleEditProfile={handleEditProfile}
                loading={loading}
              />
            }
          />
          {/* незащищенный финальный маршрут */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
