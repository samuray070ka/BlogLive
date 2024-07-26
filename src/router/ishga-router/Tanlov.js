import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'
function Tanlov() {
  return (
    <div>
      <img className='unique_page_img' src='https://piamg.uz/uploads/news_inner/KK/KK/pE/mosaic-financial-vybrana-konsultantom-po-privatizatsii.jpg' alt="" />
      <div className="container">
        <Link className='link' to={'/'}>
          <h3 className='logo'>BOSH SAHIFA</h3>
        </Link>
        <h3 className='kompaniya_h4'>KORPORATIV BOSHQARUV BO'YICHA HUJJATLAR</h3>
      <div>
      <p>Nomzodlarni tanlash uchun baholashning samarali vositalaridan biri  - xodimning kompetensiyalarini baholash uchun intervyu ishlatiladi.</p>
      <p>Namunaviy savollar ro'yxati bilan quyida tanishishingiz mumkin:</p>
      <ol>
        <li>Ish tajribangiz va ma’lumotingiz haqida so‘zlab bering.</li>
        <li>O‘z tajribangizdan kelib chiqib jamoangizga yordam bergan vaziyatni so‘zlab bering.</li>
        <li>O‘z g‘oyalaringizni rahbariyat oldida tez-tez himoya qilish va to‘liqligicha amalga oshirganmisiz?</li>
        <li>Qaysi yo‘nalishda (sohada) maksimal foyda keltirgan va korxonani rivojiga xissa qo‘shgan bo‘lardingiz?</li>
        <li>Sizning yordamingiz bilan mijoz o‘zi uchun foydali qarorni qabul qilgan holatga misol keltiring.</li>
        <li>Tajribangizdan kelib chiqib, xodimni o‘z ishini vaqtida samarali bajarishiga nima undaydi deb o‘ylaysiz?</li>
      </ol>
    </div>
    </div>
    </div>
  )
}

export default Tanlov