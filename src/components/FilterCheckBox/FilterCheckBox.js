import './FilterCheckBox.css';

function FilterCheckBox(){
    return(
        <>
        <label className='filter-checkbox__label'>
            Короткометражки
            <input className='filter-checkbox' type='checkbox' role='switch'></input>
            <div className='filter-checkbox__switch'></div>
        </label>

        </>
    )
}

export default FilterCheckBox