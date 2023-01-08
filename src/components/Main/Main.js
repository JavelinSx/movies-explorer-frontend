import './Main.css'
import Promo from '../Promo/Promo'
import AboutMe from '../AboutMe/AboutMe'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
function Main({loggedIn}){
    return(
        <main className='main'>
            <Header loggedIn={loggedIn}></Header>
            <Promo></Promo>
            <AboutProject></AboutProject>
            <Techs></Techs>
            <AboutMe></AboutMe>
            <Footer addClassPadding={true}></Footer>
        </main>
    )
}

export default Main