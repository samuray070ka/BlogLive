import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaSearch, FaEye, FaUser } from 'react-icons/fa';
import './Navbar.css';
import {Link} from 'react-router-dom'

function Navbar() {
  const [navbar, setNavbar] = useState([]);
  const [error, setError] = useState(null);

  const [isSearchActive, setSearchActive] = useState(false);
  useEffect(() => {
    fetch('https://uzavtomotors.pythonanywhere.com/categories/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setNavbar(data); // Ma'lumotlarni davlatga saqlash
      })
      .catch(error => {
        setError(error); // Xatolikni davlatga saqlash
      });
  }, []); // Faqat bir marta bajariladi

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
          {
                navbar.slice(0, 2).map((item, inx) => (
                  <li className='nav-item dropdown' key={inx}>
                    <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown1' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                      {item.name}
                    </a>
                    <ul className='dropdown-menu' aria-labelledby='navbarDropdown1'>
                      {
                        item.subcategories.map((item, inx) => (
                          <Link className='link' to={`/${item.slug}`} key={inx}>
                          <li className='dropdown-item'>{item.name}</li>
                        </Link>
                        ))
                      }

                    </ul>
                  </li>
          ))
        }

        {
          navbar.slice(2, 4).map((item, inx) => (
            <Link className='link' to={`/${item.slug}`} key={inx}>
            <li className='nav-item'>
              <a className='nav-link'>{item.name}</a>
            </li>
            </Link>
          ))
        }
            

            {
                navbar.slice(4, 5).map((item, inx) => (
                  <li className='nav-item dropdown' key={inx}>
                    <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown1' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                      {item.name}
                    </a>
                    <ul className='dropdown-menu' aria-labelledby='navbarDropdown1'>
                      {
                        item.subcategories.map((item, inx) => (
                          <Link className='link' to={`/${item.slug}`} key={inx}>
                          <li className='dropdown-item'>{item.name}</li>
                        </Link>
                        ))
                      }

                    </ul>
                  </li>
          ))
        }

            {
              navbar.slice(5, 6).map((item, inx) => (
                <li className='nav-item' key={inx}>
                  <a className='nav-link'>{item.name}</a>
                </li>
              ))
            }
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
