import './Navbar.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate=useNavigate();
    return (
        <header className='nav__container'>
            <h3 className='nav__title' onClick={()=>{navigate('/movies')}}>Watch List</h3>
            <button className='nav__button' onClick={()=>{navigate('/movieaddd')}}> + Add Movie</button>
        </header>
    )
}

export default Navbar
