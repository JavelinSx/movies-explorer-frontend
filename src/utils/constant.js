export const urlApi = 'https://api.nomoreparties.co/'
export const urlMainApi = 'https://api-javelin-movie.nomoredomains.club'
export const urlDev = 'http://localhost:3000'
export const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
export const TEXT_REGEX = /^[a-zа-яё\- ]+$/i;

const durationMovie = 60;

export const sizeScreen = {
    small: 320,
    medium: 768,
    wide: 1280,
}

export const visibleMoviesCount = {
    small: 5,
    medium: 8,
    wide: 12,
}

export const visibleMoreMovies = {
    small: 2,
    wide: 4,
}

export const movieSendObject = (movie) => {
    return{
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: urlApi+movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: urlApi+movie.image.formats.thumbnail.url || movie.thumbnail,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
    }
}

function filterMoviesIsSaved(movies, savedMovies){
    return movies.map((unsave) => ({...unsave, isSaved:savedMovies.some((save) => save.movieId===unsave.id)}))
}
function searchMovies(movies, searchValue, checked){
    let filterMovies = filterMoviesDuration(movies)
    if(checked){
        return filterMovies.filter((movie) => movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()))
    }
    return movies.filter((movie) => movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()))
}

function getDeleteMovie(savedMovies, movie){
    let deleteMovie = savedMovies.filter((movieSave) => movieSave.movieId===movie.id || movieSave.movieId===movie.movieId)
    return deleteMovie[0]._id
}

function filterMoviesDuration(movies){
    return movies.filter((movie) => movie.duration<=durationMovie ? movie : '')
}

export {filterMoviesIsSaved, searchMovies, getDeleteMovie, filterMoviesDuration}