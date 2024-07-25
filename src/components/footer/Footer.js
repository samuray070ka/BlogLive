import React from 'react'
import './Footer.css'
import {FaLocationArrow, FaPhone, FaDog, FaFacebook, FaInstagram, FaYoutube, FaLinkedin} from 'react-icons/fa'
function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='container flex'>

        <div className='footer_img'>
            <img src="https://umpt.uz/frontend/assets/images/logo.svg" alt="" />
                <div className='footer_icon'>
                    <FaLocationArrow className='footer_svg'/>
                    <p className='footer_icon_p width'>O‘zbekiston Respublikasi, Toshkent shahar, Sirg‘ali tumani, Yangi Qumariq MFI, Istiqlol ko‘chasi, 1-uy.</p>
                </div>

                <div className='footer_icon'>
                    <FaDog className='footer_svg'/>
                    <p className='footer_icon_p'>info@umpt.uz</p>
                </div>

                <div className='footer_icon'>
                    <FaPhone className='footer_svg'/>
                    <p className='footer_icon_p'>+998 71 2806400</p>
                </div>

        </div>
        <div className='footer_text'>
            <div className='footer_flex'>
                <ul className='footer_collaction'>
                    <h3 className='footer_h3'>Kompaniya</h3>
                    <li className='footer_item'>Kompaniya haqida</li>
                    <li className='footer_item'>Maqsad va qadriyatlarimiz</li>
                    <li className='footer_item'>Komplayens xizmati vazifalari</li>
                    <li className='footer_item'>Qarashlarimiz va vazifalarimiz</li>
                </ul>
            </div>
            <div className='footer_flex'>
                <ul className='footer_collaction'>
                    <h3 className='footer_h3'>Foydali havolalar</h3>
                    <li className='footer_item'>Yangiliklar</li>
                    <li className='footer_item'>Mahsulotlar</li>
                    <li className='footer_item'>Ishga taklif etamiz</li>
                    <li className='footer_item'>Sayt xaritasi</li>
                </ul>
            </div>
            <div className='footer_flex'>
                <ul className='footer_collaction'>
                    <h3 className='footer_h3'>Biz bilan aloqa</h3>
                    <li className='footer_item'>Fuqarolarning murojaati</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
        <div className='footer_bottom'>
            <div className="container bottom_flex">
            <div className='bottom_text'>
                <h3 className='bottom_h3'>© 2024 UzAuto Motors Powertrain</h3>
            </div>
            <div className='bottom_icons'>
                <h3 className='bottom_h3'>Bizni kuzatib boring: </h3>
                <div>
                <FaFacebook className='bottom_icon'/>
                <FaInstagram className='bottom_icon'/>
                <FaLinkedin className='bottom_icon'/>
                <FaYoutube className='bottom_icon'/>
                </div>
            </div>
            </div>
        </div>
        </>
  )
}

export default Footer