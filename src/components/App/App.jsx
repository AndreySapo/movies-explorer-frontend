import './App.css';
import { Route, Routes } from 'react-router';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import MenuPopup from '../MenuPopup/MenuPopup';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
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
        <Route path="/saved-movies/*" element={<SavedMovies isLoggedIn={isLoggedIn} onOpen={handleMenuPopupOpen}/>} />
        <Route path="/profile/*" element={<Profile isLoggedIn={isLoggedIn} onOpen={handleMenuPopupOpen}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
