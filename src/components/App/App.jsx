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
import { CurrentUserContext } from '../../utils/UserContext';
import { exampleMainApi } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});

  const [registerErrorResponse, setRegisterErrorResponse] = React.useState();
  const [loginErrorResponse, setLoginErrorResponse] = React.useState();

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
      exampleMainApi.getUserInfo()
        .then((user) => {
          setCurrentUser(user)
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    if (token) {
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
    navigate('/', { replace: true });
    setIsLoggedIn(false);
  }

  function handleEditProfile(values, setFetchErrorText, setEditState) {
    exampleMainApi.setUserInfo(values)
      .then((user) => {
        setCurrentUser({
          email: user.email,
          name: user.name
        })
      })
      .then (() => {
        setEditState(false);
        setFetchErrorText('')
      })
      .catch((err) => {
        if (err === 409) {
          setFetchErrorText('Пользователь с таким email уже существует.')
        } else if (err === 500) {
          setFetchErrorText('При обновлении профиля произошла ошибка.')
        } else {
          console.log(err)
        }
      })
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <MenuPopup isOpen={isMenuPopupOpen} onClose={handleMenuPopupClose} />
        <Routes>
          {/* незащищенные маршруты */}
          <Route
            path='/signup/*'
            element={
              <Register
                handleSignUp={handleSignUp}
                errorResponse={registerErrorResponse}
              />
            }
          />
          <Route
            path='/signin/*'
            element={
              <Login
                handleSignIn={handleSignIn}
                errorResponse={loginErrorResponse}
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
