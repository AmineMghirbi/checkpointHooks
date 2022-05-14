import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import MovieList from './Components/MovieList/MovieList';
import MovieForm from './Components/MovieForm/MovieForm';
import InitialDataSet from './Data/data.json';
import { Route, Routes } from 'react-router-dom';
import MovieDescription from './Components/MovieDescription/MovieDescription';

function App() {
  const [moviesState,SetMovies]=useState(InitialDataSet);
  const [moviesFiltred,SetMovieFilter]=useState(InitialDataSet);
  
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
      <Navbar/>
      <Routes>
        <Route path='/' element={<MovieList movies={moviesFiltred} filterByName={filterMovieByName} filterByRating={filterMovieByRating}/>}></Route>
        <Route path='/movies' element={<MovieList movies={moviesFiltred} filterByName={filterMovieByName} filterByRating={filterMovieByRating}/>}></Route>
        <Route path='/movies/:name' element={<MovieDescription movies={moviesState}/>}></Route>
        <Route path='/movieaddd' element={<MovieForm addMovie={addMovie}/>}></Route>
      </Routes>
    </>

  );
}

export default App;
