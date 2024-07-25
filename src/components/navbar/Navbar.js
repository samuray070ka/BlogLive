import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaSearch, FaEye, FaUser } from 'react-icons/fa';
import './Navbar.css';
import {Link} from 'react-router-dom'
import {aboutCompany, KorporativFaolyat} from '../../static/Index'

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
                {
                  aboutCompany.map((item, inx) => (
                <Link className='link' to={`${item.link}`} key={inx}>
                  <li className='dropdown-item' >{item.name}</li>
                </Link>
                  ))
                }
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown2' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                KORPORATIV FAOLIYAT
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown2'>
                {
                  KorporativFaolyat.map((item, inx) => (
                    <Link className='link' to={`${item.link}`} key={inx}>
                      <li className='dropdown-item'>{item.name}</li>
                    </Link>
                  ))
                }
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
                <li><a className='dropdown-item' href='#'>Bo'sh ish o'rinlari</a></li>
                <li><a className='dropdown-item' href='#'>Tanlov bosqichlari</a></li>
                <li><a className='dropdown-item' href='#'>Xodimlarning rotatsiyasi</a></li>
                <li><a className='dropdown-item' href='#'>Bizning afzaliklarimiz</a></li>
                <li><a className='dropdown-item' href='#'>Muvaqqiyat tarixi</a></li>
                <li><a className='dropdown-item' href='#'>Kompaniya xodimlari uchun ma'lumot</a></li>
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
