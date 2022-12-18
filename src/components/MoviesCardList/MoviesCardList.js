import './MoviesCardList.css'
import { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'
import dataMovie from '../../utils/dbData.json'

function MoviesCardList(){

    const [itemToShow, setItemToShow] = useState(5);
    const [dataShow, setDataShow] = useState(dataMovie.slice(0,itemToShow))

    const generateCardMovie = () => {
        console.log(window.screen)
    }
    const showMore = () => {
        setDataShow(dataMovie.slice(0,itemToShow))
        setItemToShow((item)=>item+5)
        generateCardMovie()
        console.log(itemToShow)
    }
    return(
        <>
            <ul className='movies'>
                {
                    dataShow.map((movie)=>
                        <MoviesCard
                            key={movie.id}
                            name={movie.nameRU}
                            duration={movie.duration}
                            image={movie.image}
                        ></MoviesCard>
                    )
                }
            </ul>
            <button className='movies-add' onClick={showMore}>Ещё</button>
        </>
    )
}

export default MoviesCardList