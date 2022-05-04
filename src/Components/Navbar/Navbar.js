import './Navbar.css'
import React from 'react'

function Navbar({toggleHome,toggleForm}) {
    return (
        <header className='nav__container'>
            <h3 className='nav__title' onClick={toggleHome}>Watch List</h3>
            <button className='nav__button' onClick={toggleForm}> + Add Movie</button>
        </header>
    )
}

export default Navbar
