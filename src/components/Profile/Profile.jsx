import Layout from '../Layout/Layout';
import './Profile.css'

// ! компонент страницы изменения профиля
function Profile({ isLoggedIn, onOpen }) {
  const header = true;
  const footer = false;
  return (
    <Layout isLoggedIn={true} onOpen={onOpen} header={header} footer={footer} >
      <main className='Profile'>
        <h1 className="Profile__title">Привет, Виталий!</h1>
        <ul className="Profile__list">
          <li className='Profile__list-el'>
            <h2 className="Profile__list-el-title">Имя</h2>
            <p className="Profile__list-el-text">Виталий</p>
          </li>
          <li className='Profile__list-el'>
            <h2 className="Profile__list-el-title">E-mail</h2>
            <p className="Profile__list-el-text">pochta@yandex.ru</p>
          </li>
        </ul>
        <button className='Profile__edit-button'>Редактировать</button>
        <button className='Profile__exit-button'>Выйти из аккаунта</button>
      </main>
    </Layout>
  );
}

export default Profile