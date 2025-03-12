import React, { useState } from 'react'
import './MovieApp.css'
import { AiOutlineSearch } from "react-icons/ai";

const MovieApp = () => {
    const {searchQuery,setsearchQuery}=useState('');

    const handleSearchChange = (event) =>{
        setsearchQuery(event,target,value);
    }

    const handleSearchSubmit = async 
  return (
    <div>
        <h1>MoviesHome</h1>
        <div className='search-bar'>
            <input type='text' placeholder='Search Movies..' value={searchQuery} onChange={handleSearchSubmit} className='search-input'></input>
            <button onClick={handleSearchSubmit} className='search-button'>
            <AiOutlineSearch />
            </button>
        </div>
    </div>
  )
}

export default MovieApp