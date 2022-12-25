import './Logo.css';
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo-min.svg';

function Logo({isLoggin}){
    return(
        <Link to={'/'} className={isLoggin ? 'logo' : 'logo logo__header-dark'}>
            <img className='logo-img' alt='лого' src={logoImg}></img>
        </Link>
    )
}

export default Logo