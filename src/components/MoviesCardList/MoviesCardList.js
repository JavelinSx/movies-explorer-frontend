import './MoviesCardList.css'
import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'


function MoviesCardList({moviesList, btnLikeClassActive, btnLikeClassDisable, parentCall}){

    const [itemToShow, setItemToShow] = useState(0);
    const [dataShow, setDataShow] = useState(moviesList)
    const [countCard, setCountCard] = useState(0)
    const [countCardAdd, setCountCardAdd] = useState(2)

    useEffect(() => {
        if(window.screen.width>=320){
            setCountCard(5)
            setCountCardAdd(2)
        }
        if(window.screen.width>=768){
            setCountCard(8)
            setCountCardAdd(2)
        }
        if(window.screen.width>=1280){
            setCountCard(12)
            setCountCardAdd(4)
        }
    },[])

    useEffect(() => {
        setDataShow(moviesList.slice(0,countCard))
        setItemToShow(countCard+countCardAdd)
    },[countCard, countCardAdd, moviesList])


    const showMore = () => {
        setItemToShow((item)=>item+countCardAdd)
        setDataShow(moviesList.slice(0,itemToShow))
    }

    return(
        <>
            {
                dataShow.length === 0 ?             
                <div className='movies-card-list__fill-none'>
                    Нет сохранённых фильмов
                </div>
                :
                <ul className='movies-card-list'>
                    {
                        
                        dataShow.map((movie)=>
                            <MoviesCard
                                key={movie.id}
                                movie={movie}
                                parentCall={parentCall}
                                btnLikeClassActive={btnLikeClassActive}
                                btnLikeClassDisable={btnLikeClassDisable}
                            ></MoviesCard>
                        )
                    }
                </ul>

            }
            {
                dataShow.length>3 ? <button className='movies-card-list__add' onClick={showMore}>Ещё</button> : ''
            }
        </>
    )
}

export default MoviesCardList