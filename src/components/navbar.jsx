import React from "react"
import "./navbar.css"
import logo from "../assets/LearndukeLogo.png"
import { IoSearchOutline } from "react-icons/io5"
function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt='' className='logo' />
      <h1 className='logo_title'>Learn Duke</h1>

      <div className='search-box'>
        <IoSearchOutline />
        <input type='text' placeholder='Search questions' />
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

export default Navbar
