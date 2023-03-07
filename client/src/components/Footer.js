import React from 'react';

function Footer() {
  return (
    <div className='footer-content horizontal-limit'>
      <button className='invisible-button'>
        <div style={{ textAlign: 'left' }}>Go Back</div>
      </button>
      <button className='invisible-button'>
        <div style={{ textAlign: 'center' }}>Claim Ticket</div>
      </button>
      <button className='invisible-button'>
        <div style={{ textAlign: 'right' }}>Reservations</div>
      </button>
    </div>
  );
}

export default Footer;
