import React from 'react';

function SetUser({ user, handleUserChange }) {
  return (
    <div className="set-user">
      <div>
        <form onSubmit={(event) => handleUserChange(event)}>
          <label>Set User: </label>
          <input type="text" id="user"></input>
          <input type="submit"></input>
        </form>
      </div>
      <div>Current User: {user !== '' && user}</div>
    </div>
  );
}

export default SetUser;
