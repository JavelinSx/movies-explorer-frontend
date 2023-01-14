export const urlApi = 'https://api.nomoreparties.co/'
export const urlBeatFilm = 'https://api.nomoreparties.co/beatfilm-movies'
export const EMAIL_REGEX = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i;
export const TEXT_REGEX = /^[a-zа-яё\- ]+$/i;

export const movieSendObject = (movie) => {
    return{
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: urlApi+movie.image.url,
        trailerLink: urlApi+movie.trailerLink,
        thumbnail: urlApi+movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
    }
}

function filterMoviesIsSaved(movies, savedMovies){
    return movies.map((unsave) => ({...unsave, isSaved:savedMovies.some((save) => save.movieId===unsave.id)}))
}
function searchMovies(movies, searchValue){
    return movies.filter((movie) => movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()))
}

function getDeleteMovies(savedMovies, movie){
    return savedMovies.filter((movieSave) => movieSave.movieId===movie.id || movie.movieId)
}

function filterMoviesDuration(movies){
    return movies.filter((movie) => movie.duration<=60 ? movie : '')
}

export {filterMoviesIsSaved, searchMovies, getDeleteMovies, filterMoviesDuration}