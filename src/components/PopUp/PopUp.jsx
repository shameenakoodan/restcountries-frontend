import React from 'react';
import './Popup.scss';

const Popup = ({ isPopupOpen, closePopup ,selectedFlag}) => {
  return (
    <div className={`popup-container ${isPopupOpen ? 'open' : ''}`}>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={closePopup}>
              &times;
            </span>
            Flag Details
            {selectedFlag}
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
