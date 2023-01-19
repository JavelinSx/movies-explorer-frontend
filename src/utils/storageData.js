//storage BeatFilm
const setMoviesOnBeatFilm = (movies) => {
    localStorage.setItem('moviesOnBeatFilm', JSON.stringify(movies))
}
const getMoviesOnBeatFilm = () => {
    return JSON.parse(localStorage.getItem('moviesOnBeatFilm')) 
}
//storage UserInfo
const setUserProfileData = (userInfo) => {
    localStorage.setItem('userProfileData', JSON.stringify(userInfo))
}
const getUserProfileData = () => {
    return JSON.parse(localStorage.getItem('userProfileData')) 
}
//storage searchMovies
const setSearchMovies = (movies) => {
    localStorage.setItem('searchMovies', JSON.stringify(movies))
}
const getSearchMovies = () => {
    return JSON.parse(localStorage.getItem('searchMovies')) 
}
//storage FilterCheckBox
const setFilterStateStorage = (checked) => {
    localStorage.setItem('checkedFilter', JSON.stringify(checked))
}
const getFilterStateStorage = () => {
    return JSON.parse(localStorage.getItem('checkedFilter')) 
}
//storage SearchInput
const setSearchInputStorage = (value) => {
    localStorage.setItem('searchValue', JSON.stringify(value))
}
const getSearchInputStorage = () => {
    return JSON.parse(localStorage.getItem('searchValue')) 
}
//storage savedMovies
const setMoviesUser = (movies) => {
    localStorage.setItem('savedMovies', JSON.stringify(movies))
}
const getMoviesUser = () => {
    return JSON.parse(localStorage.getItem('savedMovies')) 
}
// reset storage
const resetStorage = () => {
    setSearchMovies([])
    setFilterStateStorage(false)
    setSearchInputStorage('')
    setMoviesOnBeatFilm([])
    setUserProfileData({
        name:'',
        email: ''
    })
}

export {setMoviesOnBeatFilm,
        setMoviesUser,
        setSearchMovies,
        setUserProfileData,
        setFilterStateStorage,
        setSearchInputStorage,
        getSearchMovies,
        getSearchInputStorage,
        getFilterStateStorage,
        getMoviesOnBeatFilm,
        getUserProfileData,
        getMoviesUser,
        resetStorage}