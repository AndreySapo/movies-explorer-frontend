import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className="App">

      <Header/>

      <Main/>

      <Movies/>

      <SavedMovies/>

      <Login/>

      <Profile/>

      <Register/>

      <NotFound/>

      <Footer/>

    </div>
  );
}

export default App;
