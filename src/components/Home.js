import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate=useNavigate();
    const navigateNext=(e)=>{
        navigate('/Search')
    }
  return (
    <div className='home-Page'>
        <h1>Welcome to Home Page</h1>
        <button className='home-Button' onClick={navigateNext}>Clik here and navigate to Search Page</button>
    </div>
  )
}

export default Home