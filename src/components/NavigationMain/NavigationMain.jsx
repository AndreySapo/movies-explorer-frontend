import { NavLink } from 'react-router-dom';

// ! компонент с навигацией по странице «О проекте»
function NavigationMain() {
  return (
    <div className="NavigationMain">
      <ul className='Header__container'>
        <li>
          <NavLink to='/signup' className='Header__landing-link link-hover'>Регистрация</NavLink>
        </li>
        <li>
          <NavLink to='/signin' className='Header__landing-link Header__landing-link_colored button-hover'>Войти</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMain