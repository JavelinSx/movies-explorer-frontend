import './Login.css';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';

function Login(){
    return (
        <section className='login'>
            <div className='login-container'>
                <div className='login__header'>
                    <Logo isLoggin={true}/>
                    <h1 className='login__title'>Рады видеть!</h1>
                </div>
                <Form
                    formName={'form__login'}
                    pathToRedirect={'/signup'}
                    textBtn={'Войти'}
                    textFooter={'Ещё не зарегистрированы?'}
                    textLink={'Регистрация'}
                >
                    <div className='form__input-container'>
                        <label 
                            htmlFor='login-email'
                            className='form__label'>
                            E-mail
                            <span className='form__error-input'>Error</span>
                        </label>
                        <input 
                            required
                            type='email'
                            id='login-email'
                            name='login-email'
                            className='form__input'
                        />
                        
                        <label 
                            htmlFor='login-password'
                            className='form__label'>
                            Password
                            <span className='form__error-input'>Error</span>
                        </label>
                        <input 
                            required
                            type='password'
                            id='login-password'
                            name='login-password'
                            className='form__input'
                        />
                    </div>
                </Form>
            </div>
        </section>
    )
}

export default Login