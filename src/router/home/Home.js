import React, { useRef, useState } from 'react'
import './Home.css'
import {FaArrowRight} from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

function Home() {
  return (
    <div className='home'>
        <div className='video'>
        <div className="video-container">
        <video className="homepage-video" autoPlay loop muted>
          <source className='video_home' src="https://umpt.uz/storage/upload/slider_image/1692765835.mp4" type="video/mp4" />
        </video>
      </div>
        </div>
        <div className="banner">
          <div className="container banner_flex">
          <div className='banner_text'>
            <h3 className='banner_text_h3'>-Biz haqimizda</h3>
            <h4 className='banner_text_h4'>«UZAUTO MOTORS POWERTRAIN»</h4>
            <p className='banner_text_p'>“UzAuto Motors Powertrain” maqbul quvvat va optimal yoqilg'i sarfi uchun mo'ljallangan benzin va ikki xil yonilg’ili (benzin / gaz) B-DOHC (Double Overhead Camshaft) ikkinchi avlod dvigatellarini ishlab chiqaradi. Ular O'zbekiston bozori uchun mo’ljallangan bo’lib, shuningdek, Rossiya, AQSh va MDH davlatlariga ham eksport qilinadi.</p>
            <button className='banner_text_btn'><FaArrowRight className='banner_text_icon'/> Batafsil</button>
          </div>
          <div className="banner_imgs">
          <img className='banner_imgs_two' src="	https://umpt.uz/frontend/assets/images/about1.jpg" alt="" />
            <img className='banner_imgs_one' src="https://umpt.uz/frontend/assets/images/about2.jpg" alt="" />
            
          </div>
        </div>
        </div>
        <div className="banner_second">
          <div className="container second_flex">
            <h2 className='second_h2'>BIZNING MAHSULOTLAR</h2>
            <h4>«UZАUTO MOTORS POWERTRAIN»</h4>
            <Swiper
            scrollbar={{
            hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
            >
            <SwiperSlide>Slide </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>

          </div>
        </div>
    </div>
  )
}

export default Home