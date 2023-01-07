import './Promo.css'
function Promo(){
    return(
        <div className='promo'>
            <h1 className='promo-title'>Учебный проект студента факультета Веб-разработки.</h1>
            <nav className='promo-navigation'>
                <ul className='promo-navigation__list'>
                    <li className='promo-navigation__item'>
                        <a href='/' className='promo-navigation__link'  to='/#about-project'>О проекте</a>
                    </li>
                    <li className='promo-navigation__item'>
                        <a href='/' className='promo-navigation__link'  to='/#techs'>Технологии</a>
                    </li>
                    <li className='promo-navigation__item'>
                        <a href='/' className='promo-navigation__link'  to='/#about-me'>Студент</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Promo