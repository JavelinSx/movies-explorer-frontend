import { Link } from 'react-router-dom'
import './Footer.css'

function Footer(){
    return(
        <div className='footer'>
            <span className='footer-title'>Учебный проект Яндекс.Практикум х BeatFilm.</span>
            <ul className='footer-links'>
                <li className='footer-links__item'>
                    <Link className='footer-link' to={'/'}>Яндекс.Практикум</Link>
                </li>
                <li className='footer-links__item'>
                    <span className='footer-date'>&#169; {new Date().getFullYear()}</span>
                </li>
            </ul>
        </div>
    )
}

export default Footer