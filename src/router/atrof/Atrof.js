import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'
function Atrof() {
  return (
    <div className='atrof'>
       <img className='unique_page_img' src='https://piamg.uz/uploads/news_inner/KK/KK/pE/mosaic-financial-vybrana-konsultantom-po-privatizatsii.jpg' alt="" />
      <div className="container">
        <Link className='link' to={'/'}>
          <h3 className='logo'>BOSH SAHIFA</h3>
        </Link>
        <h3 className='kompaniya_h4'>ATROF-MUHITNI MUHOFAZA QILISH SIYOSATI</h3>
        <img className='atrof_img' src="" alt="" />
      </div>
    </div>
  )
}

export default Atrof