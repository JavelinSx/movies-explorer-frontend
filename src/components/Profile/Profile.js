import './Profile.css'
import Header from '../Header/Header'
import { useContext} from 'react'
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Profile({updateUserInfo, loggedIn, onSignout, error, isEdit, enableEditUserInfo}){
    const currentUser = useContext(CurrentUserContext)
    const form = useFormWithValidation({name: currentUser.name, email: currentUser.email});


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
        if(currentUser.name !== form.values.name || currentUser.email !== form.values.email){
            updateUserInfo({
                name: form.values.name,
                email: form.values.email,
            }) 
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
                        isvalid={form.isValid.toString()}
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
                    <span className='form__error-submit'>{error}</span>
                    <div className='profile__btn-container'>
                        <button className={isEdit ? 'profile__btn-save' : 'profile__btn-save profile__btn-save-hide'} form='form-profile' >Сохранить</button>
                        <button className={isEdit ? 'profile__btn-edit-hide' : 'profile__btn-edit profile__btn'} onClick={handleEditProfile}>Редактировать</button>
                        <button className={isEdit ? 'profile__btn-exit-hide' : 'profile__btn-exit profile__btn'} onClick={handleSignout}>Выйти из аккаунта</button>
                    </div>
                </div>


            </section>
    )
}

export default Profile