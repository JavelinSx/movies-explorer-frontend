import './PromoNavigation.css'

function PromoNavigation(){
    return(
        <ul className='promo-navigation'>
            <li className='promo-navigation__item'>
                <a className='promo-navigation__link' href='/'>О проекте</a>
            </li>
            <li className='promo-navigation__item'>
                <a className='promo-navigation__link' href='/'>Технологии</a>
            </li>
            <li className='promo-navigation__item'>
                <a className='promo-navigation__link' href='/'>Студент</a>
            </li>
        </ul>

    )
}

export default PromoNavigation