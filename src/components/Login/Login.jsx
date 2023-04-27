import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';

// ! компонент страницы регистрации
function Login() {
  return (
    <main className="Login">
      <Link to='/' className='Login__logo'><img src={logo} alt="Логотип" /></Link>
      <h1 className="Login__title">Рады видеть!</h1>
      <form className='Login__form'>
        <ul className="Login__form-container">
          <li className='Login__form-element'>
            <h2 className="Login__form-element-title">E-mail</h2>
            <input
              type="email"
              name="email"
              id="email"
              className="Login__form-element-input"
              required
            />
            <span className='Login__form-element-error' />
          </li>
          <li className='Login__form-element'>
            <h2 className="Login__form-element-title">Пароль</h2>
            <input
              type="password"
              name="password"
              id="password"
              className="Login__form-element-input"
              minLength={2}
              required
            />
            <span className='Login__form-element-error' />
          </li>
        </ul>
        <button type="submit" className='Login__button button-hover'>Войти</button>
      </form>
      <Link to='/signup' className='Login__redirect-link link-hover'>Ещё не зарегистрированы?&nbsp;<span>Регистрация</span></Link>
    </main>
  );
}

export default Login