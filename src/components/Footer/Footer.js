import { Link } from 'react-router-dom'
import './Footer.css'

function Footer({addClassPadding}){
    return(
        <footer className={addClassPadding ? 'footer footer-main' : 'footer'}>
            <span className='footer-title'>Учебный проект Яндекс.Практикум х BeatFilm.</span>
            <div className='footer-links__container'>
                <ul className='footer-links'>
                    <li className='footer-links__item'>
                        <Link className='footer-link' to={'https://practicum.yandex.ru/'}>Яндекс.Практикум</Link>
                    </li>
                    <li className='footer-links__item'>
                        <Link className='footer-link' to={'https://github.com/JavelinSx'}>GitHub</Link>
                    </li>
                </ul>
                <span className='footer-date'>&#169; {new Date().getFullYear()}</span>
            </div>
        </footer>
    )
}

export default Footer