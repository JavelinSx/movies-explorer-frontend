import './MoviesCard.css';
import { useEffect, useState} from 'react';
import { urlApi } from '../../utils/constant.js';

function MoviesCard({movie, btnLikeClassActive, btnLikeClassDisable, parentCall}){
    const {nameRU, duration, image} = movie
    const [isSavedMovie, setIsSavedMovie] = useState(false)
    const [btnLikeClass, setBtnLikeClass] = useState(parentCall==='saved' ? 'movie-card__btn-close' : 'movie-card__btn')
    const generateDurationInfo = () => `${Math.floor(duration / 60)}ч ${duration % 60}м`
    const handleSaveMovie = () => {
        movie.isSaved = !movie.isSaved
        setIsSavedMovie(!isSavedMovie)
        setBtnLikeClass(!isSavedMovie ? btnLikeClassActive : btnLikeClassDisable)
    }
    return(
        <li className='movie-card'>
            <img className='movie-card__image' src={urlApi+image.url} alt='Картинка из фильма'></img>
            <div className='movie-card__container'>
                <h1 className='movie-card__title'>{nameRU}</h1>
                <button className={btnLikeClass} onClick={handleSaveMovie}></button>
            </div>
            <span className='movie-card__duration'>{generateDurationInfo()}</span>
        </li>
    )
}

export default MoviesCard