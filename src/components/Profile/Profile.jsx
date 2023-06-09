import Layout from '../Layout/Layout';
import './Profile.css';
import { CurrentUserContext } from '../../context/UserContext';
import React from 'react';
import { useFormWithValidation } from '../../hooks/Validation';
import successImg from '../../images/success.svg';
import failImg from '../../images/fail.svg';
import Preloader from '../Preloader/Preloader';

// ! компонент страницы изменения профиля
function Profile({ isLoggedIn, onOpen, handleSignOut, handleEditProfile, loading }) {
  const { currentUser } = React.useContext(CurrentUserContext);
  const { values,
    handleChange,
    errors,
    isValid,
    setValues } = useFormWithValidation();
  const [editState, setEditState] = React.useState(false);
  const [fetchErrorText, setFetchErrorText] = React.useState('');
  const [popupState, setPopupState] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const header = true;
  const footer = false;

  const isButtonActive = isValid
    &&
    (values.name !== currentUser.name || values.email !== currentUser.email);

  React.useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email
    })
  }, [currentUser.email, currentUser.name, setValues])

  function invertEditState() {
    setEditState(!editState);
  }

  function onSubmit(event) {
    event.preventDefault();
    if (isValid) {
      handleEditProfile(values, setFetchErrorText, setEditState, setPopupState, setIsPopupOpen)
    }
  }

  function closePopup() {
    setIsPopupOpen(false)
  }

  return (
    <>
      {
        loading ?
          <Preloader />
          :
          <Layout isLoggedIn={isLoggedIn} onOpen={onOpen} header={header} footer={footer} >
            <main className='Profile'>
              <h1 className="Profile__title">Привет, {currentUser.name}!</h1>
              <form className='Profile__form' onSubmit={onSubmit} noValidate>
                <ul className="Profile__list">
                  <li className='Profile__list-el'>
                    <h2 className="Profile__list-el-title">Имя</h2>
                    <input
                      className='Profile__list-el-input'
                      type="text"
                      name='name'
                      value={values.name || ''}
                      onChange={handleChange}
                      disabled={!editState}
                      required
                    />
                    <span className="Profile__list-el-input-error">{errors.name}</span>
                  </li>
                  <li className='Profile__list-el'>
                    <h2 className="Profile__list-el-title">E-mail</h2>
                    <input
                      className='Profile__list-el-input'
                      type="email"
                      name='email'
                      value={values.email || ''}
                      onChange={handleChange}
                      disabled={!editState}
                      required
                    />
                    <span className="Profile__list-el-input-error">{errors.email}</span>
                  </li>
                </ul>
                <p className="Profile__form-error">{fetchErrorText}</p>
                {
                  editState
                    ?
                    <button
                      type='submit'
                      className={
                        !isButtonActive ?
                          'Profile__submit-button Profile__submit-button_disabled button-hover'
                          :
                          'Profile__submit-button button-hover'
                      }
                      disabled={!isButtonActive}
                    >
                      Сохранить
                    </button>
                    :
                    <button
                      type='button'
                      onClick={invertEditState}
                      className='Profile__edit-button button-hover'
                    >
                      Редактировать
                    </button>
                }
              </form>
              {
                editState ?
                  <></>
                  :
                  <button className='Profile__exit-button button-hover' onClick={handleSignOut}>Выйти из аккаунта</button>
              }
              {/* <div className='Profile__popup Profile__popup_active'> */}
              <div className={
                isPopupOpen ?
                  'Profile__popup Profile__popup_active'
                  :
                  'Profile__popup'
              }>
                <div className="Profile__popup-container">
                  {popupState ?
                    <img src={successImg} alt="" className='Profile__popup-img' />
                    :
                    <img src={failImg} alt="" className='Profile__popup-img' />
                  }
                  {
                    popupState ?
                      <p className='Profile__popup-text'>Данные успешно обновлены</p>
                      :
                      <p className='Profile__popup-text'>Данные не были обновлены</p>
                  }
                  <button className='Profile__popup-btn-close' onClick={closePopup} />
                </div>
              </div>
            </main>
          </Layout>
      }
    </>
  );
}

export default Profile