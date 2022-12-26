import { useEffect, useState } from "react"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import dataMovie from '../../utils/dbData.json'

function SavedMovies(){

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    })

    const savedMovies = dataMovie.filter(movie => movie.isSaved)
    
    return(
        <div className="movies">
            <Header isLoggin={true}></Header>
            <SearchForm></SearchForm>
            {isLoading ? <Preloader /> : <MoviesCardList moviesList={savedMovies} parentCall={'saved'} btnLikeClassActive='movie-card__btn' btnLikeClassDisable='movie-card__btn movie-card__btn-close'/>}
            <Footer></Footer>
        </div>
    )
}

export default SavedMovies