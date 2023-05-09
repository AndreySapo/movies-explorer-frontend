import './FilterCheckbox.css'

// ! фильтр с чекбоксом «Только короткометражки»
function FilterCheckbox({isChecked, handleCheck}) {
  return (
    <div className='FilterCheckbox'>
      <label className='FilterCheckbox__container button-hover'>
        <input type="checkbox" className='FilterCheckbox__checkbox-input ' checked={isChecked} onChange={handleCheck} />
        <span className="FilterCheckbox__checkbox-slider FilterCheckbox__checkbox-round" />
      </label>
      <p className='FilterCheckbox__checkbox-text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox