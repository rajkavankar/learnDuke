import React from 'react'
import './navbar.css'
import logo from '../assets/LearndukeLogo.png'
function navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt='' className='logo'/>
      <h1>Learn Duke</h1>

      <div className='search-box'>
        <input type='text' placeholder='Search' />
        <img src='' alt='' />    
             {/*icons for search bar  */}
      </div>

      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>

      
    </div>
  )
}

export default navbar
