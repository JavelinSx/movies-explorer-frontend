import './NotFound.css'
import { useNavigate } from 'react-router-dom';

function NotFound(){
    const navigate = useNavigate()
    const handleClickBack = () => {
        navigate('/')
    }
    return(
        <section className='not-found'>
            <h1 className='not-found__error'>404</h1>
            <p className='not-found__text'>Страница не найдена</p>
            <button className='not-found__btn' onClick={handleClickBack}>Назад</button>
        </section>
    )
}

export default NotFound