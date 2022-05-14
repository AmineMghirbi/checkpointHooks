import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './MovieDescription.css'
const MovieDescription = (props) => {
    const [movie,setMovie] =useState({});
    const navigate=useNavigate();
    const params = useParams();
    useEffect(()=>{
        console.log("hi");   
        setMovie(props.movies.find(element => element.title===params.name));
    });
  return (
      <div className='description__container'>
      <div className="video-responsive">
                <iframe
                width="853"
                height="480"
                src={movie.trailer}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                />
            </div>
            <p>{movie.description}</p>
            <button onClick={()=>{navigate('/')}}>Back</button>
      </div>
  )
}

export default MovieDescription