import './NavBar.css'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar(){
    const [menuActive, setMenuActive] = useState(false)

    return(
        <nav className='navbar'>
            <button className={menuActive ? 'navbar__burger navbar__burger-animation' : 'navbar__burger'} onClick={() => setMenuActive(!menuActive)}>
                <span className={menuActive ? 'navbar__burger-span navbar__burger-span-hide' : 'navbar__burger-span'}></span>
            </button>
            <div className={menuActive ? 'navbar__menu-container navbar__menu-container-active' : 'navbar__menu-container'}>
                <ul className='navbar__menu'>
                    <li className='navbar__item'>
                        <NavLink to={'/'} className={({isActive}) => (isActive ? 'navbar__link-active' : 'navbar__link')}>
                            Главная
                        </NavLink>
                    </li>
                    <li className='navbar__item'>
                        <NavLink to={'/movies'} className={({isActive}) => isActive ? 'navbar__link-active' : 'navbar__link'}>
                            Фильмы
                        </NavLink>
                    </li>
                    <li className='navbar__item'>
                        <NavLink to={'/saved-movies'} className={({isActive}) => isActive ? 'navbar__link-active' : 'navbar__link'}>
                            Сохранённые фильмы
                        </NavLink>
                    </li>
                    <li className='navbar__item'>
                        <Link to={'/profile'} className='navbar__profile-link'>
                            Аккаунт
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={menuActive ? 'navbar__wrapper navbar__wrapper-active' : 'navbar__wrapper'}></div>
        </nav>
    )
}

export default NavBar