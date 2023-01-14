import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { FilteringMovies } from '../../utils/filteringMovies';

function SavedMovies({loggedIn, onDeleteMovie, onSaveMovie, savedMovies, isLoading}){

    const filterMovies = FilteringMovies(savedMovies, savedMovies, onDeleteMovie, onSaveMovie)

    const handleClickButtonOnCard = (movie) => {
        filterMovies.deletingMovie(movie)
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
            {isLoading ? <Preloader /> : savedMovies.length!==0 ? 
                <MoviesCardList 
                    onSaveMovie={onSaveMovie}
                    onDeleteMovie={onDeleteMovie}
                    movies={filterMovies.movieModify}                       
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