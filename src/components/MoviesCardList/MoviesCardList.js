import './MoviesCardList.css'
import { useEffect, useMemo, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'
import { urlApi } from '../../utils/constant.js';
import useCurrentWidth from '../../utils/resizeListener'

function MoviesCardList({movies, btnLikeClassActive, btnLikeClassDisable, handleClickButtonOnCard, urlSavedImage}){
    const [itemToShow, setItemToShow] = useState(0);
    const [dataShow, setDataShow] = useState([])
    const [countCard, setCountCard] = useState(0)
    const [countCardAdd, setCountCardAdd] = useState(2)

    let width = useCurrentWidth()

    useEffect(() => {
        if(width>=320){
            setCountCard(5)
            setCountCardAdd(2)
        }
        if(width>=768){
            setCountCard(8)
            setCountCardAdd(2)
        }
        if(width>=1280){
            setCountCard(12)
            setCountCardAdd(4)
        }
    },[width])

    useMemo(() => {
        setDataShow(movies.slice(0,countCard))
        setItemToShow(countCard+countCardAdd)
    },[countCard, countCardAdd, movies])

    const showMore = () => {
        setItemToShow((item)=>item+countCardAdd)
        setDataShow(movies.slice(0,itemToShow))
    }

    return(
        <>
            {
                <ul className='movies-card-list'>
                    {
                        dataShow.map((movie)=>
                            <MoviesCard
                                key={movie.id || movie.movieId}
                                movie={movie}
                                urlApi={urlApi}
                                urlSavedImage={urlSavedImage}
                                handleClickButtonOnCard={(movie)=>handleClickButtonOnCard(movie)}
                                btnLikeClassActive={btnLikeClassActive}
                                btnLikeClassDisable={btnLikeClassDisable}
                            ></MoviesCard>
                        )
                    }
                </ul>
            }
            {
                dataShow.length!==movies.length ? <button className='movies-card-list__add' onClick={showMore}>Ещё</button> : null
            }
        </>
    )
}

export default MoviesCardList