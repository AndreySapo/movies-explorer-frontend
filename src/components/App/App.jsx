import './App.css';
import { Route, Routes } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import MenuPopup from '../MenuPopup/MenuPopup';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);

  const handleMenuPopupOpen = function() {
    setIsMenuPopupOpen(true);
  }
  const handleMenuPopupClose = function() {
    setIsMenuPopupOpen(false);
  }

  return (
    <div className="App">
      <MenuPopup  isOpen={isMenuPopupOpen} onClose={handleMenuPopupClose}/>
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
        <Route path="/movies/*" element={<Movies isLoggedIn={isLoggedIn} onOpen={handleMenuPopupOpen}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
