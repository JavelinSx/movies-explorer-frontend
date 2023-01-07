import './Register.css'
import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import { useState } from 'react';

function Register({handleRegister}){
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')
    const handleInputName = (evt) => {
        setUserName(evt.target.value)
    }
    const handleInputEmail = (evt) => {
        setUserEmail(evt.target.value)
    }
    const handleInputPassword = (evt) => {
        setUserPass(evt.target.value)
    }
    const handleSubmitRegister = (evt) => {
        evt.preventDefault()
        handleRegister({
            name: userName,
            email: userEmail,
            password: userPass,
        })
    }
    return(
        <section className='register'>
            <div className='register-container'>
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
                    onSubmit={handleSubmitRegister}                    
                >
                    <div className='form__input-container'>
                        <label 
                            htmlFor='register-name'
                            className='form__label'>
                            Имя
                            <span className='form__error-input'>Error</span>
                        </label>
                        <input 
                            required
                            type='text'
                            id='register-name'
                            name='name'
                            className='form__input'
                            onChange={handleInputName}
                        />

                        <label 
                            htmlFor='register-email'
                            className='form__label'>
                            E-mail
                            <span className='form__error-input'>Error</span>
                        </label>
                        <input 
                            required
                            type='email'
                            id='register-email'
                            name='email'
                            className='form__input'
                            onChange={handleInputEmail}
                        />
                        <label 
                            htmlFor='register-password'
                            className='form__label'>
                            Password
                            <span className='form__error-input'>Error</span>
                        </label>
                        <input 
                            required
                            type='password'
                            id='register-password'
                            name='password'
                            className='form__input'
                            onChange={handleInputPassword}
                        />
                    </div>
                </Form>
            </div>
        </section>
    )
}

export default Register;