import React from 'react';
import { BsFillPersonFill } from "react-icons/bs";

function Header() {
  return (
    <div className='header'>
      <div className='header'>
        <div>
          <img src='./graphics/Arsenal_FC.svg' alt='Arsenal FC logo' height='40px'></img>
        </div>
        <div>
          <h1 className='title'>Tom's Match Planner</h1>
        </div>
      </div>
      <div>
        <BsFillPersonFill size='32px' color='white' />
      </div>
    </div>
  );
}

export default Header;