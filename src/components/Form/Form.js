import { Link } from 'react-router-dom';
import './Form.css';

function Form({formName, children, pathToRedirect, textBtn, textFooter, textLink, onSubmit}){
    return(
        <>
            <form className={`form ${formName}`} onSubmit={onSubmit}>
                {
                    children
                }
                                    <span className='form__error-submit'>Вы ввели неправильный логин пароль.</span>
                <button className='form__submit-btn'>

                    {textBtn}
                </button>
            </form>
            <div className='form__footer'>
                    <p className='form__footer-text'>{textFooter}</p>
                    <Link to={pathToRedirect} className='form__footer-link'>{textLink}</Link>
            </div>
        </>
    )
}

export default Form;