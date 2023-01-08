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

function App() {
  const navigate = useNavigate()
  const [movie, setMovie] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState({});
  const [error, setError] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  useEffect(() => {
    MainApi.getUserInfo()
    .then((data) => { 
      setLoggedIn(true)
      setCurrentUser({
        name: data.name,
        email: data.email,
      })
      navigate('/movies')
    })
    .catch((err) => console.log(err))
  },[])
  useEffect(() => {
    setError('')
  }, [navigate])
  // useEffect(() => {
  //   if(loggedIn){
  //     MovieApi.getMovies()
  //     .then(movie => setMovie({...movie, movie}))
  //     .catch((err) => console.log(err.message))
  //     .finally(console.log(movie))
  //   }
  // },[loggedIn, movie])

  const onSignout = () => {
    MainApi.signout()
    .then(() => {
      setCurrentUser({
        name: '',
        email: '',
      })
      setLoggedIn(false)
      navigate('/')
    })
  }

  const onLogin = (userInfo, resetForm) => {
    setIsLoading(true)
    MainApi.login(userInfo)
    .then((data) => {
      navigate('/movies')
      setCurrentUser({
        name: data.name,
        email: data.email,
      })
      setLoggedIn(true)
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
            />
          }/>

          <Route path='/saved-movies' element={
            <ProtectedRoute 
              component={SavedMovies}
              loggedIn={loggedIn} 
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
