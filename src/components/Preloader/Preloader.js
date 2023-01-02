import '../Preloader/Preloader.css'

function Preloader(){
    return(
        <div className='preloader'>
            <div className='preloader-container'>
                <span className='preloader-spin'></span>
            </div>
        </div>
    )
}

export default Preloader