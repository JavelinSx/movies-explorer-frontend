import './Promo.css'
import { HashLink } from 'react-router-hash-link';
function Promo(){
    return(
        <div className='promo'>
            <h1 className='promo-title'>Учебный проект студента факультета Веб-разработки.</h1>
            <nav className='promo-navigation'>
                <ul className='promo-navigation__list'>
                    <li className='promo-navigation__item'>
                        <HashLink className='promo-navigation__link'  to='/#about-project'>О проекте</HashLink>
                    </li>
                    <li className='promo-navigation__item'>
                        <HashLink className='promo-navigation__link'  to='/#techs'>Технологии</HashLink>
                    </li>
                    <li className='promo-navigation__item'>
                        <HashLink className='promo-navigation__link'  to='/#about-me'>Студент</HashLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Promo