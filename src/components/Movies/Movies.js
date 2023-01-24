import './Movies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Preloader from "../Preloader/Preloader";
import {filterMoviesIsSaved, searchMovies, getDeleteMovie, movieSendObject} from '../../utils/constant'
import {
    setSearchMovies,
    setFilterStateStorage,
    setSearchInputStorage,
    getSearchMovies,
    getSearchInputStorage,
    getFilterStateStorage,
    getMoviesOnBeatFilm,
} from '../../utils/storageData'

import { useEffect, useState, useMemo} from 'react';

function Movies({loggedIn, onDeleteMovie, onSaveMovie, isLoading, movies, savedMovies, getMovies}){

    const [renderMovies, setRenderMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [checked, setChecked] = useState(false);

    //каждый раз когда дёргаем ручки чекбокс или строки поиска при сабмите, фильтруем фильмы относителньо полученных стейтов
    useEffect(() => {
        if(movies.length!==0){
            let searchList = searchMovies(movies, searchValue, checked)
            setRenderMovies(searchList)
            setSearchMovies(searchList)
        }else{
            getMovies()
            setRenderMovies(movies) 
            console.log(movies)
        }
    },[searchValue, checked, movies])

    //если наш getSearchMovies() пустой, то идём сюда и берём movies из props.App иначе достаём storage state
    useEffect(() => {
        if(getSearchMovies()!==null && getMoviesOnBeatFilm()!==null){
            setRenderMovies(getSearchMovies())
            setSearchValue(getSearchInputStorage())
            setChecked(getFilterStateStorage())
        }else{
            setRenderMovies(movies)
        }
        console.log('hello23')
    },[movies, savedMovies])

    //сохраняем или удаляем фильм
    const handleClickButtonOnCard = (movie) => {
        if(!movie.isSaved){
            onSaveMovie(movieSendObject(movie))
        }
        else{
            onDeleteMovie(getDeleteMovie(savedMovies,movie))
        }
        movie.isSaved=!movie.isSaved
    }

    //ручка сабмит поиска
    const handleOnSearch = (searchValue) => {
        setSearchInputStorage(searchValue)
        setSearchValue(searchValue)
    }

    //ручка фильтра
    const handleOnFilter = (checked) => {
        setFilterStateStorage(checked)
        setChecked(checked)
    }

    return(
        <section className='movies'>
            <Header loggedIn={loggedIn}></Header>
            <SearchForm 
                onSearch={handleOnSearch}
                onFilter={handleOnFilter}
                searchValueStorage={getSearchInputStorage() || ''}
                filterStateStorage={getFilterStateStorage() || false}
            />
            {   isLoading 
                ? 
                    <Preloader /> 
                : 
                    renderMovies.length===0
                ?
                    <div className='movies-card-list__fill-none'>
                        Нет найденных фильмов
                    </div>
                :
                    <MoviesCardList 
                        getKey={false}
                        onSaveMovie={onSaveMovie}
                        onDeleteMovie={onDeleteMovie}
                        movies={filterMoviesIsSaved(renderMovies, savedMovies)}
                        urlSavedImage={ false }
                        handleClickButtonOnCard={(movie) => handleClickButtonOnCard(movie)}
                        btnLikeClassActive='movie-card__btn movie-card__btn-active' 
                        btnLikeClassDisable='movie-card__btn'
                    />
            }
            <Footer></Footer>
        </section>
    )
}

export default Movies  