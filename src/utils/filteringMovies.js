import {useState, useEffect} from 'react'

export function FilteringMovies(movies, savedMovies){
    const [resultMovies, setResultMovies] = useState([])
    const [movieModify, setMovieModify] = useState([])
    const [savedMoviesModify, setSavedMoviesModify] = useState([])


    const modifyMovieIsSaved = () => {
            setMovieModify(movies.map((unsave) => ({...unsave, isSaved:savedMovies.some((save) => save.movieId===unsave.id)})))
            setSavedMoviesModify(savedMovies)
    }

    const modifyMovieIsSearch = (searchValue) => {
        if(searchValue.length>0){
            setMovieModify(movieModify.filter((movie) => movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())))
            setResultMovies(movieModify)
        }
        else {
            modifyMovieIsSaved()
        }
    }

    return { modifyMovieIsSaved, modifyMovieIsSearch, movieModify, savedMoviesModify, resultMovies}

}

