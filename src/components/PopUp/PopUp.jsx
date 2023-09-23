import React from 'react';
import './Popup.scss';

const Popup = ({ isPopupOpen, closePopup, selectedFlag }) => {
  return (
    <div className={`popup-container ${isPopupOpen ? 'open' : ''}`}>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={closePopup}>
              &times;
            </span>
            <div className='flag-details-pop'>
              <div className='flag-image'>
                <img srcSet={selectedFlag.get('flag')} alt='FLag' className='flag-pop' />
              </div>
              <div className='flag-text'>
                <div>
                  <h3>{selectedFlag.get('Name')}</h3>
                </div>
                <div>
                  <strong>Native Name:</strong> {selectedFlag.get('Native Name')}
                </div>
                <div>
                  <strong>Population:</strong> {selectedFlag.get('population')}
                </div>
                <div>
                  <strong>Capital:</strong> {selectedFlag.get('Capital')}
                </div>
                <div>
                  <strong>Region:</strong> {selectedFlag.get('Region')}
                </div>
                <div>
                  <strong>Sub Region:</strong> {selectedFlag.get('Sub Region')}
                </div>
                <div>
                  <strong>TopLevel Domain:</strong> {selectedFlag.get('TopLevel Domain')}
                </div>
                <div>
                  <strong>Currencies:</strong> {selectedFlag.get('Currencies')}
                </div>
                <div>
                  <strong>Languages:</strong> {selectedFlag.get('Languages')}
                </div>
              </div>
            </div>



          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;