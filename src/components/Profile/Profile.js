import './Profile.css'
import Header from '../Header/Header'
import { useState } from 'react'
function Profile(){
    const [enableEdit, setEnableEdit] = useState(false)

    const handleEditProfile = (evt) => {
        evt.preventDefault()
        setEnableEdit(!enableEdit)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        setEnableEdit(!enableEdit)
    }
    return(
            <section className='profile'>
                <Header isLoggin={true}/>
                <div className='profile-container'>
                    <form id='form-profile' className='profile__form profile__text' onSubmit={handleSubmit}>
                        <h1 className='profile__title'>Привет Виталий!</h1>
                        <div className='profile__input-container'>
                            <label className='profile__form-label'>
                                Имя
                                <input className='profile__form-input' required defaultValue={'Виталий'} {... (!enableEdit && {readOnly: true})}>
                                    
                                </input>
                                <span className='profile__form-error'></span>
                            </label>
                            <label className='profile__form-label'>
                                E-mail
                                <input className='profile__form-input' required defaultValue={'pochta@yandex.ru'} {... (!enableEdit && {readOnly: true})}>
                                    
                                </input>
                                <span className='profile__form-error'></span>
                            </label>
                        </div>
                        
                    </form>
                    <div className='profile__btn-container'>
                        <button className={enableEdit ? 'profile__btn-save' : 'profile__btn-save profile__btn-save-hide'} form='form-profile' >Сохранить</button>
                        <button className={enableEdit ? 'profile__btn-edit-hide' : 'profile__btn-edit profile__btn'} onClick={handleEditProfile}>Редактировать</button>
                        <button className={enableEdit ? 'profile__btn-exit-hide' : 'profile__btn-exit profile__btn'}>Выйти из аккаунта</button>
                    </div>
                </div>


            </section>
    )
}

export default Profile