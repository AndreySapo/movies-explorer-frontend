import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import lens from '../../images/lens.svg';
import findBtn from '../../images/find.svg';


// ! форма поиска, куда пользователь будет вводить запрос
function SearchForm() {
  return (
    <section className="SearchForm">
      <div className='SearchForm__main-container'>
        <form className="SearchForm__search-container">
          <input
            type="text"
            aria-label='Поле для ввода текста'
            className='SearchForm__input'
          />
          <div className="SearchForm__input-background">
            <img src={lens} alt="" className='SearchForm__input-background-img' />
            <p className='SearchForm__input-background-text'>Фильм</p>
          </div>
          <button
            type="submit"
            aria-label='Кнопка поиска'
            className='SearchForm__submit'
          >
            <img
              src={findBtn}
              alt="Кнопка поиска"
              className='SearchForm__submit-img'
            />
          </button>

        </form>
        <div className="splitter" />
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm