import './Navigation.css';
import menuBtnImg from '../../images/open-button.svg';
import NavigationLinks from '../NavigationLinks/NavigationLinks';


function Navigation({ onOpen }) {

  return (
    <>
      <NavigationLinks/>
      <button className='header__menu-btn button-hover' onClick={onOpen}>
        <img src={menuBtnImg} alt="Кнопка меню" className='header__img' />
      </button>
    </>
  );
}

export default Navigation