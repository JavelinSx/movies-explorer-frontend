import './Movies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Preloader from "../Preloader/Preloader";
import { FilteringMovies } from '../../utils/filteringMovies';

function Movies({loggedIn, onDeleteMovie, onSaveMovie, isLoading, movies, savedMovies}){

    const filterMovies = FilteringMovies(movies, savedMovies, onDeleteMovie, onSaveMovie)

    const handleClickButtonOnCard = (movie) => {
        if(movie.isSaved){
            filterMovies.deletingMovie(movie)
        } else {
            filterMovies.savingMovie(movie)
        }
    }

    const handleOnSearch = (searchValue) => {
        filterMovies.modifyMovieIsSearch(searchValue)
    }

    const handleOnFilter = (checked) => {
        filterMovies.modifyMoviesOnFilter(checked)
    }

    return(
        <section className='movies'>
            <Header loggedIn={loggedIn}></Header>
            <SearchForm 
                onSearch={handleOnSearch}
                onFilter={handleOnFilter}
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