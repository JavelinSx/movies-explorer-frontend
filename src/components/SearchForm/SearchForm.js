import './SearchForm.css';
import imageBtn from '../../images/search-min.svg';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
function SearchForm(){
    return(
        <div className='search-container'>
            <form className='search-form'>
                <input className='search-input' placeholder='Фильм'></input>
                <button className='search-btn'>
                    <img className='search-image' src={imageBtn} alt='иконка поиска'></img>
                </button>
            </form>
            <FilterCheckBox></FilterCheckBox>
        </div>
    )
}

export default SearchForm