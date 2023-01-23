import { useEffect, useState, useMemo} from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import {filterMoviesIsSaved, searchMovies, getDeleteMovie, movieSendObject} from '../../utils/constant'


function SavedMovies({loggedIn, onDeleteMovie, onSaveMovie, savedMovies, isLoading}){

    const [renderMovies, setRenderMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [checked, setChecked] = useState(false);
    const [textEmpty, setTextEmpty] = useState('')

    useEffect(() => {
        if(renderMovies.length===0){
            setRenderMovies(savedMovies)
            setTextEmpty('Нет найденных фильмов')
        }
        if(savedMovies.length===0){
            setTextEmpty('Нет сохраннённых фильмов')
        }
    },[savedMovies])

    const search = useMemo(() => {
        let searchList = searchMovies(savedMovies, searchValue, checked)
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
        setSearchValue(searchValue)
    }

    const handleOnFilter = (checked) => {
        setChecked(checked)
    }

    return(
        <section className='movies'>
            <Header loggedIn={loggedIn}></Header>
            <SearchForm 
                onSearch={handleOnSearch}
                onFilter={handleOnFilter}
                searchValueStorage={''}
                filterStateStorage={false}
            />
            {   isLoading 
                ? 
                    <Preloader /> 
                : 
                    savedMovies.length===0 || renderMovies.length===0 
                    ?
                    <div className='movies-card-list__fill-none'>
                        {textEmpty}
                    </div>
                    :
                    <MoviesCardList 
                        onSaveMovie={onSaveMovie}
                        onDeleteMovie={onDeleteMovie}
                        movies={renderMovies}                       
                        urlSavedImage={ true }
                        handleClickButtonOnCard={(movie)=>handleClickButtonOnCard(movie)}
                        btnLikeClassActive='movie-card__btn' 
                        btnLikeClassDisable='movie-card__btn movie-card__btn-close'

                    />                                                        
            }
            <Footer></Footer>
        </section>
    )
}

export default SavedMovies