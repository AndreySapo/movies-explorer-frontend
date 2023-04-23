import './MenuPopup.css';
import closeButtonImage from '../../images/close-button.svg';
import NavigationLinks from '../NavigationLinks/NavigationLinks';

function MenuPopup({ isOpen, onClose }) {
  const classesPopup = isOpen ? 'MenuPopup MenuPopup_active' : 'MenuPopup'

  return (
    <section className={classesPopup}>
      <div className="MenuPopup__container">
        <button className="MenuPopup__button" onClick={onClose}>
          <img src={closeButtonImage} alt="кнопка закрытия меню" />
        </button>
        <NavigationLinks isOpen={isOpen} onClose={onClose} />
      </div>
    </section>
  );
}

export default MenuPopup