import './Register.css'
import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import { Navigate } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Register({onRegister, isLoading, error, loggedIn}){
    const form = useFormWithValidation({name: '', email: '', password: ''});

    const handleSubmit = (evt) => {
        evt.preventDefault()
        onRegister(form.values, form.resetForm)
    }

    return(
        <>
            {loggedIn ? <Navigate to='/' /> : ''}
            <section className='register'>
                <div className='register-container'>
                    <div className='register__header'>
                        <Logo isLoggin={true} />
                        <h1 className='register__title'>Добро пожаловать!</h1>
                    </div>
                    <Form
                        isLoading={isLoading}
                        formName={'form__register'}
                        pathToRedirect={'/signin'}
                        textBtn={'Зарегистрироваться'}
                        textFooter={'Уже зарегистрированы?'}
                        textLink={'Войти'}
                        isValid={form.isValid}
                        onSubmit={handleSubmit} 
                        error={error}                   
                    >
                        <div className='form__input-container'>
                            <label 
                                htmlFor='register-name'
                                className='form__label'>
                                Имя
                                <span className='form__error-input'>{form.errors.name}</span>
                            </label>
                            <input 
                                required
                                type='text'
                                id='register-name'
                                name='name'
                                className='form__input'
                                onChange={(event) => form.handleChange(event)}
                                value={form.values.name}
                                disabled={isLoading}
                            />

                            <label 
                                htmlFor='register-email'
                                className='form__label'>
                                E-mail
                                <span className='form__error-input'>{form.errors.email}</span>
                            </label>
                            <input 
                                required
                                type='email'
                                id='register-email'
                                name='email'
                                className='form__input'
                                onChange={(event) => form.handleChange(event)}
                                value={form.values.email}
                                disabled={isLoading}
                            />
                            <label 
                                htmlFor='register-password'
                                className='form__label'>
                                Password
                                <span className='form__error-input'>{form.errors.password}</span>
                            </label>
                            <input 
                                required
                                type='password'
                                id='register-password'
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
        </>
        
    )
}

export default Register;