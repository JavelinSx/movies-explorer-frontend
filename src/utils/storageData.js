const setMoviesOnBeatFilm = (movies) => {
    localStorage.setItem('moviesOnBeatFilm', JSON.stringify(movies))
}
const setMoviesSavedUser = (movies) => {
    localStorage.setItem('moviesSavedUser', JSON.stringify(movies))
}
const setUserProfileData = (userInfo) => {
    localStorage.setItem('userProfileData', JSON.stringify(userInfo))
}
const getMoviesOnBeatFilm = () => {
    return JSON.parse(localStorage.getItem('moviesOnBeatFilm')) 
}
const getMoviesSavedUser = () => {
    return JSON.parse(localStorage.getItem('moviesSavedUser')) 
}
const getUserProfileData = () => {
    return JSON.parse(localStorage.getItem('userProfileData')) 
}


const resetStorage = () => {
    setMoviesOnBeatFilm([])
    setMoviesSavedUser([])
    setUserProfileData({
        name:'',
        email: ''
    })
}
export {setMoviesOnBeatFilm, 
        setMoviesSavedUser, 
        setUserProfileData, 
        getMoviesOnBeatFilm, 
        getMoviesSavedUser, 
        getUserProfileData,
        resetStorage}