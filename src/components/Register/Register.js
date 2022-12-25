import './Register.css'
import Form from '../Form/Form';
import Logo from '../Logo/Logo';

function Register(){
    return(
        <div className='register'>
            <div className='register__header'>
                <Logo isLoggin={true} />
                <h1 className='register__title'>Добро пожаловать!</h1>
            </div>
            <Form
                formName={'form__register'}
                pathToRedirect={'/signin'}
                textBtn={'Зарегистрироваться'}
                textFooter={'Уже зарегистрированы?'}
                textLink={'Войти'}
            >
                <div className='form__input-container'>
                    <label 
                        htmlFor='register-name'
                        className='form__label'>
                        Имя
                        <span className='form__error-input'>Error</span>
                    </label>
                    <input 
                        type='text'
                        id='register-name'
                        name='register-ename'
                        className='form__input'
                    />

                    <label 
                        htmlFor='register-email'
                        className='form__label'>
                        E-mail
                        <span className='form__error-input'>Error</span>
                    </label>
                    <input 
                        type='email'
                        id='register-email'
                        name='register-email'
                        className='form__input'
                    />
                    <label 
                        htmlFor='register-password'
                        className='form__label'>
                        Password
                        <span className='form__error-input'>Error</span>
                    </label>
                    <input 
                        type='password'
                        id='register-password'
                        name='register-password'
                        className='form__input'
                    />
                </div>
            </Form>
        </div>
    )
}

export default Register;