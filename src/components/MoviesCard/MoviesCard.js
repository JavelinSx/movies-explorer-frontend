import './MoviesCard.css';
import { useState} from 'react';
import { urlApi } from '../../utils/constant.js';

function MoviesCard({name, duration, image, movie}){
    const [saveMovie, setSaveMovie] = useState(false);
    const generateDurationInfo = () => `${Math.floor(duration / 60)}ч ${duration % 60}м`
    const handleSaveMovie = () => {
        setSaveMovie(!saveMovie)
        movie.isSaved = !saveMovie
    }
    return(
        <li className='movie-card'>
            <img className='movie-card__image' src={urlApi+image.url} alt='Картинка из фильма'></img>
            <div className='movie-card__container'>
                <h1 className='movie-card__title'>{name}</h1>
                <button className={movie.isSaved? 'movie-card__btn movie-card__btn-active' : 'movie-card__btn'} onClick={handleSaveMovie}></button>
            </div>
            <span className='movie-card__duration'>{generateDurationInfo()}</span>
        </li>
    )
}

export default MoviesCard