import React from 'react'
import './Footer.css'
import {FaLocationArrow, FaPhone, FaDog, FaFacebook, FaInstagram, FaYoutube, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";

function Footer() {
  return (
    <>
    {/* <div className='footer'>
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
        </div> */}

        

<footer className="bg-[#198754] dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
           
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                 <li>
                 <img src="https://umpt.uz/frontend/assets/images/logo.svg" alt="" /> 
                 </li>
                <li className="mt-[20px] flex gap-2">
                    <CiLocationOn className='text-white text-2xl'/>
                    <Link to="#" className="text-white ">
                    O‘zbekiston Respublikasi, Toshkent shahar, Sirg‘ali
                    </Link>
                </li>
                <li className="mt-[20px] flex items-center gap-2">
                    <MdOutlineAlternateEmail className='text-xl text-white'/>
                    <Link to="#" className="text-white">info@umpt.uz</Link>
                </li>
                <li className="mt-[20px] flex items-center gap-2">
                    <FaPhoneFlip className=' text-white'/>
                    <Link to="#" className="text-white">+998 71 2806400</Link>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Kompaniya</h2>
                </li>
                <li className="mb-4 ">
                    <Link to="#" className="text-white">Kompaniya haqida</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="text-white">Maqsad va qadriyatlarimiz</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" class="text-white">Komplayens xizmati vazifalari</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="text-white">Qarashlarimiz va vazifalarimiz</Link>
                </li>
            </ul>
        </div>
        <div>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                   <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Foydali havolalar</h2>
                 </li>
                <li className="mb-4">
                    <Link to="#" className="text-white">Yangiliklar</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="text-white">Mahsulotlar</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="text-white">Ishga taklif etamiz</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="text-white">Sayt xaritasi</Link>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Biz bilan aloqa</h2>
                </li>
                <li className="mb-4">
                    <Link to="#" className="text-white">Fuqarolarning murojaati</Link>
                </li>
            </ul>
        </div>
    </div>
    <div className="px-4 py-6 bg-[#19875400] dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white dark:text-gray-300 sm:text-center">© 2024  <Link to="https://flowbite.com/"></Link>UzAuto Motors Powertrain
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <Link to="https://www.facebook.com/UMPowertrain" className="text-white hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </Link>
              <Link to="https://www.facebook.com/UMPowertrain" className="text-white hover:text-gray-900 dark:hover:text-white">
                  <FaInstagram/>
                  <span className="sr-only">instagram</span>
              </Link>
              <Link to="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Forganization-guest%2Fmwlite%2Fcompany%2Fuz%25D0%25B0uto-motors-powertrain" className="text-white hover:text-gray-900 dark:hover:text-white">
                  <FaLinkedin/>
                  <span className="sr-only">linkedin</span>
              </Link>
              <Link to="https://www.youtube.com/@UzAutoMotorsPowertrain/featured" className="text-white hover:text-gray-900 dark:hover:text-white">
                  <FaYoutube/>
                  <span className="sr-only">Youtube</span>
              </Link>
        </div>
      </div>
    </div>
</footer>
        </>
  )
}

export default Footer