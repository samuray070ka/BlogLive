import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'
import FontSizeAdjuster from '../../components/FontSizeAdjuster'
function Nizom() {
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
        <table className='all_table'>
  <tr>
    <th>Nomlanishi</th>
    <th>Yuklab olish</th>
  </tr>
  <tr>
    <td>IJROIYA ORGAN HAQIGAGI NIZOM</td>
    <td><a href="#">Yuklab olish</a></td>
  </tr>
  <tr>
    <td>ICHKI AUDIT XIZMATI HAQIDAGI NIZOM</td>
    <td><a href="#">Yuklab olish</a></td>
  </tr>
  <tr>
    <td>YAGONA AKSIYADOR TOMONIDAN QAROR QABUL QILISH TARTIBI HAQIDAGI NIZOM</td>
    <td><a href="#">Yuklab olish</a></td>
  </tr>
  <tr>
    <td>KUZATUV KENGASHI HAQIDA NIZOM</td>
    <td><a href="#">Yuklab olish</a></td>
  </tr>
</table>
      </div>
    </div>
  )
}

export default Nizom