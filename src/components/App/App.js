import './App.css';
import { Routes, Route, useNavigate} from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MainApi from '../../utils/MainApi';
import MovieApi from '../../utils/MoviesApi';
import dataMovie from '../../utils/dbData.json'
import {setMoviesOnBeatFilm, 
  setMoviesSavedUser, 
  setUserProfileData, 
  getMoviesOnBeatFilm, 
  getMoviesSavedUser, 
  getUserProfileData,
  resetStorage} from '../../utils/storageData'

function App() {
  const navigate = useNavigate()
  //содержательные стейты
  const [movies, setMovies] = useState([])
  const [savedMovies, setSavedMovies] = useState([])
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  })

  //вспомогательные стейты
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isEdit, setIsEdit] = useState(false)

  //проверяем куки у юзера
  useEffect(() => {
    MainApi.getUserInfo()
    .then((data) => { 
      if(getUserProfileData().name===''){
        navigate('/movies')
        setLoggedIn(true)
        setCurrentUser(data)
        setUserProfileData(data)
      }
      else{
        navigate('/movies')
        setLoggedIn(true)
        setCurrentUser(getUserProfileData())
      }
    })
    .catch((err) => setError(err.message))
  },[])

  useEffect(() => {
    if(loggedIn===true){
      getSavedMovies()
      getMovies()
    }
  },[loggedIn])

  //сбрасываем ошибку с бэка при переходах страниц
  useEffect(() => {
    setError('')
  }, [navigate])

  const getMovies = () => {
    if(getMoviesOnBeatFilm()===null || []){
      setMovies(dataMovie)
      setMoviesOnBeatFilm(dataMovie)
    }
    else{
      setMovies(getMoviesOnBeatFilm())
    }
  }

  const getSavedMovies = () => {
    if(getMoviesSavedUser()===null || []){
      MainApi.getSavedMovies()
      .then((movie) => {
        setSavedMovies(movie)
        setMoviesSavedUser(movie)
      })
      .catch((err) => setError(err.message))
    }
    else{
      setSavedMovies(getMoviesSavedUser())
    }
  }


  const onSaveMovie = (movie) => {
    MainApi.addMovie(movie)
    .then((movie) => {
      setSavedMovies(state => ([...state, movie]))
    })
    .catch((err) => setError(err.message))
  }

  const onDeleteMovie = (movieId) => {
    MainApi.deleteMovie(movieId)
    .then(() => {
      return getSavedMovies()
    })
    .catch((err) => setError(err.message))
  }

  const onSignout = () => {
    MainApi.signout()
    .then(() => {
      setCurrentUser({
        name: '',
        email: '',
      })
      setMovies([])
      setSavedMovies([])
      resetStorage()
      setLoggedIn(false)
      navigate('/')
    })
  }

  const onLogin = (userInfo, resetForm) => {
    setIsLoading(true)
    MainApi.login(userInfo)
    .then((data) => {
      setLoggedIn(true)
      setCurrentUser(data)
      navigate('/movies')
    })
    .catch((err) => setError(err.message))
    .finally(() => {
      setIsLoading(false)
      resetForm()
    })
  };

  const onRegister = (userInfo, resetForm) => {
    setIsLoading(true)
    MainApi.register(userInfo)
    .then((data) => {
      navigate('/signin')
      onLogin({email: data.email, password: userInfo.password}, resetForm)
      setIsLoading(false)
    })
    .catch((err) => setError(err.message))
    .finally(() => {
      setIsLoading(false)
      resetForm()
    })
  }
  
  const enableEditUserInfo = () => {
    setIsEdit(!isEdit)
  }

  const updateUserInfo = (userInfo) => {
    setIsLoading(true)
    MainApi.updateUserInfo(userInfo)
    .then((data) => {
      setCurrentUser({
        name: data.name,
        email: data.email,
      })
      setUserProfileData(userInfo)
      setIsEdit(false)
      setError('')
    })
    .catch((err) => {
      setIsEdit(true)
      setError(err.message)
    })
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>

          <Route exact path='/' element={
            <Main loggedIn={loggedIn}/>
          }/>

          <Route path='/movies' element={
            <ProtectedRoute
              component={Movies} 
              loggedIn={loggedIn}
              isLoading={isLoading}
              savedMovies={savedMovies}
              movies={movies}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
            />
          }/>

          <Route path='/saved-movies' element={
            <ProtectedRoute 
              component={SavedMovies}
              loggedIn={loggedIn}
              isLoading={isLoading}
              savedMovies={savedMovies}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie} 
            />
          }/>

          <Route path='/profile' element={
            <ProtectedRoute 
              isEdit={isEdit}
              error={error}
              component={Profile}
              loggedIn={loggedIn}
              onSignout={onSignout}
              updateUserInfo={updateUserInfo}
              enableEditUserInfo={enableEditUserInfo}
            />
          }/>

          <Route path='/signin' element={
            <Login 
              error={error}
              isLoading={isLoading} 
              onLogin={(userInfo, resetForm) => onLogin(userInfo, resetForm)}
            />
          }/>


          <Route path='/signup' element={
            <Register 
              error={error}
              isLoading={isLoading} 
              onRegister={(userInfo, resetForm) => onRegister(userInfo, resetForm)}
            />
          }/>


          <Route path='*' element={
            <NotFound />
          }/>

        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
