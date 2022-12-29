import './Promo.css'

function Promo(){
    return(
        <div className='promo'>
            <h1 className='promo-title'>Учебный проект студента факультета Веб-разработки.</h1>
            <nav className='promo-navigation'>
                <ul className='promo-navigation__list'>
                    <li className='promo-navigation__item'>
                        <a className='promo-navigation__link' smooth href='/#about-project'>О проекте</a>
                    </li>
                    <li className='promo-navigation__item'>
                        <a className='promo-navigation__link' smooth href='/#techs'>Технологии</a>
                    </li>
                    <li className='promo-navigation__item'>
                        <a className='promo-navigation__link' smooth href='/#portfolio'>Студент</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Promo