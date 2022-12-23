import './Main.css'
import Promo from '../Promo/Promo'
import AboutMe from '../AboutMe/AboutMe'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
function Main(){
    return(
        <div className='main'>
            <Header isLoggin={false}></Header>
            <Promo></Promo>
            <AboutProject></AboutProject>
            <Techs></Techs>
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
            <Footer></Footer>
        </div>
    )
}

export default Main