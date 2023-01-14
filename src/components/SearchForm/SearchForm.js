import './SearchForm.css';
import {useState} from 'react'
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import iconSearch from '../../images/search-icon.svg'
function SearchForm({onSearch,onFilter}){
    const [inputSearch, setInputSearch] = useState('')
    const [errorInput, setErrorInput] = useState('')
    const handleSearch = (evt) => {
        evt.preventDefault()
        onSearch(inputSearch)
    }
    const handleInputSearch = (evt) => {
        setErrorInput('')
        setInputSearch(evt.target.value)
    }

    //autocomplete отключён по причине того, что отображается неккоректно(ответа почему, не нашёл)
    return(
        <div className='search-form__container'>
            <form className='search-form'onSubmit={handleSearch}>
                <label className='search-input-label' htmlFor='input-search'>
                    <img className='search-input__icon-search' src={iconSearch} alt='иконка лупы'></img>
                    <input 
                        autoComplete='off'
                        className='search-input'
                        type='text'
                        placeholder='Фильм'
                        id='input-search'
                        name='input'
                        onChange={handleInputSearch}
                    />
                    <button className='search-btn' type='submit'/>
                </label>
                <FilterCheckBox onFilter={onFilter} />
                <span className='search__error'>{errorInput}</span>
            </form>

        </div>
    )
}

export default SearchForm