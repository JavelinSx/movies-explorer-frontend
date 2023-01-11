import './Movies.css'
import { useEffect, useState, useMemo } from "react"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Preloader from "../Preloader/Preloader";
import { urlApi, movieSendObject } from '../../utils/constant.js';
import { FilteringMovies } from '../../utils/filteringMovies';

function Movies({loggedIn, onDeleteMovie, onSaveMovie, isLoading, movies, savedMovies}){

    const filterMovies = FilteringMovies(movies,savedMovies)

    useEffect(() => {
        if(filterMovies.resultMovies.length===0){
            filterMovies.modifyMovieIsSaved()
        }

    },[movies, savedMovies])

    const handleClickButtonOnCard = (movie) => {
        let deleteMovie = savedMovies.filter((movieSave) => movieSave.movieId===movie.id)
        if(movie.isSaved){
            onSaveMovie(movieSendObject(movie))
        } else {
            onDeleteMovie(deleteMovie[0]._id)
        }
    }

    const handleOnSearch = (searchValue) => {
        filterMovies.modifyMovieIsSearch(searchValue)
    }

    // const handleOnFilter = (isOn) => {
    //     if(isOn){
    //         setMovieModify(movieModify.filter((movie) => movie.duration<=60 ? movie : ''))
    //     }
    //     else{
    //         setMovieModify(movieModify)
    //     }
    // }

    return(
        <section className='movies'>
            <Header loggedIn={loggedIn}></Header>
            <SearchForm 
                onSearch={handleOnSearch}
                // onFilter={handleOnFilter}
            />
            {isLoading ? <Preloader /> : <MoviesCardList 
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