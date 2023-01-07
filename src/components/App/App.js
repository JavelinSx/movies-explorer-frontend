import './App.css';
import { Routes, Route, useNavigate} from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useState } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MainApi from '../../utils/MainApi';

function App() {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });

  const onLogin = (userInfo) => {
    MainApi.login(userInfo)
    .then((res) => {
      setLoggedIn(true)
      navigate('/')
      console.log(res)
    })
  };

  const onRegister = (userInfo) => {
    MainApi.register(userInfo)
    .then((res) => {
      console.log(res)
    })
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>

          <Route exact path='/' element={
            <Main />
          }/>

          <Route path='/movies' element={
            <ProtectedRoute component={Movies} 
            />
          }/>

          <Route path='/saved-movies' element={
            <ProtectedRoute component={SavedMovies} />
          }/>

          <Route path='/profile' element={
            <ProtectedRoute component={Profile} />
          }/>

          <Route path='/signin' element={
            <Login />
          }/>


          <Route path='/signup' element={
            <Register handleRegister={onRegister}/>
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
