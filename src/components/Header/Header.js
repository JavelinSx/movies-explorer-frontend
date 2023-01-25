import './Header.css'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import Navigation from '../Navigation/Navigation'

function Header({loggedIn}){
    return(
        <header className='header'>
            <Logo></Logo>
            {loggedIn ? <NavBar></NavBar> : <Navigation></Navigation>}
        </header>
    )
}

export default Header