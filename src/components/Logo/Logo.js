import './Logo.css';
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo-min.svg';

function Logo(){
    return(
        <Link to={'/'} className='logo'>
            <img className='logo-img' alt='лого' src={logoImg}></img>
        </Link>
    )
}

export default Logo