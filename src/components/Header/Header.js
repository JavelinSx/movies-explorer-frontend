import './Header.css'
import logoImg from '../../images/logo-min.svg'
import NavBar from '../NavBar/NavBar'

function Header(){
    return(
        <div className='header'>
            <img className='logo logo__header' src={logoImg} alt='лого'></img>
            <NavBar></NavBar>
        </div>
    )
}

export default Header