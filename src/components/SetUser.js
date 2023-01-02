import React, { useState } from 'react';

function SetUser({ user, handleUserChange }) {
  const [editMode, setEditMode] = useState(false)

  return (
    <div>
        <form onSubmit={(event) => handleUserChange(event)}>
          {!editMode ? 
            ( <div  className="dropdown-line">
              <select className='dropdown'>
                <option value="">-- Choose the user --</option>
              </select>
              <button className='button' onClick={()=>setEditMode(true)}>New</button>
            </div> ) :
            <div className="dropdown-line">
              <input className='dropdown' type="text" id="user" placeholder='Enter new user name and press submit'></input>
              <input type="submit" className='button' ></input>
              <button className='button'  onClick={()=>setEditMode(false)}>Back</button>
            </div>
          }
        </form>
    </div>
  );
}

export default SetUser;
