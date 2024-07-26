import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaSearch, FaEye, FaUser } from 'react-icons/fa';
import './Navbar.css';
import {Link} from 'react-router-dom'

function Navbar() {
  const [isSearchActive, setSearchActive] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!e.target.closest('.navbar_search') && !e.target.closest('.search_input')) {
        setSearchActive(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-success'>
      <div className="container">
        <a className='navbar-brand' href="#">
          <Link className='link' to={'/'}>
            <img className='navbar_logo' src="https://umpt.uz/frontend/assets/images/logo.svg" alt="Logo" />
          </Link>
        </a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown1' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                KOMPANIYA
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown1'>
                <Link className='link' to={'/kompaniya-haqida'}>
                  <li><a className='dropdown-item' href='#'>Kompaniya haqida</a></li>
                </Link>
                <Link className='link' to={'/maqsad'}>
                  <li><a className='dropdown-item' href='#'>Maqsad va qadriyatlarimiz</a></li>
                </Link>
                <Link className='link' to={'/qarashlarimiz'}>
                  <li><a className='dropdown-item' href='#'>Qarashlarimiz va vazifalarimiz</a></li>
                </Link>
                <Link className='link' to={'/kuzatuv'}>
                  <li><a className='dropdown-item' href='#'>Kuzatuv kengashi</a></li>
                </Link>
                <Link className='link' to={'/rahbaryat'}>
                  <li><a className='dropdown-item' href='#'>Rahbariyat</a></li>
                </Link>
                <Link className='link' to={'/tashkiliy'}>
                  <li><a className='dropdown-item' href='#'>Tashkiliy tuzilma</a></li>
                </Link>
                <Link className='link' to={'/rivojlanish'}>
                <li><a className='dropdown-item' href='#'>Rivojlantirish strategiyasi</a></li>
                </Link>
                <Link className='link' to={'/atrof'}>
                  <li><a className='dropdown-item' href='#'>Atrof-muhitni muhofaza qilish siyosati</a></li>
                </Link>
                <Link className='link' to={'/energiya'}>
                  <li><a className='dropdown-item' href='#'>Energiya boshqaruv tizimlari siyosati</a></li>
                </Link>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown2' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                KORPORATIV FAOLIYAT
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown2'>
                <Link className='link' to={'/korparativ'}>
                  <li><a className='dropdown-item' href='#'>Korporativ boshqaruv bo'yicha hujjatlar</a></li>
                </Link>
                <Link className='link' to={'/nizom'}>
                  <li><a className='dropdown-item' href='#'>Nizom</a></li>
                </Link>
                <Link className='link' to={'/aksiyadorlar'}>
                  <li><a className='dropdown-item' href='#'>Aksiyadorlar yig'ilishi</a></li>
                </Link>
                <Link className='link' to={'/affillangan'}>
                  <li><a className='dropdown-item' href='#'>Аffillangan shaxslar</a></li>
                </Link>
                <Link className='link' to={'/muhim'}>
                  <li><a className='dropdown-item' href='#'>Muhim faktlar</a></li>
                </Link>
                <Link className='link' to={'/mehnat'}>
                  <li><a className='dropdown-item' href='#'>Mehnat muxofazasi va texnik xavfsizlik</a></li>
                </Link>
                <Link className='link' to={'/dividendlar'}>
                  <li><a className='dropdown-item' href='#'>Dividendlar</a></li>
                </Link>
                <Link className='link' to={'/hisobotlar'}>
                  <li><a className='dropdown-item' href='#'>Hisobotlar</a></li>
                </Link>
                <Link className='link' to={'/harid'}>
                  <li><a className='dropdown-item' href='#'>Harid rejasi</a></li>
                </Link>
                <Link className='link' to={'/tanlov'}>
                  <li><a className='dropdown-item' href='#'>Tanlov (tender)</a></li>
                </Link>
                <Link className='link' to={'/jamiyat'}>
                  <li><a className='dropdown-item' href='#'>Jamiyat tomonidan sotib olingan aksiyalar</a></li>
                </Link>
                <Link className='link' to={'/biznes'}>
                  <li><a className='dropdown-item' href='#'>Biznes Reja</a></li>
                </Link>
                <Link className='link' to={'/qimmatli'}>
                  <li><a className='dropdown-item' href='#'>Qimmatli qog'ozlar emissiyasi</a></li>
                </Link>
                <Link className='link' to={'/auditor'}>
                  <li><a className='dropdown-item' href='#'>Auditor hulosalari</a></li>
                </Link>
                <Link className='link' to={'/moliyaviy'}>
                  <li><a className='dropdown-item' href='#'>Moliyaviy va iqtisodi holat ko'rsatkichlari</a></li>
                </Link>
                <Link className='link' to={'/jamiyat-yoki'}>
                  <li><a className='dropdown-item' href='#'>Jamiyat yoki uning boshqaruv organlari tomonidan tuzilgan kollegial va maslahat organlari</a></li>
                </Link>
                <Link className='link' to={'/aksiyadorlarning'}>
                  <li><a className='dropdown-item' href='#'>Aksiyadorlarning umumiy yig'ilishida qabul qilingan qarorlar bo'yicha ovoz berish yakunlari</a></li>
                </Link>
                <Link className='link' to={'/malaka'}>
                  <li><a className='dropdown-item' href='#'>Malaka oshirish</a></li>
                </Link>
              </ul>
            </li>
            <Link className='link' to={'/yangiliklar'}>
            <li className='nav-item'>
              <a className='nav-link' href='#'>YANGILIKLAR</a>
            </li>
            </Link>
            <Link className='link' to={'/mahsulotlar'}>
            <li className='nav-item'>
              <a className='nav-link' href='#'>MAHSULOTLAR</a>
            </li>
            </Link>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown3' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                ISHGA TAKLIF
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown3'>
                <Link className='link' to={'/bosh'}>
                  <li><a className='dropdown-item' href='#'>Bo'sh ish o'rinlari</a></li>
                </Link>
                <Link className='link' to={'/tanlov-bosqich'}>
                  <li><a className='dropdown-item' href='#'>Tanlov bosqichlari</a></li>
                </Link>
                <Link className='link' to={'/xodimlar'}>
                  <li><a className='dropdown-item' href='#'>Xodimlarning rotatsiyasi</a></li>
                </Link>
                <Link className='link' to={'/bizning'}>
                  <li><a className='dropdown-item' href='#'>Bizning afzaliklarimiz</a></li>
                </Link>
                <Link className='link' to={'/muvaqqiyat'}>
                  <li><a className='dropdown-item' href='#'>Muvaqqiyat tarixi</a></li>
                </Link>
                <Link className='link' to={'/kompaniya'}>
                  <li><a className='dropdown-item' href='#'>Kompaniya xodimlari uchun ma'lumot</a></li>
                </Link>
              </ul>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>ALOQA</a>
            </li>
          </ul>
          <div className='d-flex'>
            <button
              className='btn btn-outline-light position-relative'
              onMouseEnter={() => setSearchActive(true)}
              onMouseLeave={() => setSearchActive(false)}
            >
              <FaSearch />
              {isSearchActive && (
                <div className='search_input'>
                  <input type="text" placeholder="Qidiruv..." className='form-control' />
                  <FaSearch className='search' />
                </div>
              )}
            </button>
            <button className='btn btn-outline-light ms-2'><FaEye /></button>
            <button className='btn btn-outline-light ms-2'>UZ</button>
            <button className='btn btn-outline-light ms-2'><FaUser /></button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
