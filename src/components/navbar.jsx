import React, { useContext, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import "./navbar.css";
import { FormContext } from "../context/form-context";

export const Navbar  = ({ setToken, setUserName, setUserId }) => {
   const { userName, setUserNameContext, setTokenContext, setUserIdContext } = useContext(FormContext);
   const navigate = useNavigate();

   const handleLogout = () => {



      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      localStorage.removeItem('userId');
      
      setTimeout(() => {
         setUserNameContext('');
         setTokenContext('');
         setUserIdContext('');
         navigate(`${import.meta.env.VITE_API_BASE_URL}/login`);
         setToken('');
         setUserName('');
         setUserId('');
   
       }, 1000);
   };

   
   useEffect(() => {
      console.log("User Name:", userName);
   }, [userName]);  // This will log the userName whenever it changes

   return (
      <div className="navbar">
         <div className="left-links">
            <Link to={import.meta.env.VITE_API_BASE_URL}>Home</Link>
            <Link to={`${import.meta.env.VITE_API_BASE_URL}/formBuilder`}>Build Form</Link>
         </div>
         <div className="right-links">
            {userName ? (
               <>
                  <span className="welcome-message">Welcome, {userName}!</span>
                  <button className="logout-button" onClick={handleLogout}>
                     Logout
                  </button>
               </>
            ) : (
               <>
                  <Link to={`${import.meta.env.VITE_API_BASE_URL}/login`}>Login</Link>
                  <Link to={`${import.meta.env.VITE_API_BASE_URL}/register`}>Sign Up</Link>
               </>
            )}
         </div>
      </div>
   );
};
