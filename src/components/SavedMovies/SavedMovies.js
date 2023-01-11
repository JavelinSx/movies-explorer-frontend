import { useState } from "react"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function SavedMovies({loggedIn, onDeleteMovie, onSaveMovie, savedMovies, isLoading}){
    const [searchMovies, setSearchMovies] = useState([])

    const handleClickButtonOnCard = (movie) => {
        savedMovies.map((deleteMovie) => deleteMovie.movieId===movie.movieId ? onDeleteMovie(deleteMovie._id) : '')
    }

    const handleOnSearch = (searchValue) => {
        setSearchMovies(savedMovies.filter((movie) => movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())))
    }

    const handleOnFilter = (isOn) => {

    }

    return(
        <section className='movies'>
            <Header loggedIn={loggedIn}></Header>
            <SearchForm 
                onSearch={handleOnSearch}
                onFilter={handleOnFilter}
            />
            {isLoading ? 
                    <Preloader /> 
                : 
                    savedMovies.length!==0 
                ? 
                    <MoviesCardList 
                        onSaveMovie={onSaveMovie}
                        onDeleteMovie={onDeleteMovie}
                        movies={searchMovies.length>0 ? searchMovies : savedMovies}
                        urlSavedImage={ true }
                        handleClickButtonOnCard={(movie)=>handleClickButtonOnCard(movie)}
                        btnLikeClassActive='movie-card__btn' 
                        btnLikeClassDisable='movie-card__btn movie-card__btn-close'
                    />
                :       
                    <div className='movies-card-list__fill-none'>
                        Нет сохранённых фильмов
                    </div>
                                                                    
            }
            <Footer></Footer>
        </section>
    )
}

export default SavedMovies