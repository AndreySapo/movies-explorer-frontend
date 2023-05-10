import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import lens from '../../images/lens.svg';
import { useFormWithValidation } from '../../utils/Validation';
import { useEffect } from 'react';


// ! форма поиска, куда пользователь будет вводить запрос
function SearchForm({ handleSearchMovie, isChecked, handleCheck, saved, handleSearchSavedMovie }) {
  const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();

  useEffect(()=>{
    if (!saved) {
      setValues({text: JSON.parse(localStorage.getItem('search-text'))})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function onSubmit(event) {
    event.preventDefault();
    if (!saved) {
      if (isValid) {
        handleSearchMovie(values)
      }
    } else {
      if (isValid) {
        handleSearchSavedMovie(values)
      }
    }
  }

  return (
    <section className="SearchForm">
      <div className='SearchForm__main-container'>
        <form className="SearchForm__search-container" onSubmit={onSubmit} noValidate>
          <input
            type="text"
            name='text'
            value={values.text || ''}
            onChange={handleChange}
            aria-label='Поле для ввода текста'
            className='SearchForm__input'
            minLength={2}
            required
          />
          {
            isValid ?
              <></>
              :
              <p className='SearchForm__input-error'>{errors.text}</p>
          }
          {
            values.text ?
              <></> :
              <div className="SearchForm__input-background">
                <img src={lens} alt="" className='SearchForm__input-background-img' />
                <p className='SearchForm__input-background-text'>Фильм</p>
              </div>
          }
          <button
            type="submit"
            aria-label='Кнопка поиска'
            className='SearchForm__submit button-hover'
          />

        </form>
        <div className="splitter" />
        <FilterCheckbox isChecked={isChecked} handleCheck={handleCheck}/>
      </div>
    </section >
  );
}

export default SearchForm