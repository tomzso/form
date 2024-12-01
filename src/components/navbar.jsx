import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";
import { FormContext } from "../context/form-context";

export const Navbar = ({ setToken, setUserName, setUserId  }) => {
  const {
    userName,
    setUserNameContext,
    setTokenContext,
    setUserIdContext,
  } = useContext(FormContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  const location = useLocation();

  let navbarClass;

  // if (location.pathname.includes('login') || location.pathname.includes('register') || location.pathname.includes('stats')) {
  //   navbarClass = '';
  // } else if (location.pathname.includes('formBuilder') || location.pathname.includes('edit')) {
  //   navbarClass = 'navbar-form-builder';
  // } else if (/^\/form\/.+/.test(location.pathname )) {
  //  navbarClass = 'navbar-form-render';
  //  } else{
  //     navbarClass = 'navbar-form-render';
  // }
  // console.log("Navbar Class:", navbarClass); 


  

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    setMenuOpen(false);

    setTimeout(() => {
      setUserNameContext("");
      setTokenContext("");
      setUserIdContext("");
      navigate(`${import.meta.env.VITE_API_BASE_URL}/login`);
      setToken("");
      setUserName("");
      setUserId("");
    }, 1000);
  };

  useEffect(() => {
    console.log("User Name:", userName);
  }, [userName]); // Logs the userName whenever it changes

  // Close the menu on link click (for mobile view)
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
   <nav className={`navbar ${navbarClass}`}>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`left-links ${menuOpen ? "active" : ""}`}>
        <Link to={import.meta.env.VITE_API_BASE_URL} onClick={closeMenu}>Home</Link>
        <Link to={`${import.meta.env.VITE_API_BASE_URL}/formBuilder`} onClick={closeMenu}>Build Form</Link>
      </div>
      <div className={`right-links ${menuOpen ? "active" : ""}`}>
        {userName ? (
          <>
            {menuOpen ? "active" : ""} <span className="welcome-message">Welcome, {userName}!</span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={`${import.meta.env.VITE_API_BASE_URL}/login`} onClick={closeMenu}>Login</Link>
            <Link to={`${import.meta.env.VITE_API_BASE_URL}/register`} onClick={closeMenu}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};
