import './PreloaderButton.css';
import iconLoad from '../../images/spin.svg';

function PreloaderButton(){
    return(
        <div className='preloader-button__container'>
            <img src={iconLoad} alt='иконка загрузки' className='preloader-button'></img>
        </div>
    )
}

export default PreloaderButton