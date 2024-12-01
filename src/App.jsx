import './App.css';
import React, { useState } from 'react';
import { Navbar } from './components/navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from './pages/home/home';
import { LoginSignup } from './pages/loginSignup/loginSignup';

import { FormBuilder } from './pages/formBuilder/formBuilder';
import {PageNotAvailable} from './pages/pageNotAvailable/pageNotAvailable';
import { RenderForm } from './pages/renderForm/renderForm';
import { ImageSliderHome } from './pages/imageSlider/imageSliderHome';

import { Stats } from './pages/stats/stats';

import { FormContextProvider, FormContext } from './context/form-context';



function App() {

  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
  
  const homeUrl = import.meta.env.VITE_API_BASE_URL;



 
  return (
    <div className='App'>
      <FormContextProvider>
        <Router>
        <Navbar
            setToken={setToken} 
            setUserName={setUserName} 
            setUserId={setUserId}
    

        />



        {/* <Navbar />*/}
          <Routes>

          <Route 
              path={homeUrl}
              element={token ? <Home /> : < ImageSliderHome />} 
            />




            <Route 
              path={`${homeUrl}/register`} 
              element={
                token ? <PageNotAvailable/> : <LoginSignup 
                setToken={setToken} 
                setUserName={setUserName} 
                setUserId={setUserId} 
                 />
              } 
            />

            <Route 
              path={`${homeUrl}/login`} 
              element={
                token ? <PageNotAvailable/>  : <LoginSignup 
                setToken={setToken} 
                setUserName={setUserName} 
                setUserId={setUserId} 
                />
              } 
            />



            
            {/* Directly add the conditional rendering in the Route */}
            <Route 
              path= {`${homeUrl}/formBuilder`} 
              element={
                token ? <FormBuilder /> : <Navigate to={`${homeUrl}/login`}  />
              } 
            />

            <Route 
              path= {`${homeUrl}/edit/*`} 
              element={token ? <FormBuilder /> : <Navigate to={`${homeUrl}/login`}  />} 
            />

            <Route 
              path= {`${homeUrl}/stats/*`} 
              element={token ? <Stats /> : <Navigate to={`${homeUrl}/login`}  />} 
            />


            {/* Default route for unmatched paths */}
            <Route path={`${homeUrl}/*`} element={<RenderForm />} />

          </Routes>
        </Router>
      </FormContextProvider>
    </div>
  );
}

export default App;
