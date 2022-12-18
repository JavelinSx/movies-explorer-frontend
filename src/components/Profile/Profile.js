import './Profile.css'
import Header from '../Header/Header'
import { useState } from 'react'
function Profile(){
    const [enableEdit, setEnableEdit] = useState(true)
    const handleClickEditProfile = (evt) => {
        evt.preventDefault()
        setEnableEdit(!enableEdit)
    }
    return(
        <>
            <Header>

            </Header>
            <div className='profile'>
                <h1 className='profile__title'>Привет Виталий!</h1>
                <form className='profile__form profile__text'>
                    <div className='profile__input-container'>
                        <label className='profile__form-label'>
                            Имя
                            <input className='profile__form-input' defaultValue={'Виталий'} {... (enableEdit && {readOnly: true})}>
                                
                            </input>
                            <span className='profile__form-error'></span>
                        </label>
                        <label className='profile__form-label'>
                            E-mail
                            <input className='profile__form-input' defaultValue={'pochta@yandex.ru'} {... (enableEdit && {readOnly: true})}>
                                
                            </input>
                            <span className='profile__form-error'></span>
                        </label>
                    </div>

                    <button className='profile__btn-edit profile__btn' onClick={handleClickEditProfile}>Редактировать</button>
                </form>
                <button className='profile__btn-exit profile__btn'>Выйти из аккаунта</button>
            </div>
        </>
    )
}

export default Profile