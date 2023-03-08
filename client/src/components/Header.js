import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

function Header() {
  return (
    <div className='flex-row-between horizontal-limit'>
      <div style={{width: '40px', textAlign: 'left'}}>
        <img
          src='./graphics/Arsenal_FC.svg'
          alt='Arsenal FC logo'
          height='40px'
        ></img>
      </div>
      <div>
        <h1 className='title'>Tom's Match Planner</h1>
      </div>
      <div style={{width: '40px', textAlign: 'right'}}>
        <BsFillPersonFill size='32px' color='white' />
      </div>
    </div>
  );
}

export default Header;
