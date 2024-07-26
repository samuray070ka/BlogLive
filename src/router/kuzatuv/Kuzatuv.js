import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'
function Kuzatuv() {
  return (
    <div className='kuzatuv'>
       <img className='unique_page_img' src='https://piamg.uz/uploads/news_inner/KK/KK/pE/mosaic-financial-vybrana-konsultantom-po-privatizatsii.jpg' alt="" />
      <div className="container">
        <Link className='link' to={'/'}>
          <h3 className='logo'>BOSH SAHIFA</h3>
        </Link>
        <h3 className='kompaniya_h4'>KUZATUV KENGASHI</h3>
        <div className='kuzatuv_flex'>
          <h3 className='kuzatuv_h3'>Rafiqov A.V. -"Uzavtosanoat" AJ boshqaruv raisi birinchi o'rinbosari</h3>
          <h3 className='kuzatuv_h3'>Turayev F.R. -"Uzavtosanoat" AJ boshqaruv raisi o'rinbosari</h3>
          <h3 className='kuzatuv_h3'>Ahunov B.B. -«Uzauto Passenger Vehicles Management» MCHJ bosh direktori</h3>
          <h3 className='kuzatuv_h3'>Aqilov H.N. -"Uzavtosanoat" AJ boshqarma boshlig'i</h3>
          <h3 className='kuzatuv_h3'>Mirzayev B.M. -"Uzavtosanoat" AJ boshqarma boshlig'i</h3>
        </div>
        </div>
    </div>
  )
}

export default Kuzatuv