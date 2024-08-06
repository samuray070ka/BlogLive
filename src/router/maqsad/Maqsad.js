import React from 'react'
import {Link} from 'react-router-dom'
import '../../index.css'
import FontSizeAdjuster from '../../components/FontSizeAdjuster'

function Maqsad() {
  return (
    <div className='maqsad grays'>
        <div className='hidden'>
      <FontSizeAdjuster />  
      </div>
      <img className='unique_page_img cart_img' src='https://piamg.uz/uploads/news_inner/KK/KK/pE/mosaic-financial-vybrana-konsultantom-po-privatizatsii.jpg' alt="" />
      <div className="container">
        <Link className='link' to={'/'}>
          <h3 className='logo'>BOSH SAHIFA</h3>
        </Link>
        <h1 className='kompaniya_h4'>MAQSAD VA QADRIYATLARIMIZ
        </h1>
          <h3 className='maqsad_h3'>BIZNING MAQSADLARIMIZ</h3>
          <ul className='maqsad_collaction'>
            <li className='kompaniya_item'>Biz har bir ishda xavfsizlikka rioya qilamiz.</li>
            <li className='kompaniya_item'>Biz mijozlarimiz ishonchini qozona oluvchi jahon darajasidagi dvigatellarni ishlab chiqaramiz.</li>
            <li className='kompaniya_item'>Biz ishlab chiqarish jarayonlari va metodlarini doimiy ravishda takomillashtiramiz.</li>
            <li className='kompaniya_item'>Biz innovatsion texnologiyalarni joriy qilish, mahalliylashtirishni kengaytirish va xarajatlarni optimallashtirish orqali avtomobilsozlik sanoatining rivojlanishiga o'z hissamizni qo'shamiz.
            </li>
            <li className='kompaniya_item'>Biz atrof-muhitga salbiy ta'sir va energiya sarfini kamaytiramiz.</li>
          </ul>
          <img className='kompaniya_img_small cart_img' src="https://umpt.uz/storage/1.jpg" alt="" />
          <h3 className='maqsad_h3'>BIZNING QADRIYATLARIMIZ</h3>
        <div className="table-container">
      <table className="styled-table cart_img">
        <thead>
          <tr>
            <th>Mijoz</th>
            <th>Yuqori standartlar</th>
            <th>O'zaro munosabatlar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Mijoz biz uchun eng muhim ahamiyatga ega. Biz ularning ehtiyojlariga diqqat bilan quloq solamiz.
              Bizning ishimiz asosida xavfsizlik va sifat turadi va biz ulardan hech qachon voz kechmaymiz.
            </td>
            <td>
              Hallolik va vijdonlilik hamma harakatlarimizning asosidir. Ixtirochilik va innovatsiya bizni harakatlantiruvchi kuchdir.
              Biz qiyinchiliklar haqida ochiq gapiramiz. Kompaniyaning maqsadlariga erishish uchun har birimiz mas’ulmiz.
            </td>
            <td>
              Bizning muvaffaqiyatlarimiz kompaniya ichidagi va undan tashqaridagi o'zaro munosabatlarimizga bog'liq.
              Mijozlarning bizga bo'lgan sadoqatini oshirish maqsadida turli xil fikrlash va har tomonlama hamkorlikni rag'batlantiramiz.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <img className='kompaniya_img_small cart_img' src="https://umpt.uz/storage/2.jpg" alt="" />
        </div>
    </div>
  )
}

export default Maqsad