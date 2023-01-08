import './Login.css';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';

import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Login({onLogin, isLoading, error}){
    const form = useFormWithValidation({email: '', password: ''});

    const handleSubmit = (evt) => {
        evt.preventDefault()
        onLogin(form.values, form.resetForm)
        form.resetForm()
    }
    return (
        <section className='login'>
            <div className='login-container'>
                <div className='login__header'>
                    <Logo isLoggin={true}/>
                    <h1 className='login__title'>Рады видеть!</h1>
                </div>
                <Form
                    error={error}
                    isLoading={isLoading}
                    formName={'form__login'}
                    pathToRedirect={'/signup'}
                    textBtn={'Войти'}
                    textFooter={'Ещё не зарегистрированы?'}
                    textLink={'Регистрация'}
                    isValid={form.isValid}
                    onSubmit={handleSubmit}
                >
                    <div className='form__input-container'>
                        <label 
                            htmlFor='login-email'
                            className='form__label'>
                            E-mail
                            <span className='form__error-input'>{form.errors.email}</span>
                        </label>
                        <input 
                            required
                            type='email'
                            id='login-email'
                            name='email'
                            className='form__input'
                            onChange={(event) => form.handleChange(event)}
                            value={form.values.email}
                            disabled={isLoading}
                        />
                        
                        <label 
                            htmlFor='login-password'
                            className='form__label'>
                            Password
                            <span className='form__error-input'>{form.errors.password}</span>
                        </label>
                        <input 
                            required
                            type='password'
                            id='login-password'
                            name='password'
                            className='form__input'
                            onChange={(event) => form.handleChange(event)}
                            value={form.values.password}
                            disabled={isLoading}
                        />
                    </div>
                </Form>
            </div>
        </section>
    )
}

export default Login