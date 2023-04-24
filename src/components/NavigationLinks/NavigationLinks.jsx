import './NavigationLinks.css'
import account from '../../images/account.svg';
import { NavLink } from 'react-router-dom';

function NavigationLinks({ isOpen, onClose }) {
  const NavigationLinksClasses = isOpen ? 'NavigationLinks NavigationLinks_active' : 'NavigationLinks'

  return (
    <div className={NavigationLinksClasses}>
      <ul className='NavigationLinks__links-list'>
        <li className='NavigationLinks__links-el'>
          <NavLink to='/' className='NavigationLinks__link NavigationLinks__link_disable link-hover' onClick={onClose}>Главная</NavLink>
        </li>
        <li className='NavigationLinks__links-el'>
          <NavLink to='/movies' className='NavigationLinks__link link-hover' onClick={onClose}>Фильмы</NavLink>
        </li>
        <li className='NavigationLinks__links-el'>
          <NavLink to='/saved-movies' className='NavigationLinks__link link-hover' onClick={onClose}>Сохраненные фильмы</NavLink>
        </li>
      </ul>
      <NavLink to='/profile' className='NavigationLinks__profile-link link-hover' onClick={onClose}>
        <p className='NavigationLinks__profile-link-text'>Аккаунт</p>
        <img className='NavigationLinks__profile-link-img' src={account} alt="аватар" />
      </NavLink>
    </div>
  );
}

export default NavigationLinks