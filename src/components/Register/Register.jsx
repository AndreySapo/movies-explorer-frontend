import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../utils/Validation';
import { useEffect } from 'react';

// ! компонент страницы регистрации
function Register({handleSignUp, errorResponse}) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function onSubmit(event) {
    event.preventDefault();
    if (isValid) {
      handleSignUp(values);
    } else {
      return;
    }
    resetForm();
  }

  useEffect(() => {
    if (errorResponse === 409) {
      console.log('Пользователь с таким email уже существует.')
    } else if (errorResponse === '')
    {
      console.log('удаляем ошибку')
    }
  }, [errorResponse])

  return (
    <main className="Register">
      <Link to='/' className='Register__logo'><img src={logo} alt="Логотип" /></Link>
      <h1 className="Register__title">Добро пожаловать!</h1>
      <form className='Register__form' onSubmit={onSubmit} noValidate>
        <ul className="Register__form-container">
          <li className='Register__form-element'>
            <h2 className="Register__form-element-title">Имя</h2>
            <input
              type="text"
              name="name"
              id="name"
              className="Register__form-element-input"
              minLength={2}
              value={values.name || ''}
              onChange={handleChange}
            />
            <span className='Register__form-element-error'>{errors.name}</span>
          </li>
          <li className='Register__form-element'>
            <h2 className="Register__form-element-title">E-mail</h2>
            <input
              type="email"
              name="email"
              id="email"
              className="Register__form-element-input"
              value={values.email || ''}
              onChange={handleChange}
              pattern='^[-a-z0-9!#$%&*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&*+/=?^_`{|}~]+)*@(?:[a-z0-9](?:[-a-z0-9]*[a-z0-9])?\.)+[a-z0-9](?:[-a-z0-9]*[a-z0-9])?$'
              required
            />
            <span className='Register__form-element-error'>{errors.email}</span>
          </li>
          <li className='Register__form-element'>
            <h2 className="Register__form-element-title">Пароль</h2>
            <input
              type="password"
              name="password"
              id="password"
              className="Register__form-element-input"
              minLength={2}
              value={values.password || ''}
              onChange={handleChange}
              required
            />
            <span className='Register__form-element-error'>{errors.password}</span>
          </li>
        </ul>
        <button type="submit" className='Register__button button-hover'>Зарегистрироваться</button>
      </form>
      <Link to='/signin' className='Register__redirect-link link-hover'>Уже зарегистрированы?&nbsp;<span>Войти</span></Link>
    </main>
  );
}

export default Register