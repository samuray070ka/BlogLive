import React from 'react'
import './UniquePage.css'
import {DATA, aboutCompany} from '../../static/Index'
import img from '../../assets/Screenshot 2024-07-25 165338.png'
import {Link} from 'react-router-dom'
function UniquePage() {
  return (
    <div className='unique_pae'>
      <img className='unique_page_img' src={img} alt="" />
      <div className='black'></div>
      <div className="container">
        <Link className='link' to={'/'}>
          <h3 className='logo'>BOSH SAHIFA</h3>
        </Link>
      </div>
    </div>
  )
}

export default UniquePage