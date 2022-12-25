import './Portfolio.css'
import mainPhoto from '../../images/main-photo.jpg'
function Portfolio(){
    return(
        <div className="portfolio" id='portfolio'>
            <h1 className="portfolio-title">Обо мне</h1>
            <img className="portfolio-avatar" alt="Моё фото" src={mainPhoto}></img>
            <p className="portfolio-name">Никита Зуев</p>
            <p className="portfolio-about">Фронтенд-разработчик</p>
            <p className="portfolio-text">
                Привет, мне 30 лет, женат, есть сын.
                Живу в маленьком посёлке, многие о нём слышали по телевизору - космодром "Плесецкий".
                В 2014-ом начал и в 2020-ом закончил заочное обучение в ВоГУ на факультете прикладной информатики.
                Во время учёбы, на тему диплома писал программу по сбору и анализу данных об онкобольных на python.
                Во время обучения работал в сфере кадастра и геодезии, так же совмещал с посменной работой оператором котельной.
                Во время работы в кадастре, писал на python, разработал небольшую программу для учёта и работы с клиентами,
                а так же автоматического заполнения некоторых документов.
                Долгое время увлекаюсь написанием электронной музыки, как отвлечение от работы.
                Какое-то время увлекался Java, но недолго. У меня нет друзей программистов, поэтому часто метался от одного языка к другому.
                В 2021 году принял решение пройти курсы по веб разработке и найти удалённую работу и хорошую компанию, 
                с желанием развиваться в этой сфере.
            </p>
            <a href='https://github.com/JavelinSx' className='portfolio-link__github' rel="noopener noreferrer" target="_blank">GitHub</a>
            <span className="portfolio-subtitle">Портфолио</span>
            <ul className="porfolio-list">
                <li className="portfolio-item">
                    <a className='portfolio-item__link' href='https://javelinsx.github.io/russian-travel/' rel="noopener noreferrer" target="_blank">Статичный сайт</a>
                </li>
                <li className="portfolio-item">
                    <a className='portfolio-item__link' href='https://javelinsx.github.io/react-mesto-auth/' rel="noopener noreferrer" target="_blank">Адаптивный сайт</a>
                </li>
                <li className="portfolio-item">
                    <a className='portfolio-item__link' href='http://javelin.nomoredomains.icu/' rel="noopener noreferrer" target="_blank">Одностраничное приложение</a>
                </li>
            </ul>
        </div>
    )
}
export default Portfolio