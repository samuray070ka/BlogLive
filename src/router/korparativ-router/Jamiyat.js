import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'
function Jamiyat() {
  return (
    <div>
        <img className='unique_page_img' src='https://piamg.uz/uploads/news_inner/KK/KK/pE/mosaic-financial-vybrana-konsultantom-po-privatizatsii.jpg' alt="" />
      <div className="container">
        <Link className='link' to={'/'}>
          <h3 className='logo'>BOSH SAHIFA</h3>
        </Link>
        <h3 className='kompaniya_h4'>KORPORATIV BOSHQARUV BO'YICHA HUJJATLAR</h3>
      <h3 className='jamiyat'>Jamiyat tomonidan sotib olingan aktsiyalar mavjud emas.</h3>
      </div>
    </div>
  )
}

export default Jamiyat