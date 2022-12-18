import './SearchForm.css';
import imageBtn from '../../images/search-min.svg';

function SearchForm(){
    return(
        <form className='search-form'>
            {/* <label className='search-label'>Фильм</label> */}
            <input className='search-input' placeholder='Фильм'></input>
            <button className='search-btn'>
                <img className='search-image' src={imageBtn} alt='иконка поиска'></img>
            </button>
        </form>
    )
}

export default SearchForm