import './FilterCheckBox.css';

function FilterCheckBox(){
    return(
        <>
        <label className='movie-filter__label'>
            Короткометражки
            <input className='movie-filter' type='checkbox' role='switch'></input>
            <div className='movie-filter__switch'></div>
        </label>

        </>
    )
}

export default FilterCheckBox