import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'
import FontSizeAdjuster from '../../components/FontSizeAdjuster'

function Affillangan() {
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
        <h4 className='kor_h4'>“UzAuto Motors Powertrain” AJ affillangan shaxslar ro`yxati</h4>
        <table className='kor_table cart_img'>
  <tr>
    <td>№</td>
    <td>Jismoniy shaxs F.I.Sh. yoki Yuridik shaxs toʼliq nomi</td>
    <td>MANZILI</td>
  </tr>
  <tr>
    <td>1</td>
    <td>«UzAuto Passenger Vehicles Management» MChJ</td>
    <td>Oʼzbekiston Respublikasi, Toshkent shahri</td>
  </tr>
  <tr>
    <td>2</td>
    <td>«UzAuto Motors» АJ</td>
    <td>Oʼzbekiston Respublikasi, Аndijon viloyati</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Bo Inge Аndersson</td>
    <td>Oʼzbekiston Respublikasi, Toshkent shahri</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Mirzaev Baxtiyor Muxitdinjonovich</td>
    <td>Oʼzbekiston Respublikasi, Toshkent shahri</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Аxunov Baxrom Baxtiyorovich</td>
    <td>Oʼzbekiston Respublikasi, Toshkent shahri</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Rafikov Аbduvakkos Voxidovich</td>
    <td>Oʼzbekiston Respublikasi, Toshkent shahri</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Turaev Farxod Razzokovich</td>
    <td>Oʼzbekiston Respublikasi, Toshkent shahri</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Аkilov Xondamir Nurillaevich</td>
    <td>Oʼzbekiston Respublikasi, Toshkent shahri</td>
  </tr>
</table>
      </div>

    </div>
  )
}

export default Affillangan