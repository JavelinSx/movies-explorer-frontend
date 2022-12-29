import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import iconSearch from '../../images/search-icon.svg'
function SearchForm(){
    return(
        <div className='search-container'>
            <form className='search-form'>
                <label className='search-input-label' htmlFor='input-search'>
                    <img className='search-input__icon-search' src={iconSearch} alt='иконка лупы'></img>
                    <input className='search-input' placeholder='Фильм' id='input-search'>
                        
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