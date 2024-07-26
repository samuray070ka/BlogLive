import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'

function Rivojlanish() {
  return (
    <div className='rivojlanish'>
      <img className='unique_page_img' src='https://piamg.uz/uploads/news_inner/KK/KK/pE/mosaic-financial-vybrana-konsultantom-po-privatizatsii.jpg' alt="" />
      <div className="container">
        <Link className='link' to={'/'}>
          <h3 className='logo'>BOSH SAHIFA</h3>
        </Link>
        <h3 className='kompaniya_h4'>RIVOJLANTIRISH STRATEGIYASI</h3>
        <div className='btn_flex'>
        <button className='rivoj_btn'>Nomlanishi</button>
        <button className='rivoj_btn'>Yuklab olish</button>
        </div>
      </div>
    </div>
  )
}

export default Rivojlanish