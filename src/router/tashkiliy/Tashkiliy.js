import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'
function Tashkiliy() {
  return (
    <div className='tashkiliy'>
      <img className='unique_page_img' src='https://piamg.uz/uploads/news_inner/KK/KK/pE/mosaic-financial-vybrana-konsultantom-po-privatizatsii.jpg' alt="" />
      <div className="container">
        <Link className='link' to={'/'}>
          <h3 className='logo'>BOSH SAHIFA</h3>
        </Link>
        <h3 className='kompaniya_h4'>TASHKILIY TUZILMA</h3>
      <img className='tuzilma_img' src="https://umpt.uz/storage/UzAuto%20Motors%20Powertrain%20(1).svg" alt="" />
      </div>
    </div>
  )
}

export default Tashkiliy