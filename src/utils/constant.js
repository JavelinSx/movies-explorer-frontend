export const urlApi = 'https://api.nomoreparties.co/'
export const urlMainApi = 'https://api-javelin-movie.nomoredomains.club'
export const urlDev = 'http://localhost:3000'
export const EMAIL_REGEX = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i;
export const TEXT_REGEX = /^[a-zа-яё\- ]+$/i;

export const movieSendObject = (movie) => {
    console.log(movie)
    return{
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: urlApi+movie.image.url,
        trailerLink: urlApi+movie.trailerLink,
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
    let deleteMovie = savedMovies.filter((movieSave) => movieSave.movieId===movie.id || movie.movieId)
    return deleteMovie[0]._id
}

function filterMoviesDuration(movies){
    return movies.filter((movie) => movie.duration<=60 ? movie : '')
}

export {filterMoviesIsSaved, searchMovies, getDeleteMovie, filterMoviesDuration}