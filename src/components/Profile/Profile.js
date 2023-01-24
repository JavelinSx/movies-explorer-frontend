import './Profile.css'
import Header from '../Header/Header'
import { useContext, useEffect, useMemo, useState} from 'react'
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Profile({updateUserInfo, loggedIn, onSignout, error, isEdit, enableEditUserInfo, confirmUpdateUser}){

    const currentUser = useContext(CurrentUserContext)
    const form = useFormWithValidation({name: currentUser.name, email: currentUser.email});
    const [enabledSubmitBtn, setEnabledSubmitBtn] = useState(false)

    useEffect(() => {
        form.values.name = currentUser.name
        form.values.email = currentUser.email
    },[currentUser.email, currentUser.name])

    useEffect(() => {
        if(currentUser.name !== form.values.name || currentUser.email !== form.values.email){
            setEnabledSubmitBtn(false)
        }else{
            setEnabledSubmitBtn(true)
        }
    },[isEdit, form.values])

    const handleSignout = (evt) => {
        evt.preventDefault()
        onSignout()
    }

    const handleEditProfile = (evt) => {
        enableEditUserInfo()
        evt.preventDefault()
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if(!enabledSubmitBtn){
            updateUserInfo({
                name: form.values.name,
                email: form.values.email,
            }) 
        }
    }

    const handleEscapeUpdate = () => {
        if(enabledSubmitBtn){
            enableEditUserInfo()
        }else{
            enableEditUserInfo()
            form.resetError()
            form.values.name = currentUser.name
            form.values.email = currentUser.email
        }
    }
    return(
            <section className='profile'>
                <Header loggedIn={loggedIn}/>
                <div className='profile-container'>
                    <form 
                        id='form-profile' 
                        className='profile__form profile__text' 
                        onSubmit={handleSubmit} 
                    >
                        <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
                        <div className='profile__input-container'>
                            <label className='profile__form-label' htmlFor='name-profile'>
                                Имя
                                <input 
                                    type='text'
                                    className='profile__form-input' 
                                    required
                                    name='name'
                                    id='name-profile'
                                    value={form.values.name}
                                    onChange={(event) => form.handleChange(event)}
                                    disabled={!isEdit}
                                />
                                <span className='profile__error'>{form.errors.name}</span>
                            </label>
                            <label className='profile__form-label' htmlFor='email-profile'>
                                E-mail
                                <input 
                                    type='email'
                                    className='profile__form-input' 
                                    required 
                                    name='email'
                                    id='email-profile'
                                    onChange={(event) => form.handleChange(event)}
                                    value={form.values.email}
                                    disabled={!isEdit}
                                />
                                <span className='profile__error'>{form.errors.email}</span>
                            </label>
                        </div>
                        
                    </form>
                    
                    <div className='profile__btn-container'>
                        {isEdit ? '' : <span className={confirmUpdateUser ? 'form__confirm-submit' : 'form__error-submit'}>{confirmUpdateUser ? 'Вы успешно изменили данные' : error}</span>}
                        <button className={isEdit ? 'profile__btn-save' : 'profile__btn-save profile__btn-save-hide'} disabled={!form.isValid || enabledSubmitBtn} form='form-profile' >Сохранить</button>
                        <button className={isEdit ? 'profile__btn-escape' : 'profile__btn-escape profile__btn-save-hide'} onClick={handleEscapeUpdate}>Отменить</button>
                        <button className={isEdit ? 'profile__btn-edit-hide' : 'profile__btn-edit profile__btn'} onClick={handleEditProfile}>Редактировать</button>
                        <button className={isEdit ? 'profile__btn-exit-hide' : 'profile__btn-exit profile__btn'} onClick={handleSignout}>Выйти из аккаунта</button>
                    </div>
                </div>


            </section>
    )
}

export default Profile