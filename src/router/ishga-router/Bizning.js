import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'
import FontSizeAdjuster from '../../components/FontSizeAdjuster'
function Bizning() {
  return (
    <div className='grays'>
      <div className='hidden'>
      <FontSizeAdjuster />  
      </div>
      <img className='unique_page_img cart_img' src='https://piamg.uz/uploads/news_inner/KK/KK/pE/mosaic-financial-vybrana-konsultantom-po-privatizatsii.jpg' alt="" />
      <div className="container">
        <Link className='link' to={'/'}>
          <h3 className='logo'>BOSH SAHIFA</h3>
        </Link>
        <h3 className='kompaniya_h4'>KORPORATIV BOSHQARUV BO'YICHA HUJJATLAR</h3>
        <div className="banner_yangilik yangiliklar_flex container">
          <div className='yangilik_flex yangilik_page'>
            <div className="yangilik_card">
              <img className='yangilik_img imgs cart_img' src="https://umpt.uz/storage/upload/news_image/1721104695.jpg" alt="" />
              <h2 className='yangilik_h2'>Turkmaniston Vazirlar Mahkamasi Raisini o’rinbosari B. Atdayev boshchiligidagi delegatsiyasining tashrifi
              </h2>
              <button className='yangilik_btn'>Batafsil</button>
            </div>
          </div>
          <div className='yangilik_flex yangilik_page'>
            <div className="yangilik_card">
              <img className='yangilik_img imgs cart_img' src="https://umpt.uz/storage/upload/news_image/1720675460.JPG" alt="" />
              <h2 className='yangilik_h2'>Turkmaniston Vdasdasazirlar Mahkamasi Raisini o’rinbosari B. Atdayev boshchiligidagi delegatsiyasining tashrifi
              </h2>
              <button className='yangilik_btn'>Batafsil</button>
            </div>
          </div>
          <div className='yangilik_flex yangilik_page'>
            <div className="yangilik_card">
              <img className='yangilik_img imgs cart_img' src="https://umpt.uz/storage/upload/news_image/1719837599.jpg" alt="" />
              <h2 className='yangilik_h2'>Turkmaniston Vazirlar Mahkamasi Raisini o’rinbosari B. Atdayev boshchiligidagi delegatsiyasining tashrifi
              </h2>
              <button className='yangilik_btn'>Batafsil</button>
            </div>
          </div>
          <div className='yangilik_flex yangilik_page'>
            <div className="yangilik_card">
              <img className='yangilik_img imgs cart_img' src="https://umpt.uz/storage/upload/news_image/1719318655.jpg" alt="" />
              <h2 className='yangilik_h2'>Turkmaniston Vazirlar Mahkamasi Raisini o’rinbosari B. Atdayev boshchiligidagi delegatsiyasining tashrifi
              </h2>
              <button className='yangilik_btn'>Batafsil</button>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Bizning