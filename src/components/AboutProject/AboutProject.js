import './AboutProject.css'

function AboutProject(){
    return(
        <div className="about-project" id='about-project'>
            <h1 className="about-project__title">О проекте</h1>
            <ul className="about-project__list">
                <li className="about-project__item">
                    <p className="about-project__info-title">
                        Дипломный проект включал 5 этапов
                    </p>
                    <p className="about-project__info-text">
                        Составление плана, работу над бэкендом, верстку, добавление функциональности и финальные доработки.
                    </p>
                </li>
                <li className="about-project__item">
                    <p className="about-project__info-title">
                        На выполнене диплома ушло 5 недель
                    </p>
                    <p className="about-project__info-text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </li>
            </ul>
            <ul className="about-project__timeline">
                <li className="about-project__timeline-item">
                    <span className='about-project__timeline-text'>1 неделя</span>
                </li>
                <li className="about-project__timeline-item">
                    <span className='about-project__timeline-text'>4 недели</span>
                </li>
                <li className="about-project__timeline-item">
                    <span className='about-project__timeline-text'>Back-end</span>
                </li>
                <li className="about-project__timeline-item">
                    <span className='about-project__timeline-text'>Front-end</span>
                </li>
            </ul>
        </div>
    )
}
export default AboutProject