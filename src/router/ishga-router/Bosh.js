import React, { useState } from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'
function Bosh() {
  const [murojaatRaqami, setMurojaatRaqami] = useState('');

  const handleInputChange = (e) => {
    setMurojaatRaqami(e.target.value);
  };

  const handleCheck = () => {
    // Handle the check status logic here
    console.log(`Checking status for: ${murojaatRaqami}`);
  };
  return (
    <div>
       <img className='unique_page_img' src='https://piamg.uz/uploads/news_inner/KK/KK/pE/mosaic-financial-vybrana-konsultantom-po-privatizatsii.jpg' alt="" />
      <div className="container">
        <Link className='link' to={'/'}>
          <h3 className='logo'>BOSH SAHIFA</h3>
        </Link>
        <h3 className='kompaniya_h4 bosh_h4'>KORPORATIV BOSHQARUV BO'YICHA HUJJATLAR</h3>
      <div className='bosh_flex'>
      <h3 className='bosh_h3'>MUROJAAT HOLATINI TEKSHIRISH</h3>
        <input
          className='bosh_inp' 
          type="text" 
          id="murojaatRaqami" 
          value={murojaatRaqami} 
          onChange={handleInputChange} 
          placeholder='Murojaat raqami *'
        />
        <br />
      <button className='bosh_btn' onClick={handleCheck}>Tekshirish</button>
      </div>
      </div>
    </div>
  )
}

export default Bosh