import React from 'react';

function Footer({setSelectedMatch}) {
  return (
    <div className='footer-content horizontal-limit'>
      <button className='invisible-button' onClick={()=>setSelectedMatch('')}>
        <div style={{ textAlign: 'left' }}>Back to Overview</div>
      </button>
      <button className='invisible-button'>
        <div style={{ textAlign: 'right' }}>Claim your Ticket</div>
      </button>
    </div>
  );
}

export default Footer;
