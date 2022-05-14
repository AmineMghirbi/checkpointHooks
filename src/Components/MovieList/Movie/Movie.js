import React from 'react'
import './Movie.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'
function Movie({title,description,posterUrl,rating}) {
  const navigate=useNavigate();
  return (
    <div className='card__container' onClick={()=>{navigate(`/movies/${title}`)}}>
      <div className='card__left'>
        <img className='card__img' src={posterUrl} alt='Not available now'/>
      </div>
      <div className='card__right'>
        <h1 className='card__title'>{title}</h1>
        <div>
        {[...Array(rating)].map((star) => {        
        return (         
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>       
        );
        })}      
        </div>
        <p className='card_description'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default Movie
