import './Movies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Preloader from "../Preloader/Preloader";
import {FilteringMovies} from '../../utils/filteringMovies';
import {filterMoviesIsSaved} from '../../utils/constant'
import {setMoviesOnBeatFilm,
    setmoviesUser,
    setSearchMovies,
    setUserProfileData,
    setFilterStateStorage,
    setSearchInputStorage,
    getSearchMovies,
    getSearchInputStorage,
    getFilterStateStorage,
    getMoviesOnBeatFilm,
    getUserProfileData,
    getMoviesUser,
    resetStorage} from '../../utils/storageData'

import { useEffect, useState, useMemo } from 'react';
function Movies({loggedIn, onDeleteMovie, onSaveMovie, isLoading, movies, savedMovies}){
    const [moviesBeat, setMoviesBeat] = useState([])
    const [moviesUser, setMoviesUser] = useState([])
    const [checked, setChecked] = useState(getFilterStateStorage())
    const [searchValue, setSearchValue] = useState(getSearchInputStorage())

    const filterMovies = FilteringMovies(moviesBeat, moviesUser, onDeleteMovie, onSaveMovie)
    
    useEffect(() => {
        setMoviesBeat(getMoviesOnBeatFilm())
        setMoviesUser(getMoviesUser())
        
        filterMovies.useSearch(moviesBeat, moviesUser, searchValue, checked)
        
        // filterMovies.modifyMovieIsSearch(getSearchInputStorage())
        // filterMovies.modifyMoviesOnFilter(getFilterStateStorage())
        // filterMovies.useSearch(moviesBeat, moviesUser, searchValue, checked)
    },[movies, savedMovies])


    const handleClickButtonOnCard = (movie) => {
        if(movie.isSaved){
            filterMovies.deletingMovie(movie)
        } else {
            filterMovies.savingMovie(movie)
        }
    }

    const handleOnSearch = (searchValue) => {
        filterMovies.modifyMovieIsSearch(searchValue)
        setSearchValue(searchValue)
        setSearchInputStorage(searchValue)
        filterMovies.useSearch(moviesBeat, moviesUser, searchValue, checked)
    }

    const handleOnFilter = (checked) => {
        filterMovies.modifyMoviesOnFilter(checked)
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
                    filterMovies.movieModify.length===0
                ?
                    <div className='movies-card-list__fill-none'>
                        Нет найденных фильмов
                    </div>
                :
                    <MoviesCardList 
                        onSaveMovie={onSaveMovie}
                        onDeleteMovie={onDeleteMovie}
                        movies={filterMovies.movieModify}
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