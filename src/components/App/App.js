import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchForm></SearchForm>
      <FilterCheckBox></FilterCheckBox>
      <MoviesCardList></MoviesCardList>
    </div>
  );
}

export default App;
