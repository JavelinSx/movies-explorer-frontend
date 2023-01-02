import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation(){
    return(
        <div className='navigation-container'>
            <Link to={'/signup'} className='navigation-signup'>Регистрация</Link>
            <Link to={'/signin'} className='navigation-signin'>Войти</Link>
        </div>
    )
}
export default Navigation