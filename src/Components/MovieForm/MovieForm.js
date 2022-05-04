import React, { useState } from 'react'
import './MovieForm.css'
function MovieForm({addMovie}) {
  const [title,SetTitle]=useState('');
  const [rating,SetRating]=useState(1);
  const [poster,SetPoster]=useState('');
  const [desc,SetDesc]=useState('');
  const titleChange=(e)=>{
    SetTitle(e.target.value)
  }
  const ratingChange=(e)=>{
    SetRating(e.target.value)
  }
  const posterChange=(e)=>{
    SetPoster(e.target.value)
  }
  const descChange=(e)=>{
    SetDesc(e.target.value)
  }
  const resetForm=()=>{
    SetTitle('')
    SetRating(1)
    SetPoster('')
    SetDesc('')
  }
  const submitMovie=(e)=>{
    e.preventDefault();
    addMovie(
      {
        "title":title,
        "description": desc,
        "posterUrl":poster,
        "rating":Number(rating)
      }
    );
    console.log( {
      "title":title,
      "description": desc,
      "posterUrl":poster,
      "rating":rating
    })
    resetForm();
  }
  return (
    <form className='form__container' onSubmit={submitMovie}>
      <div className='formcontrol'>
        <p >Title</p>
        <input value={title} onChange={titleChange} type={"text"} className="input__size" required placeholder="Enter your movie title" />
      </div>
      <div className='formcontrol'>
        <p >Ratings</p>
        <select value={rating} onChange={ratingChange} required className="input__size">
          <option value={1}>1 star</option>
          <option value={2}>2 star</option>
          <option value={3}>3 star</option>
          <option value={4}>4 star</option>
          <option value={5}>5 star</option>
        </select>
      </div>
      <div className='formcontrol'>
        <p >Poster URL</p>
        <input value={poster} required onChange={posterChange} type={"text"} className="input__size" placeholder="Enter your movie poster image url" />
      </div>
      <div className='formcontrol'>
        <p >Description</p>
        <textarea value={desc} required onChange={descChange} className="input__size"></textarea>
      </div>
      <button type='submit' className='form__btn'>Apply</button>
    </form>
  )
}

export default MovieForm