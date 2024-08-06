import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'
import FontSizeAdjuster from '../../components/FontSizeAdjuster'
function Dividendlar() {
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
        <h4 className='kor_h4 kor_h3'>Soʼnggi 3 yil ichida hisoblangan va toʼlangan dividendlar toʼgʼrisida maʼlumotlar
        “Uzavto Motors Powertrain” АJ (2018-2020gg.)</h4>
        <table className='dividend_table cart_img'>
  <tr>
    <th>Qaysi vaqt uchun hisoblangan/to'langan</th>
    <th>Hisoblangan dividendlar (ming so'mda)</th>
    <th>To'langan dividendlar (ming so'mda)</th>
  </tr>
  <tr>
    <td>2022 yil</td>
    <td>53,138,060,000.00</td>
    <td>53,138,060,000.00</td>
  </tr>
  <tr>
    <td>2021 yil</td>
    <td>1,548,000,000.00</td>
    <td>1,548,000,000.00</td>
  </tr>
  <tr>
    <td>2020 yil</td>
    <td>0.00</td>
    <td>0.00</td>
  </tr>
  <tr>
    <td>2019 yil</td>
    <td>0.00</td>
    <td>0.00</td>
  </tr>
  <tr>
    <td>2018 yil</td>
    <td>0.00</td>
    <td>0.00</td>
  </tr>
</table>

        </div>
    </div>
  )
}

export default Dividendlar