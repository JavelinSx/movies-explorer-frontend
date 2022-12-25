import './PromoNavigation.css'
import { HashLink } from 'react-router-hash-link';
function PromoNavigation(){
    return(
        <div className='promo-navigation__container'>
            <ul className='promo-navigation'>
                <li className='promo-navigation__item'>
                    <HashLink className='promo-navigation__link' smooth to='/#about-project'>О проекте</HashLink>
                </li>
                <li className='promo-navigation__item'>
                    <HashLink className='promo-navigation__link' smooth to='/#techs'>Технологии</HashLink>
                </li>
                <li className='promo-navigation__item'>
                    <HashLink className='promo-navigation__link' smooth to='/#portfolio'>Студент</HashLink>
                </li>
            </ul>
        </div>


    )
}

export default PromoNavigation