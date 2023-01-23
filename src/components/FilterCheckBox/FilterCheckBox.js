import {useState, useRef, useEffect} from 'react'
import './FilterCheckBox.css';

function FilterCheckBox({onFilter, filterStateStorage}){
    const [checked, setChecked] = useState(filterStateStorage)
    const handleCheckBox = (evt) => {
        onFilter(evt.target.checked)
        setChecked(evt.target.checked)
    }
    return(
        <label className='filter-checkbox__label'>
            <input 
                className='filter-checkbox' 
                type='checkbox' 
                role='switch'
                onChange={handleCheckBox}
                checked={checked}
            />
            <div className='filter-checkbox__switch'></div>
            Короткометражки
        </label>
    )
}

export default FilterCheckBox