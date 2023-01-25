import { Link } from 'react-router-dom';
import PreloaderButton from '../PreloaderButton/PreloaderButton';
import './Form.css';

function Form({formName, children, pathToRedirect, textBtn, textFooter, textLink, onSubmit, isValid, isLoading, error}){
    return(
        <>
            <form className={`form ${formName}`} onSubmit={onSubmit}>
                {
                    children
                }
                <span className='form__error-submit'>{error}</span>
                <button className='form__submit-btn' disabled={!isValid || isLoading}>
                    {isLoading ? <PreloaderButton/> : textBtn}
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