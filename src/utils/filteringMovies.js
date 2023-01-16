import {useState, useEffect, useMemo} from 'react'
import { movieSendObject } from './constant';
import {filterMoviesIsSaved, searchMovies, getDeleteMovies, filterMoviesDuration} from './constant'

export function FilteringMovies(movies, savedMovies, onDeleteMovie, onSaveMovie){
    const [textEmptyMovies, setTextEmptyMovies] = useState('')
    const [movieModify, setMovieModify] = useState([])
    const [stateMovieListSearch, setStateMovieListSearch] = useState(true)
    const [stateMovieListFilter, setStateMovieListFilter] = useState(true)
    const [searchValue, setSearchValue] = useState('')

    const modifyMovieIsSaved = () => {
        setMovieModify(filterMoviesIsSaved(movies, savedMovies))
    }

    useEffect(() => {
        if(savedMovies.length===0){
            setTextEmptyMovies('Нет сохранённых фильмов') 
        }
        else if(movieModify.length===0){
            setTextEmptyMovies('Нет найденных фильмов')
        }
    },[savedMovies, movieModify, textEmptyMovies])

    useMemo(() => {
        if(stateMovieListSearch && stateMovieListFilter){
            modifyMovieIsSaved()
        }
    },[movies, savedMovies])

    useEffect(() => {

        let searchList = filterMoviesIsSaved(movies, savedMovies)
        let searchListDuration = filterMoviesDuration(searchList)
        let searchListResult = stateMovieListFilter ? searchList : searchListDuration
        if (searchValue.length>0){
            setMovieModify(searchMovies(searchListResult, searchValue)) 
            setStateMovieListSearch(false)
        }
        else{
            if(stateMovieListFilter){
                setMovieModify(searchMovies(searchListResult, searchValue)) 
            }
            else if(searchList.length>0){
                setMovieModify(searchMovies(searchListResult, searchValue)) 
            }
            else{
                setStateMovieListSearch(true)
            }
        }

    },[stateMovieListFilter, stateMovieListSearch, searchValue])

    const modifyMovieIsSearch = (searchValue) => {
        setSearchValue(searchValue)
        if (searchValue.length>0){
            setStateMovieListSearch(false)
        }
        else{
            setStateMovieListSearch(true)
        }
    }

    const modifyMoviesOnFilter = (checked) => {
        if(checked){
            setMovieModify(filterMoviesDuration(movieModify))
            setStateMovieListFilter(false)
        }
        else{
            setStateMovieListFilter(true)
        }
    }

    const savingMovie = (movie) => {
        onSaveMovie(movieSendObject(movie))
        movie.isSaved = !movie.isSaved
    }
    const deletingMovie = (movie) => {
        let deleteMovie = getDeleteMovies(savedMovies, movie)
        onDeleteMovie(deleteMovie[0]._id)
        movie.isSaved = !movie.isSaved 
    }

    return { savingMovie, deletingMovie, modifyMoviesOnFilter, modifyMovieIsSearch, movieModify, textEmptyMovies}

}