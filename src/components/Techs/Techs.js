import './Techs.css'
function Techs(){
    return(
        <div className="techs" id='techs'>
            <p className="techs-header">Технологии</p>
            <h1 className="techs-title">7 технологий</h1>
            <p className="techs-info">
                На курсе веб-разработки мы освоили технологии, которые применили в дипломной работе
            </p>
            <ul className="techs-list">
                <li className="techs-item">HTML</li>
                <li className="techs-item">CSS</li>
                <li className="techs-item">JS</li>
                <li className="techs-item">React</li>
                <li className="techs-item">Git</li>
                <li className="techs-item">Express.js</li>
                <li className="techs-item">MongoDB</li>
            </ul>
        </div>
    )
}
export default Techs