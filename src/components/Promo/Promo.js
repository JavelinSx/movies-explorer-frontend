import './Promo.css'
import promoLogo from '../../images/prakticum-logo-min.svg'
import PromoNavigation from '../PromoNavigation/PromoNavigation'
function Promo(){
    return(
        <div className='promo'>
            <img className='promo-logo' src={promoLogo} alt='лого-практикума'></img>
            <h1 className='promo-title'>Учебный проект студента факультета Веб-разработки.</h1>
            <PromoNavigation></PromoNavigation>
        </div>
    )
}

export default Promo