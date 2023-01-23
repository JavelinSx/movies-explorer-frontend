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
} from '../../utils/storageData'

import { useEffect, useState, useMemo} from 'react';

function Movies({loggedIn, onDeleteMovie, onSaveMovie, isLoading, movies, savedMovies}){

    const [renderMovies, setRenderMovies] = useState(getSearchMovies());
    const [searchValue, setSearchValue] = useState(getSearchInputStorage());
    const [checked, setChecked] = useState(getFilterStateStorage());

    useEffect(() => {
        if(renderMovies.length===0){
            setRenderMovies(movies)
        }
    },[movies, savedMovies])

    const search = useMemo(() => {
        let searchList = searchMovies(movies, searchValue, checked)
        return searchList
    },[searchValue, checked])

    useEffect(() => {
        setRenderMovies(search)
    },[searchValue, checked])

    const handleClickButtonOnCard = (movie) => {
        if(!movie.isSaved){
            onSaveMovie(movieSendObject(movie))
        }
        else{
            onDeleteMovie(getDeleteMovie(savedMovies,movie))
        }
        movie.isSaved=!movie.isSaved
    }

    const handleOnSearch = (searchValue) => {
        setSearchInputStorage(searchValue)
        setSearchValue(searchValue)
        setSearchMovies(renderMovies)
    }

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