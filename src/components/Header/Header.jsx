import { Route, Routes } from 'react-router';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

// ! компонент, который отрисовывает шапку сайта на страницу
function Header() {
  return (
    <header className="Header">
      <Routes>
        <Route path="/" element={
          <>
            <Link to='/' className='Header__logo-link'>
              <img src={logo} className='Header__logo' alt='Логотип' />
            </Link>
            <ul className='Header__container'>
              <li>
                <Link to='/signup' className='Header__landing-link'>Регистрация</Link>
              </li>
              <li>
                <Link to='/signin' className='Header__landing-link Header__landing-link_colored'>Войти</Link>
              </li>
            </ul>
          </>
        } />
      </Routes>
    </header>
  );
}

export default Header