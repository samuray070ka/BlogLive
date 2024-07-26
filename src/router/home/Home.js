import React, { useRef, useState } from 'react'
import './Home.css'
import {FaArrowRight, FaCheck, FaSearchLocation, FaPhone, FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaMailchimp, FaMailBulk} from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { FaMapLocation } from 'react-icons/fa6';
import img from '../../assets/image.png'

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
            <div className='container_body'>
              <h4 className='body_h4'>«UZАUTO MOTORS POWERTRAIN»</h4>
            <Swiper
            scrollbar={{
            hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
            >
            <SwiperSlide className='myswiper'>
              <h4 className='number'>01</h4>
              <div className='swiper_flex'>
                <img className='swiper_img' src="https://umpt.uz/storage/upload/products/4_1697004410.jpg" alt="" />
                <div className='swiper_text'>
                  <h4 className='swiper_text_h4'>-b-dohc(2-avlod)</h4>
                  <h5 className='swiper_text_h5'>b12(LLo)</h5>
                  <div className='icons_flex'>
                      <FaCheck className='icons_icon'/>
                      <h4 className='icons_h4'>Texnik tasnifi: <strong>HLa/DVCs/VGis</strong></h4>
                  </div>
                  <div className='icons_flex'>
                      <FaCheck className='icons_icon'/>
                      <h4 className='icons_h4'>Texnik tasnifi: <strong>HLa/DVCs/VGis</strong></h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='myswiper'>
              <h4 className='number'>01</h4>
              <div className='swiper_flex'>
                <img className='swiper_img' src="https://umpt.uz/storage/upload/products/4_1697004410.jpg" alt="" />
                <div className='swiper_text'>
                  <h4 className='swiper_text_h4'>-b-dohc(2-avlod)</h4>
                  <h5 className='swiper_text_h5'>b12(LLo)</h5>
                  <div className='icons_flex'>
                      <FaCheck className='icons_icon'/>
                      <h4 className='icons_h4'>Texnik tasnifi: <strong>HLa/DVCs/VGis</strong></h4>
                  </div>
                  <div className='icons_flex'>
                      <FaCheck className='icons_icon'/>
                      <h4 className='icons_h4'>Texnik tasnifi: <strong>HLa/DVCs/VGis</strong></h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='myswiper'>
              <h4 className='number'>01</h4>
              <div className='swiper_flex'>
                <img className='swiper_img' src="https://umpt.uz/storage/upload/products/4_1697004410.jpg" alt="" />
                <div className='swiper_text'>
                  <h4 className='swiper_text_h4'>-b-dohc(2-avlod)</h4>
                  <h5 className='swiper_text_h5'>b12(LLo)</h5>
                  <div className='icons_flex'>
                      <FaCheck className='icons_icon'/>
                      <h4 className='icons_h4'>Texnik tasnifi: <strong>HLa/DVCs/VGis</strong></h4>
                  </div>
                  <div className='icons_flex'>
                      <FaCheck className='icons_icon'/>
                      <h4 className='icons_h4'>Texnik tasnifi: <strong>HLa/DVCs/VGis</strong></h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
              </div>

          </div>
        </div>
        <div className="banner_yangilik">
          <h1 className='yangilik_h12'>YANGILIKLAR</h1>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }}
        // autoplay={{
        //   delay: 1000, 
        //   disableOnInteraction: false
        // }}
        pagination={false}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='yangilik_flex'>
            <div className="yangilik_card">
              <img className='yangilik_img' src="https://umpt.uz/storage/upload/news_image/1719317113.jpg" alt="" />
              <h2 className='yangilik_h2'>Turkmaniston Vazirlar Mahkamasi Raisini o’rinbosari B. Atdayev boshchiligidagi delegatsiyasining tashrifi
              </h2>
              <button className='yangilik_btn'>Batafsil</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='yangilik_flex'>
            <div className="yangilik_card">
              <img className='yangilik_img' src="https://umpt.uz/storage/upload/news_image/1719317113.jpg" alt="" />
              <h2 className='yangilik_h2'>Turkmaniston Vazirlar Mahkamasi Raisini o’rinbosari B. Atdayev boshchiligidagi delegatsiyasining tashrifi
              </h2>
              <button className='yangilik_btn'>Batafsil</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='yangilik_flex'>
            <div className="yangilik_card">
              <img className='yangilik_img' src="https://umpt.uz/storage/upload/news_image/1719317113.jpg" alt="" />
              <h2 className='yangilik_h2'>Turkmaniston Vazirlar Mahkamasi Raisini o’rinbosari B. Atdayev boshchiligidagi delegatsiyasining tashrifi
              </h2>
              <button className='yangilik_btn'>Batafsil</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='yangilik_flex'>
            <div className="yangilik_card">
              <img className='yangilik_img' src="https://umpt.uz/storage/upload/news_image/1719317113.jpg" alt="" />
              <h2 className='yangilik_h2'>Turkmaniston Vazirlar Mahkamasi Raisini o’rinbosari B. Atdayev boshchiligidagi delegatsiyasining tashrifi
              </h2>
              <button className='yangilik_btn'>Batafsil</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='yangilik_flex'>
            <div className="yangilik_card">
              <img className='yangilik_img' src="https://umpt.uz/storage/upload/news_image/1719317113.jpg" alt="" />
              <h2 className='yangilik_h2'>Turkmaniston Vazirlar Mahkamasi Raisini o’rinbosari B. Atdayev boshchiligidagi delegatsiyasining tashrifi
              </h2>
              <button className='yangilik_btn'>Batafsil</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='yangilik_flex'>
            <div className="yangilik_card">
              <img className='yangilik_img' src="https://umpt.uz/storage/upload/news_image/1719317113.jpg" alt="" />
              <h2 className='yangilik_h2'>Turkmaniston Vazirlar Mahkamasi Raisini o’rinbosari B. Atdayev boshchiligidagi delegatsiyasining tashrifi
              </h2>
              <button className='yangilik_btn'>Batafsil</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='yangilik_flex'>
            <div className="yangilik_card">
              <img className='yangilik_img' src="https://umpt.uz/storage/upload/news_image/1719317113.jpg" alt="" />
              <h2 className='yangilik_h2'>Turkmaniston Vazirlar Mahkamasi Raisini o’rinbosari B. Atdayev boshchiligidagi delegatsiyasining tashrifi
              </h2>
              <button className='yangilik_btn'>Batafsil</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='yangilik_flex'>
            <div className="yangilik_card">
              <img className='yangilik_img' src="https://umpt.uz/storage/upload/news_image/1719317113.jpg" alt="" />
              <h2 className='yangilik_h2'>Turkmaniston Vazirlar Mahkamasi Raisini o’rinbosari B. Atdayev boshchiligidagi delegatsiyasining tashrifi
              </h2>
              <button className='yangilik_btn'>Batafsil</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
        <div className='container flex_btn'>
      <button className='yangiliklar_all'><FaArrowRight className='all_icon'/> Barcha yangiliklar</button>
        </div>
        </div>
        <div className="map">
          <div className='map_child'>
          <img className='maps' src={img} frameborder="0"></img>
          </div>
          <div className='map_text'>
            <h3 className='map_h3'>-Aloqa</h3>

            <h2>Biz bilan aloqa</h2>
            <div className='aloqa_flex'>
              <div className='box'>
                <FaMapLocation className='box_iconn'/>
                <p className='box_p'>locationO‘zbekiston Respublikasi, Toshkent shahar, Sirg‘ali tumani, Yangi Qumariq MFI, Istiqlol ko‘chasi, 1-uy.</p>
              </div>

              <div className='box'>
                  <div className='flex_box'>
                  <FaPhone className='box_icon'/>
                  <p className='box_p'>Administrativ savollar bo'yicha:</p>
                  </div>
                <a href="" className='href'>+998 71 2806400</a>
              </div>

              <div className='box'>
                <FaMailBulk className='box_icon'/>
                <p className='box_p '>info@umpt.uz</p>
              </div>

              <div className='box'>
                <div className='flex_box'>
                <FaPhone className='box_iconn'/>
                <p className='box_p'> Muvofiqlik xizmatiga qo'ng'iroqlar uchun</p>
                </div>
                <a href="" className='href'>+998 71 280 65 40</a>
                <p className='box_p '>Muvofiqlik xizmatining ishonch telefoni</p>
                <a href="" className='href'>+998 71 280 66 44</a>
              </div>
              <div className='box'>
                <div className='flex_box'>
                  <FaMailBulk className='box_icon'/>
                  <p className='box_p '>compliance@umpt.uz</p>
                </div>
                <div className='flex_box'>
                  <FaFacebook className='icon'/>
                  <FaLinkedin className='icon'/>
                  <FaYoutube className='icon'/>
                  <FaInstagram className='icon'/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home