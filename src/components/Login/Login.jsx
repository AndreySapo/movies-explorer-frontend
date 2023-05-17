import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../hooks/Validation';
import { useEffect, useState } from 'react';

// ! компонент страницы регистрации
function Login({ handleSignIn, errorResponse, isLoggedIn }) {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const [fetchTextError, setFetchTextError] = useState('');

  useEffect(() => {
    const submitButton = document.querySelector('.Login__button');

    if (isValid === true) {
      submitButton.classList.remove('Login__button_disabled')
      submitButton.removeAttribute('disabled')
    } else {
      submitButton.classList.add('Login__button_disabled')
      submitButton.setAttribute('disabled', true)
    }
  }, [isValid])

  function onSubmit(event) {
    event.preventDefault();
    if (isValid) {
      handleSignIn(values);
    } else {
      return;
    }
    resetForm();
  }

  useEffect(() => {
    if (errorResponse === 401) {
      setFetchTextError('Вы ввели неправильный логин или пароль.')
    } else if (errorResponse === 500) {
      setFetchTextError('На сервере произошла ошибка.')
    } else if (errorResponse === '') {
      setFetchTextError('')
    }
  }, [errorResponse])

  return (
    <>
      {
        isLoggedIn ?
          navigate(-1)
          :
          <main className="Login">
            <Link to='/' className='Login__logo'><img src={logo} alt="Логотип" /></Link>
            <h1 className="Login__title">Рады видеть!</h1>
            <form className='Login__form' onSubmit={onSubmit} noValidate>
              <ul className="Login__form-container">
                <li className='Login__form-element'>
                  <h2 className="Login__form-element-title">E-mail</h2>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="Login__form-element-input"
                    value={values.email || ''}
                    onChange={handleChange}
                    pattern='^[-a-z0-9!#$%&*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&*+/=?^_`{|}~]+)*@(?:[a-z0-9](?:[-a-z0-9]*[a-z0-9])?\.)+[a-z0-9](?:[-a-z0-9]*[a-z0-9])?$'
                    required
                  />
                  <span className='Login__form-element-error'>{errors.email}</span>
                </li>
                <li className='Login__form-element'>
                  <h2 className="Login__form-element-title">Пароль</h2>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="Login__form-element-input"
                    minLength={2}
                    value={values.password || ''}
                    onChange={handleChange}
                    required
                  />
                  <span className='Login__form-element-error'>{errors.password}</span>
                </li>
              </ul>
              <button type="submit" className='Login__button Login__button_disabled button-hover' disabled={true}>Войти</button>
            </form>
            <p className='Login__fetch-error'>{fetchTextError}</p>
            <Link to='/signup' className='Login__redirect-link link-hover'>Ещё не зарегистрированы?&nbsp;<span>Регистрация</span></Link>
          </main>
      }
    </>
  );
}

export default Login