import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GrFormNextLink } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiTick } from "react-icons/ti";
import Marquee from "react-fast-marquee";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import { FaCheck } from 'react-icons/fa';
import { b_doh01, b_doh02, b_doh03, b_doh04, b_doh05 } from '../../service/index';
import { useSelector } from 'react-redux';
import FontSizeAdjuster from '../../components/FontSizeAdjuster';

function Home() {
  const { color, fontSize } = useSelector((state) => state.theme);
  // const settings = {
  //   dots: false,
  //   infinite: true, 
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1, 
  //   autoplay: true,
  //   autoplaySpeed: 2000, 
  //   pauseOnHover: false, 
  //   arrows: false, 
  // };
  return (
    <div className='h-full w-full grays'>
      <section className={`${color}`} style={{ fontSize: `${fontSize}px homePage` }}>
      <div className='hidden'>
      <FontSizeAdjuster />  
      </div>
      <div>
      <video className="homepage-video mb-7 cart_img" autoPlay loop muted>
          <source className='video_home' src="https://umpt.uz/storage/upload/slider_image/1692765835.mp4" type="video/mp4" />
        </video>
      </div>

        <div className="container">
          <div className='md:flex items-center  justify-between mb-10'>
            <div className='banner_textsss'>
              <div className='flex items-center gap-2'>
                <div className='h-[2px] w-6 bg-[#0F417D]'></div>
                 <p className='text-[#0F417D] text-[20px] font-semibold'>Biz haqimizda</p>
              </div>
              <h2 className='text-[20px] font-bold md:max-w-[600px] md:text-[55px]'>
              «UZAUTO MOTORS POWERTRAIN»
              </h2>
              <p className='text-[8px] md:text-[24px] my-[25px] max-w-[550px]'>
              “UzAuto Motors Powertrain” maqbul quvvat va optimal yoqilg'i sarfi uchun mo'ljallangan benzin va ikki xil yonilg’ili (benzin / gaz) B-DOHC (Double Overhead Camshaft) ikkinchi avlod dvigatellarini ishlab chiqaradi. 
              Ular O'zbekiston bozori uchun mo’ljallangan bo’lib, shuningdek, Rossiya, AQSh va MDH davlatlariga ham eksport qilinadi.
              </p>
              <button className='flex items-center gap-3 bg-[#0F417D] text-white rounded-2xl py-2 px-7'>
                <GrFormNextLink className='text-xl'/>
                Batafsil
              </button>
            </div>
            <div className='banner_imgsssss mt-10 md:'>
              <img className='w-full md:w-[500px] cart_img' src="https://umpt.uz/frontend/assets/images/about2.jpg" alt="" />
              <div>
              </div>
            </div>
          </div>

          <div className='mt-[40px]'>
            <h2 className='text-[20px] md:text-[50px]'>BIZNING MAHSULOTLAR</h2>
            <h2 className='text-[20px] md:text-[50px] ml-10'>«UZАUTO MOTORS POWERTRAIN»</h2>

            {/* <div>
            <Slider {...settings} className='h-[150px]'>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
            </div> */}

            <div>
            <div className="banner_second">
          <div className="container second_flex">
            <div className='container_body'>
            <Swiper
            scrollbar={{
            hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
            >
            

            <SwiperSlide className='myswiper mt-10'>
              <div className='swiper_flex block md:flex items-center justify-between max-w-[1000px] m-auto'>
               <div className='swiper_imgssss'>
               <h4 className='text-5xl'>01</h4>
                   <img className='w-full md:w-[250px] cart_img' src="https://umpt.uz/storage/upload/products/4_1697004410.jpg" alt="" />
               </div>
                <div className='swiper_textssss mt-8'>
                  <div className='flex items-center gap-2 text-[#0F417D]'>
                    <div className='h-[2px] w-6 bg-[#0F417D]'></div>
                   <p className='text-2xl md:text-3xl'> B-DOHC (2-AVLOD)</p>
                  </div>
                  <h2 className='text-2xl my-3'> B15D (L2C) </h2>
                  <ul>
                    {b_doh01.map((item,index) =>(
                      <li key={index} className='flex'> <TiTick/><div> {item.name} <b>{item.adition}</b></div></li>
                    ))}
                  </ul>
                  <button className='flex items-center mt-6 gap-3 bg-[#0F417D] text-white rounded-2xl py-2 px-7'>
                <GrFormNextLink className='text-xl'/>
                Batafsil
              </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='myswiper mt-10'>
              <h4 className='text-5xl'>02</h4>
              <div className='swiper_flex block md:flex items-center justify-between max-w-[1000px] m-auto'>
                <img className='w-full md:w-[250px] cart_img' src="https://umpt.uz/storage/upload/products/4_1697004410.jpg" alt="" />
                <div className='swiper_text mt-8'>
                  <div className='flex items-center gap-2 text-[#0F417D]'>
                    <div className='h-[2px] w-6 bg-[#0F417D]'></div>
                   <p className='text-2xl md:text-3xl'> B-DOHC (2-AVLOD)</p>
                  </div>
                  <h2 className='text-2xl my-3'> B12D (LLO) </h2>
                  <ul>
                    {b_doh02.map((item,index) =>(
                      <li key={index} className='flex items-center  mt-2  md:text-xl'><TiTick/> {item.name} <b>{item.adition}</b></li>
                    ))}
                  </ul>
                  <button className='flex items-center mt-6 gap-3 bg-[#0F417D] text-white rounded-2xl py-2 px-7'>
                <GrFormNextLink className='text-xl'/>
                Batafsil
              </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='myswiper mt-10'>
              <h4 className='text-5xl'>03</h4>
              <div className='swiper_flex block md:flex items-center justify-between max-w-[1000px] m-auto'>
                <img className='w-full md:w-[250px] cart_img' src="https://umpt.uz/storage/upload/products/6_1697004440_1697614215.jpg" alt="" />
                <div className='swiper_text mt-8'>
                  <div className='flex items-center gap-2 text-[#0F417D]'>
                    <div className='h-[2px] w-6 bg-[#0F417D]'></div>
                   <p className='text-2xl md:text-3xl'> CSS PRIME</p>
                  </div>
                  <h2 className='text-2xl my-3'> 1.2 (LIF) </h2>
                  <ul>
                    {b_doh03.map((item,index) =>(
                      <li key={index} className='flex items-center  mt-2  md:text-xl'><TiTick/> {item.name} <b>{item.adition}</b></li>
                    ))}
                  </ul>
                  <button className='flex items-center mt-6 gap-3 bg-[#0F417D] text-white rounded-2xl py-2 px-7'>
                <GrFormNextLink className='text-xl'/>
                Batafsil
              </button>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className='myswiper mt-10'>
              <h4 className='text-5xl'>04</h4>
              <div className='swiper_flex block md:flex items-center justify-between max-w-[1000px] m-auto'>
                <img className='w-full md:w-[250px] cart_img' src="https://umpt.uz/storage/upload/products/3_1697004395.jpg" alt="" />
                <div className='swiper_text mt-8'>
                  <div className='flex items-center gap-2 text-[#0F417D]'>
                    <div className='h-[2px] w-6 bg-[#0F417D]'></div>
                   <p className='text-2xl md:text-3xl'> B-DOHC (2-AVLOD)</p>
                  </div>
                  <h2 className='text-2xl my-3'> B15D (LM9) </h2>
                  <ul>
                    {b_doh04.map((item,index) =>(
                      <li key={index} className='flex items-center  mt-2  md:text-xl'><TiTick/> {item.name} <b>{item.adition}</b></li>
                    ))}
                  </ul>
                  <button className='flex items-center mt-6 gap-3 bg-[#0F417D] text-white rounded-2xl py-2 px-7'>
                <GrFormNextLink className='text-xl'/>
                Batafsil
              </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='myswiper mt-10'>
              <h4 className='text-5xl'>05</h4>
              <div className='swiper_flex block md:flex items-center justify-between max-w-[1000px] m-auto'>
                <img className='w-full md:w-[250px]' src="https://umpt.uz/storage/upload/products/2_1697004370.jpg" alt="" />
                <div className='swiper_text mt-8'>
                  <div className='flex items-center gap-2 text-[#0F417D]'>
                    <div className='h-[2px] w-6 bg-[#0F417D]'></div>
                   <p className='text-2xl md:text-3xl'> B-DOHC (2-AVLOD)</p>
                  </div>
                  <h2 className='text-2xl my-3'> B15D (L2C) </h2>
                  <ul>
                    {b_doh05.map((item,index) =>(
                      <li key={index} className='flex items-center  mt-2  md:text-xl'><TiTick/> {item.name} <b>{item.adition}</b></li>
                    ))}
                  </ul>
                  <button className='flex items-center mt-6 gap-3 bg-[#0F417D] text-white rounded-2xl py-2 px-7'>
                <GrFormNextLink className='text-xl'/>
                Batafsil
              </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='myswiper mt-10'>
              <h4 className='text-5xl'>06</h4>
              <div className='swiper_flex block md:flex items-center justify-between max-w-[1000px] m-auto'>
                <img className='w-full md:w-[250px]' src="https://umpt.uz/storage/upload/products/l4h_1697626655.jpg" alt="" />
                <div className='swiper_text mt-8'>
                  <div className='flex items-center gap-2 text-[#0F417D]'>
                    <div className='h-[2px] w-6 bg-[#0F417D]'></div>
                   <p className='text-2xl md:text-3xl'> CSS Prime</p>
                  </div>
                  <h2 className='text-2xl my-3'> 1.2L TURBO (L4H) </h2>
                  <ul>
                    {b_doh05.map((item,index) =>(
                      <li key={index} className='flex items-center  mt-2  md:text-xl'><TiTick/> {item.name} <b>{item.adition}</b></li>
                    ))}
                  </ul>
                  <button className='flex items-center mt-6 gap-3 bg-[#0F417D] text-white rounded-2xl py-2 px-7'>
                <GrFormNextLink className='text-xl'/>
                Batafsil
              </button>
                </div>
              </div>
            </SwiperSlide>



           
          </Swiper>
              </div>

          </div>
        </div>
            </div>
          </div>
        </div>

        <section>
            <h2 className='text-[30px] md:text-[55px] text-center'>YANGILIKLAR</h2>
          <Marquee className=''>
                <div className='flex gap-10'>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img class="rounded-t-lg w-full cart_img" src="https://umpt.uz/storage/upload/news_image/1719317113.jpg" alt="" />
                    <div className="p-3">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Turkmaniston Vazirlar Mahkamasi Raisini o’rinbosari B. Atdayev boshchiligidagi delegatsiyasining tashrifi</h5>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img class="rounded-t-lg w-full cart_img" src="https://umpt.uz/storage/upload/news_image/1719317113.jpg" alt="" />
                    <div className="p-3">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Turkmaniston Vazirlar Mahkamasi Raisini o’rinbosari B. Atdayev boshchiligidagi delegatsiyasining tashrifi</h5>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img class="rounded-t-lg w-full cart_img" src="https://umpt.uz/storage/upload/news_image/1719317113.jpg" alt="" />
                    <div className="p-3">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Turkmaniston Vazirlar Mahkamasi Raisini o’rinbosari B. Atdayev boshchiligidagi delegatsiyasining tashrifi</h5>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img class="rounded-t-lg w-full cart_img" src="https://umpt.uz/storage/upload/news_image/1719317113.jpg" alt="" />
                    <div className="p-3">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Turkmaniston Vazirlar Mahkamasi Raisini o’rinbosari B. Atdayev boshchiligidagi delegatsiyasining tashrifi</h5>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>

              
                
             
                </div>
         </Marquee>
        </section>

        <div className="m-auto mt-8" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.135435542163!2d69.27551267557378!3d41.30591720104537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b232a6559f7%3A0x1839c463a783508e!2zIlV6QXV0byBNb3RvcnMiINCQ0J4!5e0!3m2!1sen!2s!4v1722161731087!5m2!1sen!2s"
      style={{ position: 'absolute', top: 0,  left: 0, width: '100%', height: '100%', border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    <div>
    </div>
  </div>
      {/* <p className=' absolute '>loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhgygvhbn</p> */}



    </section>
    </div>
  )
}

export default Home