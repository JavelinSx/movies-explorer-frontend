

//storage loggedIn
const setLoggedInStorage = (boolean) => {
    localStorage.setItem('loggedIn', boolean)
}
const getLoggedInStorage = () => {
    return JSON.parse(localStorage.getItem('loggedIn')) 
}
//storage BeatFilm
const setNavigateStorage = (link) => {
    localStorage.setItem('navigationLink', JSON.stringify(link))
}
const getNavigateStorage = () => {
    return JSON.parse(localStorage.getItem('navigationLink')) 
}
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
    localStorage.setItem('checkedFilter', checked)
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
    setLoggedInStorage(false)
    setNavigateStorage('')
    setMoviesUser([])
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
        setNavigateStorage,
        setLoggedInStorage,
        getLoggedInStorage,
        getNavigateStorage,
        getSearchMovies,
        getSearchInputStorage,
        getFilterStateStorage,
        getMoviesOnBeatFilm,
        getUserProfileData,
        getMoviesUser,
        resetStorage}