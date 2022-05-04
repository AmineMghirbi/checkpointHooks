import React, { useState } from 'react'
import Movie from './Movie/Movie'
import './MovieList.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"
function MovieList({movies,filterByName,filterByRating}) {
  const [title,setInput]=useState('');
  const [rating,setRating]=useState(0);
  const changeFilterInput=(e)=>{
    setInput(e.target.value);
    filterByName(e.target.value);
  }
  const changeFilterRating=(e)=>{
    console.log(e.target.value)
    setRating(e.target.value);
    filterByRating(e.target.value);
  }
  return (
      <div className='container'>
        <div className='filter__container'>
          <form>
            <input type={"text"} value={title} onChange={changeFilterInput} className="filter__input"/>
            <div className='stars__container'>
              <label>
                <input type={"radio"} name="ratings" style={{display:"none"}} value={1} onClick={()=>setRating(1)} onChange={changeFilterRating}/>
                <FontAwesomeIcon icon={faStar} size="lg" className='star s1' color={(1<=rating)?"gold":"black"}></FontAwesomeIcon> 
              </label>

              <label>
              <input type={"radio"} name="ratings" style={{display:"none"}} value={2} onClick={()=>setRating(2)} onChange={changeFilterRating}/>
              <FontAwesomeIcon icon={faStar} size="lg" className='star s2' color={(2<=rating)?"gold":"black"}></FontAwesomeIcon>
              </label>   

              <label>
              <input type={"radio"} name="ratings" style={{display:"none"}} value={3} onClick={()=>setRating(3)} onChange={changeFilterRating}/>
              <FontAwesomeIcon icon={faStar} size="lg" className='star s3' color={(3<=rating)?"gold":"black"}></FontAwesomeIcon>
              </label>              
              <label>
              <input type={"radio"} name="ratings" style={{display:"none"}} value={4} onClick={()=>setRating(4)} onChange={changeFilterRating}/>
              <FontAwesomeIcon icon={faStar} size="lg" className='star s4' color={(4<=rating)?"gold":"black"}></FontAwesomeIcon> 
              </label>              
              <label>
              <input type={"radio"} name="ratings" style={{display:"none"}} value={5} onClick={()=>setRating(5)} onChange={changeFilterRating}/>
              <FontAwesomeIcon icon={faStar} size="lg" className='star s5' color={(5<=rating)?"gold":"black"}></FontAwesomeIcon> 
              </label>


 

            </div>
            {/*<button className='filter__btn'>Filter</button>*/}
          </form>
        </div>
        <div className='movies__container'>
              {movies.map(movie=><Movie {...movie}/>)}
        </div>
      </div>

  )
}

export default MovieList