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
  }, [isLoggedIn])

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
    setCurrentUser({});
    navigate('/', { replace: true });
    setIsLoggedIn(false);
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
                onOpen={handleMenuPopupOpen} handleSignOut={handleSignOut} />} />
          {/* незащищенный финальный маршрут */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
