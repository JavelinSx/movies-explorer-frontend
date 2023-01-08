import './Movies.css'
import { useEffect, useState } from "react"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Preloader from "../Preloader/Preloader";
import dataMovie from '../../utils/dbData.json'

function Movies({loggedIn}){

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    })

    return(
        <section className='movies'>
            <Header loggedIn={loggedIn}></Header>
            <SearchForm></SearchForm>
            {isLoading ? <Preloader /> : <MoviesCardList moviesList={dataMovie} parentCall={'list'} btnLikeClassActive='movie-card__btn movie-card__btn-active' btnLikeClassDisable='movie-card__btn'/>}
            <Footer></Footer>
        </section>
    )
}

export default Movies