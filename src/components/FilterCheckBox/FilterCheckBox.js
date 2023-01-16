import './FilterCheckBox.css';

function FilterCheckBox({onFilter}){

    const handleCheckBox = (evt) => {
        onFilter(evt.target.checked)
    }
    return(
        <label className='filter-checkbox__label'>
            <input 
                className='filter-checkbox' 
                type='checkbox' 
                role='switch'
                onChange={handleCheckBox}
            />
            <div className='filter-checkbox__switch'></div>
            Короткометражки
        </label>
    )
}

export default FilterCheckBox