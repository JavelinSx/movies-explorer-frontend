import './Header.css'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import Navigation from '../Navigation/Navigation'

function Header({isLoggin}){
    return(
        <>
            <div className={isLoggin ? 'header' : 'header header__dark'}>
                <Logo isLoggin={isLoggin}></Logo>
                { isLoggin ? <NavBar></NavBar> : <Navigation></Navigation>}
            </div>
        </>

    )
}

export default Header