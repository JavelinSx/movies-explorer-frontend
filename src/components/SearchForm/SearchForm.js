import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import iconSearch from '../../images/search-icon.svg'
function SearchForm(){
    const handleSearch = (evt) => {
        evt.preventDefault()
    }
    return(
        <div className='search-container'>
            <form className='search-form'onSubmit={handleSearch}>
                <label className='search-input-label' htmlFor='input-search'>
                    <img className='search-input__icon-search' src={iconSearch} alt='иконка лупы'></img>
                    <input className='search-input' placeholder='Фильм' id='input-search' required>
                        
                    </input>
                    <button className='search-btn'>
                        
                    </button>
                </label>

            </form>
            <FilterCheckBox></FilterCheckBox>
        </div>
    )
}

export default SearchForm