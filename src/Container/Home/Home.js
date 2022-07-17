import React from 'react'
import Profile from '../Profile/Profile'
import Navbar from '../Navbar/Navbar'
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
        <Navbar/>
        <Profile/>
    </div>
  )
}

export default Home