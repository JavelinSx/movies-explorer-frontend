import './NotFound.css'

function NotFound(){
    return(
        <div className='not-found'>
            <h1 className='not-found__error'>404</h1>
            <p className='not-found__text'>Страница не найдена</p>
            <button className='not-found__btn'>Назад</button>
        </div>
    )
}

export default NotFound