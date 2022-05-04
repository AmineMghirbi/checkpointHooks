import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import MovieList from './Components/MovieList/MovieList';
import MovieForm from './Components/MovieForm/MovieForm';
import InitialDataSet from './Data/data.json';

function App() {
  const [home,SetHome]=useState(0)
  const [moviesState,SetMovies]=useState(InitialDataSet);
  const [moviesFiltred,SetMovieFilter]=useState(InitialDataSet);
  
  const toggleHome=()=>{
    SetHome(0);
  }
  const toggleForm=()=>{
    SetHome(1);
  }
  const addMovie=(movie)=>{
    SetMovies([...moviesState,movie])
    SetMovieFilter([...moviesState,movie])

  }
  const filterMovieByName=(name)=>{
    if(!name){
      SetMovieFilter([...moviesState])
      return;
    }
    SetMovieFilter(
      moviesState.filter(movie=>
          name&&movie.title.toLowerCase().startsWith(name.toLowerCase())
      )
    )
  }
  const filterMovieByRating=(rate)=>{
    SetMovieFilter(
      moviesState.filter(movie=>
          movie.rating>=rate
      )
    )
  }
  return (
    <>
      <Navbar toggleHome={toggleHome} toggleForm={toggleForm}/>
      {home==0?<MovieList movies={moviesFiltred} filterByName={filterMovieByName} filterByRating={filterMovieByRating}/>:<MovieForm addMovie={addMovie}/>}
    </>

  );
}

export default App;
