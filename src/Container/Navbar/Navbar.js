import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
       <div className='navbar-logo'>
        <a href='#home'> SI-MoH<span>AMED-RI</span></a>
       </div>
        <div className='navbar-items'>
            	 <a href='#service'>Service</a>
            	 <a href='#projects'>Projects</a>
				 <a href='#contact'>Contacts</a>
        </div>
    </div>
  )
}

export default Navbar