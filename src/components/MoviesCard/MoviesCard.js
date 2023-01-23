import './MoviesCard.css';
function MoviesCard({movie, btnLikeClassActive, btnLikeClassDisable, handleClickButtonOnCard, urlApi, urlSavedImage}){
    const {nameRU, duration, image} = movie
    const generateDurationInfo = () => `${Math.floor(duration / 60)}ч ${duration % 60}м`
    const handleClick = () => {
        handleClickButtonOnCard(movie)
    }
    return(

        <li className='movie-card'>
            <img className='movie-card__image' src={urlSavedImage ? image : urlApi+image.url} alt='Кадр из фильма'></img>
            <div className='movie-card__container'>
                <h1 className='movie-card__title'>{nameRU}</h1>
                <button className={movie.isSaved ? btnLikeClassActive : btnLikeClassDisable} onClick={handleClick}></button>
            </div>
            <span className='movie-card__duration'>{generateDurationInfo()}</span>
            <a href={movie.trailerLink} className='movie-card__link' target="_blank" rel='noopener noreferrer'> </a>
        </li>

    )
}

export default MoviesCard