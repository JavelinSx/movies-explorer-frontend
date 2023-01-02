import './Portfolio.css'
import iconArrow from '../../images/arrow-link.svg'
function Portfolio(){
    return(
        <div className="portfolio">
            <a href='https://github.com/JavelinSx' className='portfolio-link__github' rel="noopener noreferrer" target="_blank">GitHub</a>
            <span className="portfolio-subtitle">Портфолио</span>
            <ul className="porfolio-list">
                <li className="portfolio-item">
                    <a className='portfolio-item__link' href='https://javelinsx.github.io/russian-travel/' rel="noopener noreferrer" target="_blank">Статичный сайт</a>
                    <img className='portfolio-item__arrow' src={iconArrow} alt='иконка стрелки'></img>
                </li>
                <li className="portfolio-item">
                    <a className='portfolio-item__link' href='https://javelinsx.github.io/react-mesto-auth/' rel="noopener noreferrer" target="_blank">Адаптивный сайт</a>
                    <img className='portfolio-item__arrow' src={iconArrow} alt='иконка стрелки'></img>
                </li>
                <li className="portfolio-item">
                    <a className='portfolio-item__link' href='http://javelin.nomoredomains.icu/' rel="noopener noreferrer" target="_blank">Одностраничное приложение</a>
                    <img className='portfolio-item__arrow' src={iconArrow} alt='иконка стрелки'></img>
                </li>
            </ul>
        </div>
    )
}
export default Portfolio