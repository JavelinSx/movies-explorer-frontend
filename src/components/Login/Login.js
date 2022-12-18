import './Login.css';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';

function Login(){
    return (
        <div className='login'>
            <div className='login__header'>
                <Logo />
                <h1 className='login__title'>Рады видеть!</h1>
            </div>
            <Form
                formName={'form__login'}
                pathToRedirect={'/signup'}
                textBtn={'Войти'}
                textFooter={'Ещё не зарегистрированы?'}
                textLink={'Регистрация'}
            >
                <label 
                    htmlFor='login-email'
                    className='form__label'>
                    E-mail
                </label>
                <input 
                    type='email'
                    id='login-email'
                    name='login-email'
                    className='form__input'
                />
                <span className='form__error-text'>hello</span>
                <label 
                    htmlFor='login-password'
                    className='form__label'>
                    Password
                </label>
                <input 
                    type='password'
                    id='login-password'
                    name='login-password'
                    className='form__input'
                />
                <span className='form__error-text'></span>
            </Form>
        </div>
    )
}

export default Login