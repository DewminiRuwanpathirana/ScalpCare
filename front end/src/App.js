import logo from './logo.svg';
import home from './Images/home.png';
import './App.css';
import React, { useState } from 'react';
import LoginRegister from './Components/LoginRegister';
import UploadImage from './Components/UploadImage';
import DiseaseDetails from './Components/DiseaseDetails';
import Doctor from './Components/Doctor';
//import Services from './Components/Services';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [showDisease, setShowDisease] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false);
  /*const [showServices, setShowServices] = useState(false);*/

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };
  const toggleUpload = () => {
    setShowUpload(!showUpload);
  };
  const toggleDisease = () => {
    setShowDisease(!showDisease);
  };
  const toggleDoctor = () => {
    setShowDoctor(!showDoctor);
  };
  /*const toggleServices = () => {
    setShowServices(!showServices);
  };*/

  return (
    <div className={`root`}>
      <header className="header">
        <img src={logo} alt="Skin Disease Detection logo" className="header-logo"/>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">HOME</a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">ABOUT US</a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link" /*onClick={toggleServices}*/>SERVICES</a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">CONTACT US</a>
            </li>
          </ul>
        </nav>
        <button className="header-login-button" onClick={toggleLogin}>
          Login
        </button>
      </header>
      <main className="main">
        {!showLogin && !showUpload && !showDisease && !showDoctor && /*!showServices &&*/ (
          <>
            <div className='right-cont'>
              <h1 className='header-title'> ScalpCare </h1>
              <h4 className='head-text2'>HAIR AND SCALP DISEASE IDENTIFIER </h4>
              <button className="right-cont.detect-button" onClick={toggleUpload}>
                Get Started
              </button>
              <button className="right-cont.detect-button" onClick={toggleDisease}>
                Disease
              </button>
              <button className="right-cont.detect-button" onClick={toggleDoctor}>
                Doctor Details
              </button>
            </div>
            <div className='left-cont'>
              <img src={home} className='home-image' alt='home image'></img>
            </div>
          </>
        )}
      </main>
      {showLogin && (
        <div className="login-wrapper">
          <LoginRegister />
        </div>
      )}
      {showUpload && (
        <div className="login-wrapper">
          <UploadImage />
        </div>
      )}
      {showDisease && (
        <div className="login-wrapper">
          <DiseaseDetails />
        </div>
      )}
      {showDoctor && (
        <div className="login-wrapper">
          <Doctor />
        </div>
      )}
      {/*showServices && (
        <div className="login-wrapper">
          <setShowServices />
        </div>
      )*/}
    </div>
  );
}

export default App;
