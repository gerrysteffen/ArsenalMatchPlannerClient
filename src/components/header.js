import React from 'react';

function Header() {
  return (
    <div className='header'>
      <div>
        <img src='./graphics/Arsenal_FC.svg' height='100px'></img>
      </div>
      <div>
        <h1 id='title'>Tom's Match Planner</h1>
      </div>
    </div>
  );
}

export default Header;