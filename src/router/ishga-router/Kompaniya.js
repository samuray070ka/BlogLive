import React from 'react'
import {Link} from 'react-router-dom'
import FontSizeAdjuster from '../../components/FontSizeAdjuster'
function Kompaniya() {
  return (
    <div className='grays'>
      <div className='hidden'>
      <FontSizeAdjuster />  
      </div>
      <img className='unique_page_img  cart_img' src='https://piamg.uz/uploads/news_inner/KK/KK/pE/mosaic-financial-vybrana-konsultantom-po-privatizatsii.jpg' alt="" />
      <div className="container">
        <Link className='link' to={'/'}>
          <h3 className='logo'>BOSH SAHIFA</h3>
        </Link>
        <h3 className='kompaniya_h4'>KORPORATIV BOSHQARUV BO'YICHA HUJJATLAR</h3>
        <h3 className='komp_h3'>Ishlab chiqarish jarayonlarining ko'p bosqichli auditi </h3>
        <h3 className='komp_h3'>Bilimlarni tekshirish</h3>
        </div>
    </div>
  )
}

export default Kompaniya