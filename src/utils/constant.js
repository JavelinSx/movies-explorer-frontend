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