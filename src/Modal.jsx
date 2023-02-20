import React, { useState } from "react";
import {Routes, Route, Link} from 'react-router-dom';

function MyModal() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div className="popup">
      <button type="button" className="openmodal" onClick={handleOpenModal}>
         | | | 
      </button>

      {showModal && (
        <div className="modal-backdrop">
            <button type="button" className="closemodal" onClick={handleCloseModal} >
                ×
              </button>
          <div className="modal">
            <Link to="/producatori" className='mod'>Producatori</Link>
            <Link to="/producatori" className='mod'>Producatori</Link>
            <Link to="/nutriente" className="mod">Mediul Nutrient</Link>
            <Link to="/chromogenic" className="mod">Mediul Chromogenic</Link>
            <Link to="/laborator" className="mod">Echipament de Laborator</Link>
            <Link to="/diagnostica" className="mod">Diagnostica Moleculara</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyModal;
