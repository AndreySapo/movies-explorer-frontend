import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';

// ! компонент страницы регистрации
function Register() {
  return (
    <main className="Register">
      <Link to='/' className='Register__logo'><img src={logo} alt="Логотип" /></Link>
      <h1 className="Register__title">Добро пожаловать!</h1>
      <form className='Register__form'>
        <ul className="Register__form-container">
          <li className='Register__form-element'>
            <h2 className="Register__form-element-title">Имя</h2>
            <input
              type="text"
              name="name"
              id="name"
              className="Register__form-element-input"
              minLength={2}
            />
            <span className='Register__form-element-error' />
          </li>
          <li className='Register__form-element'>
            <h2 className="Register__form-element-title">E-mail</h2>
            <input
              type="email"
              name="email"
              id="email"
              className="Register__form-element-input"
              required
            />
            <span className='Register__form-element-error' />
          </li>
          <li className='Register__form-element'>
            <h2 className="Register__form-element-title">Пароль</h2>
            <input
              type="password"
              name="password"
              id="password"
              className="Register__form-element-input"
              minLength={2}
              required
            />
            <span className='Register__form-element-error' />
          </li>
        </ul>
        <button type="submit" className='Register__button'>Зарегистрироваться</button>
      </form>
      <Link to='/signin' className='Register__redirect-link'>Уже зарегистрированы?&nbsp;<span>Войти</span></Link>
    </main>
  );
}

export default Register