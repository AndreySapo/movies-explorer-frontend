import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import NavigationMain from '../NavigationMain/NavigationMain';

// ! компонент, который отрисовывает шапку сайта на страницу
function Header({ isLoggedIn, onOpen }) {
  return (
    <header className="Header">
      <Link to='/' className='Header__logo-link'>
        <img src={logo} className='Header__logo' alt='Логотип' />
      </Link>
      {isLoggedIn ? <Navigation onOpen={onOpen} /> : <NavigationMain />}
    </header>
  );
}

export default Header