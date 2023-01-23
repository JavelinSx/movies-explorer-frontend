import './App.css';
import { Routes, Route, useNavigate} from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useEffect, useState, useMemo } from 'react';
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
import data from '../../utils/dbData.json'
import {setMoviesOnBeatFilm, 
  setMoviesUser, 
  setUserProfileData, 
  getMoviesOnBeatFilm, 
  getMoviesUser, 
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
      setLoggedIn(true)
      setCurrentUser(data)
      setUserProfileData(data)
      navigate('/movies')
    })
    .catch((err) => setError(err.message))
    .finally(() => {
      setIsLoading(false)
    })
  },[])

  const getMovies = () => {

      setMovies(data)
      // MovieApi.getMovies()
      // .then((movie) => {
      //   setMovies(movie)
      //   setMoviesOnBeatFilm(movie)
      // })
      // .catch((err) => setError(err.message))

  }

  const getSavedMovies = () => {
    MainApi.getSavedMovies()
    .then((movie) => {
      setSavedMovies(movie)
      setMoviesUser(movie)
    })
    .catch((err) => setError(err.message))
  }

  useMemo(() => {
    if(loggedIn===true){ 
      getMovies()
      getSavedMovies()
    }
  },[loggedIn])

  useEffect(() => {
    setMoviesOnBeatFilm(movies)
    setMoviesUser(savedMovies)
  },[movies,savedMovies])

  //сбрасываем ошибку с бэка при переходах страниц
  useEffect(() => {
    setError('')
  }, [navigate])

  const onSaveMovie = (movie) => {
    MainApi.addMovie(movie)
    .then((movie) => {
      setSavedMovies(state => ([...state, movie]))
      setMoviesUser(savedMovies)
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
    setIsLoading(true)
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
    .finally(() => {
      setIsLoading(false)
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
      onLogin({email: data.email, password: userInfo.password}, resetForm)
      setIsLoading(false)
      navigate('/signin')
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
    .finally(() => {
      setIsLoading(false)
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
