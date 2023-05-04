import Layout from '../Layout/Layout';
import './Profile.css';
import { CurrentUserContext } from '../../utils/UserContext';
import React from 'react';

// ! компонент страницы изменения профиля
function Profile({ isLoggedIn, onOpen, handleSignOut }) {
  const currentUser = React.useContext(CurrentUserContext);
  const header = true;
  const footer = false;

  // TODO сделать не текстовые поля, а инпуты для редактирования
  return (
    <Layout isLoggedIn={isLoggedIn} onOpen={onOpen} header={header} footer={footer} >
      <main className='Profile'>
        <h1 className="Profile__title">Привет, {currentUser.name}!</h1>
        <ul className="Profile__list">
          <li className='Profile__list-el'>
            <h2 className="Profile__list-el-title">Имя</h2>
            <p className="Profile__list-el-text">{currentUser.name}</p>
          </li>
          <li className='Profile__list-el'>
            <h2 className="Profile__list-el-title">E-mail</h2>
            <p className="Profile__list-el-text">{currentUser.email}</p>
          </li>
        </ul>
        <button className='Profile__edit-button button-hover'>Редактировать</button>
        <button className='Profile__exit-button button-hover' onClick={handleSignOut}>Выйти из аккаунта</button>
      </main>
    </Layout>
  );
}

export default Profile