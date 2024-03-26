import React from "react"
import "./footer.css"
function Footer() {
  return (
    <div className='footerContainer'>
      <div className='footer_row'>
        <div className='footer_col'>
          <h1>Learn Duke</h1>
          {/* <p>Lorem ipsum dolor sit amet consectetur,  */}
          {/* adipnt minus? Quo eum consectetur error libero.</p> */}
        </div>
        <div className='footer_col'>
          <h1 className='col_header'>office</h1>
          <p className='col_desc'>itpl road</p>
          <p className='col_desc'>whitefield</p>
          <p className='col_desc'>karnataka, bangalore</p>
          <p className='col_desc'>pin 560066</p>
          <p className='email_id'> learnduke@gmail.com</p>
        </div>
        <div className='footer_col'>
          <h1 className='col_links'>Links</h1>
          <ul className='column_links'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Features</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
