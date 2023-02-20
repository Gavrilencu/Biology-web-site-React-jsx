import {Routes, Route, Link} from 'react-router-dom';
import React from 'react';
import logo from './images/logo.png';
import Home from './pages/Home';
import Chromogenic from './pages/Chromogenic';
import Diagnostica from './pages/Diagnostica';
import Error from './pages/Error';
import Laborator from './pages/Laborator';
import Nutriente from './pages/Nutriente';
import Producatori from './pages/Producatori';
import image from './catalog/background.jpg'
import Modal from './Modal';
import mail from './images/mail.svg';
import phone from './images/phone.svg';





function Header() {
  return (
    <div className="App">
      <img src={image} className="background" />
      <header className='header'>
        <Link to="/"><img src={logo} className="logo"/></Link>
        <div className="information">
          <div className="number">
            <img src={phone} alt="" className="logo_number" />
            <span className="phone">078 77 22 00</span>
          </div>
          <div className="mail">
            <img src={mail} alt="" className="logo_mail" />
            <span className='email'>gmmbiotechnology@gmail.com</span>
          </div>
        </div>
        
        <Modal/>
      </header>
      
      <div className="submenu">
        <Link to="/producatori" className='list'>Producatori</Link>
        <Link to="/nutriente" className="list">Mediul Nutrient</Link>
        <Link to="/chromogenic" className="list">Mediul Chromogenic</Link>
        <Link to="/laborator" className="list">Echipament de Laborator</Link>
        <Link to="/diagnostica" className="list">Diagnostica Moleculara</Link>
      </div>
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/producatori' element={<Producatori/>} />
            <Route path='/nutriente' element={<Nutriente/>} />
            <Route path='/chromogenic' element={<Chromogenic/>} />
            <Route path='/diagnostica' element={<Diagnostica/>} />
            <Route path='/laborator' element={<Laborator/>} />
            <Route path='*' element={<Error/>} />
 
      </Routes>
    </div>
   
  );
}

export default Header;
