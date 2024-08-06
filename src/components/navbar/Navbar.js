import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaSearch, FaEye, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ThemeSwitcher from "../ThemeSwitcher";
import FontSizeAdjuster from "../FontSizeAdjuster";
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from "../../redux/themeSlice";

function Navbar() {
  const [navbar, setNavbar] = useState([]);
  const [error, setError] = useState(null);
  const [isSearchActive, setSearchActive] = useState(false);
  const [theme,setTheme] = useState("light");

  useEffect(() =>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])

  const handleThemeSwitch = () =>{
    setTheme(theme === "dark"  ? "light" : "dark")
  }

  useEffect(() => {
    fetch("https://uzavtomotors.pythonanywhere.com/categories/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setNavbar(data))
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (
        !e.target.closest(".navbar_search") &&
        !e.target.closest(".search_input")
      ) {
        setSearchActive(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  const dispatch = useDispatch();
  const currentColor = useSelector((state) => state.theme.color);

  const [openTopBar,setOpenTopBar] = useState(false);

  const openTop = () =>{
    setOpenTopBar(!openTopBar)
    console.log('working');
    
  }

  

  return (
    <>
    <nav className="navbar navbar-expand-lg  bg-success flex flex-col">
      <div className={`w-full h-[80px] bg-success grays ${openTopBar ? "block" : 'hidden'}`}>
         <div className="flex items-center justify-center">
         <FontSizeAdjuster />  
         <ThemeSwitcher/>
         </div>
      </div>
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img
            className="navbar_logo"
            src="https://umpt.uz/frontend/assets/images/logo.svg"
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navbar.slice(0, 2).map((item, inx) => (
              <li className="nav-item dropdown" key={inx}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id={`navbarDropdown${inx}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {item.name}
                </a>
                <ul className="dropdown-menu" aria-labelledby={`navbarDropdown${inx}`}>
                  {item.subcategories?.map((subitem, subinx) => (
                    <Link className="link" to={`/${subitem.slug}`} key={subinx}>
                      <li className="dropdown-item">{subitem.name}</li>
                    </Link>
                  ))}
                </ul>
              </li>
            ))}

            {navbar.slice(2, 4).map((item, inx) => (
              <Link className="link" to={`/${item.slug}`} key={inx}>
                <li className="nav-item">
                  <a className="nav-link">{item.name}</a>
                </li>
              </Link>
            ))}

            {navbar.slice(4, 5).map((item, inx) => (
              <li className="nav-item dropdown" key={inx}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id={`navbarDropdown${inx}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {item.name}
                </a>
                <ul className="dropdown-menu" aria-labelledby={`navbarDropdown${inx}`}>
                  {item.subcategories?.map((subitem, subinx) => (
                    <Link className="link" to={`/${subitem.slug}`} key={subinx}>
                      <li className="dropdown-item">{subitem.name}</li>
                    </Link>
                  ))}
                </ul>
              </li>
            ))}

            {navbar.slice(5, 6).map((item, inx) => (
              <li className="nav-item" key={inx}>
                <a className="nav-link">{item.name}</a>
              </li>
            ))}
          </ul>
          <div className="d-flex">
            <div
              className="btn btn-outline-light position-relative"
              onMouseEnter={() => setSearchActive(true)}
              onMouseLeave={() => setSearchActive(false)}
            >
              <FaSearch />
              {isSearchActive && (
                <div className="search_input">
                  <input
                    type="text"
                    placeholder="Qidiruv..."
                    className="form-control"
                  />
                  <FaSearch className="search" />
                </div>
              )}
            </div>
            <button className="btn btn-outline-light ms-2" onClick={openTop}>
              <FaEye />
            </button>
            
            
            <button className="btn btn-outline-light ms-2">UZ</button>
            <button className="btn btn-outline-light ms-2">
              <FaUser />
            </button>

          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
